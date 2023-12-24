# Init  

1. show how to create react app call 'hello-world'. 
```bash
$ npx create-react-app hello-world 
$ cd hello-world
$ npm start
```
2. show how to react connect with dom. 
src/index.js > public/index.html


3. create react app with vite.

```bash
$ npm create vite@lates
```

4. add alias to react vite project  

```bash
$ npm install --save-dev path
$ npm install --save-dev @types/node
```

vite.config.ts  
```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {

    alias: {
      // '@app': resolve(__dirname, 'src/app'),
      // '@features': resolve(__dirname, 'src/features'),
      // '@common': resolve(__dirname, 'src/common'),
      // '@layout': resolve(__dirname, 'src/layout'),
      // '@views': resolve(__dirname, 'src/views'),
      // '@routes': resolve(__dirname, 'src/routes'),
      '@components': resolve(__dirname, 'src/components'),
      // '@sections': resolve(__dirname,'src/sections')
    }

}
})
```

tsconfig.json
```ts
{
  "compilerOptions": {
    /* ... */
    "noFallthroughCasesInSwitch": true,

    /* add start from here  */
    "baseUrl": ".", // This must be specified if "paths" is set
    "paths": { 
      "@app/*": ["src/app/*"],
      "@features/*": ["src/features/*"],
      "@common/*": ["src/common/*"],
      "@layout/*": ["src/layout/*"],
      "@views/*": ["src/views/*"],
      "@routes/*": ["src/routes/*"],
      "@components/*": ["src/components/*"],
      "@sections/*": ["src/sections/*"]
    }
    /* add end from here  */
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```