/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';
import BaseLayout from './BaseLayout';
import { css } from '@emotion/react';
import { BaseNavbar } from '@/components/BaseNavbar';
import Logo from '@/components/Logo';
import mq from '@/lib/breakpoints';
const wrapper = css({
    maxWidth: '100%',
});
const WrapperContent = css({
    display: 'flex',
});
const sidebar = css({
    width: 250,
});
const sidbearConent = css({
    padding: '32px 19px 48px 20px',
    minHeight: 'calc(100vh - var(--h-navbar))',
    maxHeight: 'calc(100vh - var(--h-navbar))',
    background: '#fff',
    borderRight: '1px solid rgba(0, 0, 0, 0.08)',
});
export default function ManageLayout({ children }: { children: ReactNode }) {
    return (
        <BaseLayout>
            <div css={wrapper}>
                <div css={WrapperContent}>
                    <aside css={sidebar}>
                        <BaseNavbar>
                            <div
                                css={mq({
                                    height: '100%',
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    borderRight: '1px solid rgba(0, 0, 0, 0.08)',
                                    paddingInline: [10, 20],
                                })}
                            >
                                <Logo />
                            </div>
                        </BaseNavbar>
                        <div css={sidbearConent}></div>
                    </aside>
                    <main css={css({ flex: 1 })}>
                        <BaseNavbar>
                            <div css={mq({ paddingInline: [10, 20] })}>
                                welcome back, admin
                            </div>
                            <div css={mq({ marginLeft: 'auto', paddingInline: [10, 20] })}>
                                Logout
                            </div>
                        </BaseNavbar>
                        <div css={css({ padding: 10 })}>{children}</div>
                    </main>
                </div>
            </div>
        </BaseLayout>
    );
}
