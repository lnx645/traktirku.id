/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';
import BaseLayout from './BaseLayout';
import { css } from '@emotion/react';
import { BaseNavbar } from '@/components/BaseNavbar';
import { BaseContent } from '@/components/BaseContent';
import Input from '@/components/Input';
import Button from '@/components/Button';

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <BaseLayout>
            <BaseNavbar>
               Trakteer
            </BaseNavbar>
            <BaseContent>{children}</BaseContent>
        </BaseLayout>
    );
}
