// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({

    integrations: [
        starlight({
            title: 'VØID* Codex',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
            defaultLocale: 'en',
            locales: {
                'en': {
                    label: 'English',
                },
                'th': {
                    label: 'ภาษาไทย',
                    lang: 'th',
                },
            },
            sidebar: [
                {
                    label: 'Python 🐍',
                    autogenerate: { directory: 'Python' },
                },
                {
                    label: 'Reference',
                    autogenerate: { directory: 'reference' },
                },
            ],
        }),
    ],

    vite: {
        plugins: [tailwindcss()],
    },
    
});