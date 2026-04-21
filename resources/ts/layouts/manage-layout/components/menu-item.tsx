import { Link } from '@inertiajs/react';
import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import mq from '@/lib/breakpoints';
type Props = {
    children: ReactNode;
    icon: any;
};
const LinkWrapper = styled(Link)({
    display: 'flex',
    alignItems: 'center',
    padding: '7px 10px',
    borderRadius: 8,
    border: '1px solid transparent',
    gap: 10,
    ':hover': {
        border: '1px solid rgba(0, 0, 0, 0.08)',
        background:
            'linear-gradient(0deg, rgba(0, 0, 0, 0.01) 0%, rgba(0, 0, 0, 0.01) 100%), linear-gradient(92deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.04) 100%)',
    },

    textDecoration: 'none',
});
const LinkWrapperContent = styled.span(
    mq({
        fontSize: 13,
        lineHeight: '16px',
        position: 'relative',
        color: '#000000A6',
        fontWeight: 600,
        display: ['none', 'none', 'none', 'block'],
    }),
);
const Icon = styled.div({
    width: 18,
    height: 18,
    color: '#000000A6',
    '&>svg': {
        width: 18,
        height: 18,
    },
});
const MenuItem = React.forwardRef<Props, any>((props, ref) => {
    return (
        <LinkWrapper ref={ref}>
            <Icon>{props.icon}</Icon>
            <LinkWrapperContent>{props.children}</LinkWrapperContent>
        </LinkWrapper>
    );
});
export default MenuItem;
