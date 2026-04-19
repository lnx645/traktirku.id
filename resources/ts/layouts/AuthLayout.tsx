/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';
import BaseLayout from './BaseLayout';
import { css } from '@emotion/react';
import { BaseNavbar } from '@/components/BaseNavbar';
import { BaseContent } from '@/components/BaseContent';

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <BaseLayout>
            <BaseNavbar>Opps</BaseNavbar>
            <BaseContent>{children}</BaseContent>
        </BaseLayout>
    );
}
