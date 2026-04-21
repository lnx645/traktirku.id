/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactNode } from 'react';
import styled from '@emotion/styled';
import mq from '@/lib/breakpoints';
export const BaseNavbarWrapper = styled.div`
    label: header;
    background: white;
    width:100%;
    border-bottom:1px solid rgba(0, 0, 0, 0.08);
    height: var(--h-navbar);
`;
export const BaseNavbarWrapperMain = styled.div(
    mq({
        display: 'flex',
        alignItems: 'center',
        height: 'var(--h-navbar)',
    }),
);

export const BaseNavbar = ({ children }: { children: ReactNode }) => {
    return (
        <BaseNavbarWrapper>
            <BaseNavbarWrapperMain>{children}</BaseNavbarWrapperMain>
        </BaseNavbarWrapper>
    );
};
