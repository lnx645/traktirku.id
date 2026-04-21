import styled from '@emotion/styled';
import { Link as InertiaLink } from '@inertiajs/react';
import { ReactNode } from 'react';
const LinkBase = styled(InertiaLink)`
    font-size: 14px;
    color: rgb(82, 82, 82);
    text-decoration: none;
    transition: color 150ms ease-in-out;
    &:hover {
        color: rgb(82, 82, 82, 0.7);
    }
`;
export const Link = (props: { children: ReactNode }) => {
    return <LinkBase>{props.children}</LinkBase>;
};
