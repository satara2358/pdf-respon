// import { vitePreprocess } from '@astrojs/svelte';

// export default {
// 	preprocess: vitePreprocess(),
// };
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
};