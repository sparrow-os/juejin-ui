'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {PaletteMode} from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import getSignInSideTheme from './getSignInSideTheme';
import ToggleColorMode from './ToggleColorMode';
import SignInCard from './SignInCard';
import Content from './Content';

export default function SignInSide() {
    const [mode, setMode] = React.useState<PaletteMode>('light');
    const SignInSideTheme = createTheme(getSignInSideTheme(mode));
    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeProvider theme={SignInSideTheme}>
            <CssBaseline/>
            <Stack
                direction="column"
                component="main"
                sx={[
                    {
                        justifyContent: 'space-between',
                    },
                    (theme) => ({
                        backgroundImage:
                            'radial-gradient(ellipse at 70% 51%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
                        backgroundSize: 'cover',
                        height: {xs: 'auto', md: '100dvh'},
                        pb: {xs: 12, sm: 0},
                        ...theme.applyStyles('dark', {
                            backgroundImage:
                                'radial-gradient(at 70% 51%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
                        }),
                    }),
                ]}
            >
                <Stack
                    direction="row"
                    sx={{
                        justifyContent: 'space-between',
                        position: {sm: 'static', md: 'fixed'},
                        width: '100%',
                        p: {xs: 2, sm: 4},
                    }}
                >
                    <Button
                        startIcon={<ArrowBackRoundedIcon/>}
                        component="a"
                        href="/material-ui/getting-started/templates/"
                    >
                        Back
                    </Button>
                    <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode}/>
                </Stack>
                <Stack
                    direction={{xs: 'column-reverse', md: 'row'}}
                    sx={{
                        justifyContent: 'center',
                        gap: {xs: 6, sm: 12},
                        height: {xs: '100%', md: '100dvh'},
                        p: 2,
                    }}
                >
                    <Content/>
                    <SignInCard/>
                </Stack>
            </Stack>
        </ThemeProvider>
    );
};
