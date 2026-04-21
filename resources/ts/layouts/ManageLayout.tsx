/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';
import BaseLayout from './BaseLayout';

export default function ManageLayout({ children }: { children: ReactNode }) {
    return (
        <BaseLayout>
            Manage
            {children}
        </BaseLayout>
    );
}
