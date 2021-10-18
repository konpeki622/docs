# vite-plugin-assets

`CSS`, `SASS`, `LESS` files named starting with `global-` are automatically added to the vite global style

## 安装

```shell
npm install @originjs/vite-plugin-assets --save-dev
```

or

```shell
yarn add @originjs/vite-plugin-assets --dev
```

## 使用

add `@originjs/vite-plugin-assets` in `vite.config.js`.

```js
import assets from '@originjs/vite-plugin-assets'

export default {
    plugins: [
        assets(
            /* options */
        )
    ]
}
```

### 选项

- `sourcePath`

  - Type: `string`
  - Default: `/src/assets`

  The relative path of the assets directory to the project.

- `cssEnabled`

  - Type: `boolean`
  - Default: `true`

  Whether to automatically load the CSS global style.

- `sassEnabled`

  - Type: `boolean`
  - Default: `true`

  Whether to automatically load the SASS global style.

- `lessEnabled`

  - Type: `boolean`
  - Default: `true`

  Whether to automatically load the LESS global style.

  `recursive`

  - Type: `boolean`
  - Default: `true`

  Whether to recursively search the global styles in the directory
