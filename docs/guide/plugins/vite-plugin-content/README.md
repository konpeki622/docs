# vite-plugin-content

Convert `yaml`, `xml`, `xlsx`, `ini`, `toml`, `csv`, `plist` and `properties` files to ES6 modules.

## 特性

- The files are read using `UTF-8` encoding.
- `yaml` files transformed by `js-yaml`.
- `xml` files transformed by `xml2js`.
- `ini` files transformed by `ini`.
- `toml` files transformed by `@iarna/toml`.
- `csv` files transformed by `csv-parse`.
- `plist` files transformed by `plist`.
- `properties` files transformed by `plist`.
- 'xlsx' files transformed by `sheetjs`

## 安装

```shell
npm install @originjs/vite-plugin-content --save-dev
```

or

```shell
yarn add @originjs/vite-plugin-content --dev
```

## 使用

First, add `@originjs/vite-plugin-content` in `vite.config.js`.

```js
// vite.config.js
import content from '@originjs/vite-plugin-content'

export default {
    plugins: [
        content(
            /* options */
        )
    ]
}
```

Then you can import `yaml`, `xml`, `xlsx`, `ini`, `toml`, `csv`, `plist` and `properties` as ES module files

```js
import yaml from 'assets/test.yaml'
import xml from 'assets/test.xml'
import ini from 'assets/test.ini'
import toml from 'assets/test.toml'
import csv from 'assets/test.csv'
import plist from 'assets/test.plist'
import properties from 'assets/test.properties'

console.log(yaml)
console.log(xml)
console.log(ini)
console.log(toml)
console.log(csv)
console.log(plist)
console.log(properties)
```

### Options

- `[yaml/xml/ini/toml/csv/plist/properties/markdown].enabled`

  - Type: `boolean`
  - Default: `true`

  Whether or not to enable `yaml/xml/ini/toml/csv/plist/properties/markdown` transformation.

- `[yaml/xml/ini/toml/csv/plist/properties/markdown].include`

  - Type: `String` | `Array[...String]`
  - Default: `null`

  A [minimatch pattern](https://github.com/isaacs/minimatch), or array of patterns, which specifies the files in the build the plugin should operate on. By default all files are targeted.

- `[yaml/xml/ini/toml/csv/plist/properties/markdown].exclude`

  - Type: `String` | `Array[...String]`
  - Default: `null`

  A [minimatch pattern](https://github.com/isaacs/minimatch), or array of patterns, which specifies the files in the build the plugin should *ignore*. By default no files are ignored.

- `yaml.loadMultiDocument`

  - Type: `boolean`
  - Default: `false`

  Whether or not to read yaml as multi-document sources. With `true`, the `loadAll` will be used to parse yaml files. With `false`, the `load` will be used to parse yaml files. See [here](https://github.com/nodeca/js-yaml) for more details.

- `xml.xml2jsOptions`

  - Type: `ParserOptions`
  - Default: `null`

  Options of `xml2js`. See [here](https://github.com/Leonidas-from-XIV/node-xml2js) for more details.

- `csv.csvOptions`
  Options of `csv-parse`. See [here](https://csv.js.org/parse/options/) for more details.

- `xlsx.xlsxOptions`
  Options of `sheetjs`. See [here](https://github.com/SheetJS/sheetjs#parsing-options) for more details.
