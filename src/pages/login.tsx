import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { TextField, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate(),
        validationSchema = Yup.object({
            email: Yup.string().required(),
            password: Yup.string().required()
        }),
        { register, handleSubmit, formState: { isValid } } = useForm({
            resolver: yupResolver(validationSchema),
        }),
        onSubmit = () => {
            navigate('/dashboard');
        };
    return (
        <Container maxWidth="xs">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Login</h1>
                <TextField {...register("email")}
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField {...register("password")}
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
                    disabled={!isValid}
                >
                    Submit
                </Button>
            </form>
        </Container>
    );
};
export default Login;