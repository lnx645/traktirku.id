import { createInertiaApp } from '@inertiajs/react';
import BaseLayout from './layouts/BaseLayout';
import AuthLayout from './layouts/AuthLayout';
import ManageLayout from './layouts/ManageLayout';

const appName = (import.meta as any).env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    layout(name, page) {
        if (page.url.startsWith("/auth")) {
            return AuthLayout;
        } else if (page.url.startsWith("/manage")) {
            return ManageLayout;
        }
        return BaseLayout;
    },
    title: (title) => (title ? `${title} - ${appName}` : appName),
    progress: {
        color: '#4B5563',
    },
});
