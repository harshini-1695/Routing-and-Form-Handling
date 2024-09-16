import { TextField, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate(),
        handleSubmit = () => {
            navigate('/dashboard');
        };
    return (
        <Container maxWidth="xs">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type='submit'
                >
                    Submit
                </Button>
            </form>
        </Container>
    );
};
export default Login;