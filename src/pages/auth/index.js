import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useRef } from 'react';


export default function SignUp() {
    // input ref
    const emailRef = useRef();
    const passwordRef = useRef();
    const [fields, setFields] = React.useState(
        {
            email: "",
            password: ""
        }
    )

    const ValueHandler = (event) => {
        setFields((prevFields) => ({
            ...prevFields,
            [event.target.name]: event.target.value,
        }));
    };
    return (
        <Grid>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 16,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        justifyContent: 'start',
                        backgroundColor: '#ffffff',
                        borderRadius: 5,
                        p: 6
                    }}
                >

                    <Typography component="h1" variant="h4" fontWeight={700} my={2}>
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={ValueHandler} Validate sx={{ mt: 1 }}>
                        <Typography component="p" variant="p" fontWeight={600}>
                            email
                        </Typography>
                        <TextField
                            variant="standard"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            type='email'
                            name="email"
                            autoFocus
                            ref={emailRef}
                            onChange={(event) => ValueHandler(event)}
                        />
                        <Typography component="p" variant="p" fontWeight={600}>
                            password
                        </Typography>

                        <TextField
                            variant="standard"
                            margin="normal"
                            required={true}
                            fullWidth
                            name="password"
                            type="password"
                            id="password"
                            ref={passwordRef}
                            onChange={(event) => ValueHandler(event)}
                        />


                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={ValueHandler}
                            disabled={fields.email?.length === 0 || null || fields.password?.length === 0 || null}
                        >
                            Sign In
                        </Button>

                    </Box>
                </Box>

                <Box
                    sx={{
                        mt:4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffff',
                    }}
                >
                    <Grid  justifyContent={'center'} spacing={2}>
                        <Grid item display={'flex'} justifyContent={'center'} >
                            <Link  href="/auth/ResetPassword" variant='body'  color={'#fff'}>
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item display={'flex'} justifyContent={'center'}>
                            <Link href="/auth/SignUp"  variant='body' color={'#fff'}>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Grid>
    );
}













