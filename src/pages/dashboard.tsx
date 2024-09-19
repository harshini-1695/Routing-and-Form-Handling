import { Button } from '@mui/material';
import { useAuth } from '../components/authHelper';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
    const auth = useAuth(),
        navigate = useNavigate();
    return (
        <>
            <h2>You are logged in.</h2>
            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => {
                    auth?.signout(() => navigate("/"));
                }}
            >
                Sign Out
            </Button>
        </>
    );
};

export default Dashboard;