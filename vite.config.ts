import inertia from '@inertiajs/vite';
import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import os from 'os'; // Import module OS bawaan Node.js
import path from 'path';

// Fungsi untuk mencari IP Address lokal (WiFi/LAN)
const networkInterfaces = os.networkInterfaces();
const localIp = Object.values(networkInterfaces)
    .flat()
    .find((i) => i?.family === 'IPv4' && !i?.internal)?.address;
export default defineConfig({
    server: {
        host: localIp ?? '0.0.0.0',
        port: 5173,
        strictPort:true,
        cors : {
            origin : "*"
        },
        hmr: {
            host: localIp ?? 'localhost',
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "resources/ts")
        }
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/ts/app.tsx'],
            refresh: true,
        }),
        inertia(),
        react({
            jsxImportSource: "@emotion/react",
            babel: {
                plugins: ['babel-plugin-react-compiler', ["@emotion/babel-plugin", {
                    autoLabel: 'always',
                    labelFormat: '[local]',
                }]],

            },
        }),
        tailwindcss(),
        wayfinder({
            formVariants: true,
        }),
    ],
});
