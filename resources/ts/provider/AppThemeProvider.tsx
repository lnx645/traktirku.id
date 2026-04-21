import { css, Global, ThemeProvider } from '@emotion/react';
import { lightTheme } from '../theme';
import { ReactNode, useEffect } from 'react';
import '@fontsource-variable/quicksand/wght.css';
const reset = css`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }

    * {
        margin: 0;
        padding: 0;
    }

    body {
        background: var(--bg-color);
        color:var(--text-color);
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        font-family: 'Quicksand Variable', sans-serif;
    }

    img,
    picture,
    video,
    canvas,
    svg {
        display: block;
        max-width: 100%;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
    }
`;

export const GlobalStyles = () => <Global styles={reset} />;
export const AppThemeProvider = (props: { children: ReactNode }) => {
    useEffect(() => {
        document.body.setAttribute('data-theme', 'dark');
    }, []);
    return (
        <ThemeProvider theme={lightTheme}>
            <Global
                styles={() =>
                    css({
                        body: {
                            color: `var(--text-color)`,
                            background: `var(--bg-color)`,
                        },
                        ...reset,
                    })
                }
            />
            {props.children}
        </ThemeProvider>
    );
};
