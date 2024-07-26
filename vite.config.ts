import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import { vite as vidstack } from 'vidstack/plugins';

export default defineConfig({
  plugins: [solid(),vidstack()],
})
