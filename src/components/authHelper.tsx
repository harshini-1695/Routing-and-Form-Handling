import React from 'react';  

let AuthContext = React.createContext<AuthContextType | null>(null);

interface AuthContextType {
    user: any;
    signin: (newUser: any, callback: VoidFunction) => void;
    signout: (callback: VoidFunction) => void;
}

const fakeAuthProvider = {
    isAuthenticated: false,
    signin(callback: VoidFunction) {
        fakeAuthProvider.isAuthenticated = true;
        setTimeout(callback, 100);
    },
    signout(callback: VoidFunction) {
        fakeAuthProvider.isAuthenticated = false;
        setTimeout(callback, 100);
    },
};

function AuthHelper({ children }: { children: React.ReactNode }) {
    const [user, setUser] = React.useState<any>(null);

    React.useEffect(() => {
        const storedUser = localStorage.getItem('authUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            fakeAuthProvider.isAuthenticated = true;
        }
    }, []);

    const signin = (newUser: any, callback: VoidFunction) => {
        return fakeAuthProvider.signin(() => {
            setUser(newUser);
            localStorage.setItem('authUser', JSON.stringify(newUser));
            callback();
        });
    };

    const signout = (callback: VoidFunction) => {
        return fakeAuthProvider.signout(() => {
            setUser(null);
            localStorage.removeItem('authUser');
            callback();
        });
    };

    const value = { user, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
    return React.useContext(AuthContext);
}

export { AuthHelper, useAuth };
