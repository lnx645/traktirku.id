/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactNode } from 'react';
import styled from '@emotion/styled';
import mq from '@/lib/breakpoints';
const Wrapper = styled.div`
    label: header;
    background: white;
    box-shadow: 0px 0px 8px #dedede;
    height: var(--h-navbar);
`;
const NavbarWrapperMain = styled.div(
    mq({
        display: 'flex',
        alignItems: 'center',
        height: 'var(--h-navbar)',
        paddingInline: [10, 42],
    }),
);

export const BaseNavbar = ({ children }: { children: ReactNode }) => {
    return (
        <Wrapper>
            <NavbarWrapperMain>{children}</NavbarWrapperMain>
        </Wrapper>
    );
};
