/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactNode } from 'react';

const headerStyles = css`
    label: header;
    background: white;
    box-shadow: 0px 0px 8px #dedede;
    height: var(--h-navbar);
`;
const headerWrapper = css`
    height: var(--h-navbar);
    display: flex;
    padding-inline: 3rem;
    align-items: center;
`;
export const BaseNavbar = ({children}:{children:ReactNode}) => {
    return (
        <div css={headerStyles}>
            <div css={headerWrapper}>
                {children}
            </div>
        </div>
    );
};
