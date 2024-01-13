
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useRef } from 'react';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
// selective data
const currencies = [
    {
        value: 'USD',
    },
    {
        value: 'EUR',
    },
    {
        value: 'BTC',
    },
    {
        value: 'JPY',
    },
];

export default function SignIn() {
    // input ref
    const emailRef = useRef();
    const passwordRef = useRef();
    const [showPassword, setShowPassword] = React.useState(false);
    const [fields, setFields] = React.useState({
        email: '',
        password: '',
    });
    //functions
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const ValueHandler = (event) => {
        setFields((prevFields) => ({
            ...prevFields,
            [event.target.name]: event.target.value,
        }));
    };

    return (

        <Container component="main" maxWidth="sm">
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
                    p: 6,
                }}
            >
                <Typography component="h1" variant="h4" fontWeight={700} my={2}>
                    Sign Up
                </Typography>
                <Box component="form" onSubmit={ValueHandler} Validate width={'100%'} sx={{ mt: 1 }} >
                    <Typography component="p" variant="p" fontWeight={600}>
                        Name *
                    </Typography>
                    <TextField
                        variant="standard"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        type="text"
                        name="name"
                        autoFocus
                        onChange={(event) => ValueHandler(event)}
                    />
                    <Typography component="p" variant="p" fontWeight={600}>
                        email *
                    </Typography>
                    <TextField
                        variant="standard"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        type="email"
                        name="email"
                        autoFocus
                        ref={emailRef}
                        onChange={(event) => ValueHandler(event)}
                    />
                    <Typography component="p" variant="p" fontWeight={600}>
                        password *
                    </Typography>
                    <TextField
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
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
                    <Typography component="p" variant="p" fontWeight={600}>
                        Team Location
                    </Typography>
                    <TextField
                        variant="standard"
                        margin="normal"
                        required={true}
                        fullWidth
                        name="TemLocation"
                        type="text"
                        id="TemLocation"
                        ref={passwordRef}
                        onChange={(event) => ValueHandler(event)}
                    />
                    <Typography component="p" variant="p" fontWeight={600}>
                        How did you hear about us?
                    </Typography>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Select"
                        defaultValue="EUR"
                        variant="standard"
                        fullWidth
                        sx={{
                            width: 'inherit',
                        }}
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={ValueHandler}
                        disabled={fields.email?.length === 0 || null || fields.password?.length === 0 || null}
                    >
                        Sign Up
                    </Button>
                </Box>
                <Box
                    sx={{
                        mt: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffff',
                    }}
                >
                    <Link href="/auth/SignUp" fontSize={12} color={"#e0eee0"}>
                        {"By creating an account you agree to our  Terms of Use and Privacy Policy"}
                    </Link>

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
                       
                        <Grid item display={'flex'} justifyContent={'center'}>
                            <Link href="/"  variant='body' color={'#fff'}>
                                {"already have an account? Sign in"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
        </Container>

    );
}
