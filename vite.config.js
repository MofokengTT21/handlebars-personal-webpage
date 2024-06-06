import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from 'vite';
import data from './data.json';

export default {
  base : '/responsive_webpages/',   // <-- add this
  plugins: [
    handlebars({
      context: data, 
    }),
  ],
};