import { defineConfig } from 'wxt';
import tailwindcss from '@tailwindcss/vite';

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',

  modules: ['@wxt-dev/module-react'],

  manifest: {
    description: '__MSG_extension_description__',
    host_permissions: [],
    name: '__MSG_extension_name__',
    permissions: [],
  },
  
  // @ts-expect-error
  vite: () => ({
    plugins: [
      tailwindcss()
    ]
  })
});
