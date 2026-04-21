/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';
import BaseLayout from './BaseLayout';

import {
    BaseNavbar,
    BaseNavbarWrapper,
    BaseNavbarWrapperMain,
} from '@/components/BaseNavbar';
import Logo from '@/components/Logo';
import mq from '@/lib/breakpoints';
import styled from '@emotion/styled';
import { Avatar } from '@/components/Avatar';
import SidebarMenuCreator from './manage-layout/components/sidebar-menu';

const SidebarContent = styled.aside(
    mq({
        padding: [0, 0, 5, "10px 17px"],
        overflowY: 'auto',
        minHeight: 'calc(100vh - var(--h-navbar))',
        maxHeight: 'calc(100vh - var(--h-navbar))',
        background: '#fff',
        borderRight: '1px solid rgba(0, 0, 0, 0.08)',
    }),
);

const LayoutWrapper = styled.div(
    mq({
        maxWidth: '100%',
    }),
);
const LayoutWrapperContent = styled.div(
    mq({
        display: 'grid',
        gridTemplateColumns: ['1fr', '50px 1fr', '50px 1fr', '240px 1fr'],
        transition: 'grid-template-columns 0.3s ease',
    }),
);
const Aside = styled.div(
    mq({ width: [240, 50, 50, 240], display: ['none', 'block'] }),
);
const MainContent = styled.main({
    flex: 1,
});
const MainBody = styled.div({
    padding: 10,
});
const AsideNavbarMain = styled.div(
    mq({
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        borderRight: '1px solid rgba(0, 0, 0, 0.08)',
        paddingInline: [10, 20],
    }),
);
export default function ManageLayout({ children }: { children: ReactNode }) {
    return (
        <BaseLayout>
            <LayoutWrapper>
                <LayoutWrapperContent>
                    <Aside>
                        <BaseNavbar>
                            <AsideNavbarMain>
                                <Logo />
                            </AsideNavbarMain>
                        </BaseNavbar>
                        <SidebarContent>
                            <SidebarMenuCreator />
                        </SidebarContent>
                    </Aside>
                    <MainContent>
                        <BaseNavbarWrapper>
                            <BaseNavbarWrapperMain>
                                <div css={mq({ paddingInline: [10, 20] })}>
                                    Home Menu IS
                                </div>
                                <div
                                    css={mq({
                                        marginLeft: 'auto',
                                        paddingInline: [10, 20],
                                    })}
                                >
                                    <Avatar
                                        size="30px"
                                        round
                                        alt="Dadan dev"
                                        name="Whilson Efendi"
                                    />
                                </div>
                            </BaseNavbarWrapperMain>
                        </BaseNavbarWrapper>
                        <MainBody>{children}</MainBody>
                    </MainContent>
                </LayoutWrapperContent>
            </LayoutWrapper>
        </BaseLayout>
    );
}
