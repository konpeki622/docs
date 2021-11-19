(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{412:function(t,s,a){"use strict";a.r(s);var e=a(54),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vite-plugin-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vite-plugin-content"}},[t._v("#")]),t._v(" vite-plugin-content")]),t._v(" "),a("p",[t._v("将 "),a("code",[t._v("yaml")]),t._v("、"),a("code",[t._v("xml")]),t._v("、"),a("code",[t._v("xlsx")]),t._v("、"),a("code",[t._v("ini")]),t._v("、"),a("code",[t._v("toml")]),t._v("、"),a("code",[t._v("csv")]),t._v("、"),a("code",[t._v("plist")]),t._v(" 和 "),a("code",[t._v("properties")]),t._v(" 文件转换成 "),a("code",[t._v("ES6 modules")]),t._v(" 的 Vite 插件。")]),t._v(" "),a("ul",[a("li",[t._v("使用 "),a("code",[t._v("UTF-8")]),t._v(" 编码读取文件")]),t._v(" "),a("li",[t._v("借助 "),a("code",[t._v("js-yaml")]),t._v(" 转换 "),a("code",[t._v("yaml")]),t._v(" 文件")]),t._v(" "),a("li",[t._v("借助 "),a("code",[t._v("xml2js")]),t._v(" 转换 "),a("code",[t._v("xml")]),t._v(" 文件")]),t._v(" "),a("li",[t._v("借助 "),a("code",[t._v("ini")]),t._v(" 转换 "),a("code",[t._v("ini")]),t._v(" 文件")]),t._v(" "),a("li",[t._v("借助 "),a("code",[t._v("@iarna/toml")]),t._v(" 转换 "),a("code",[t._v("toml")]),t._v(" 文件")]),t._v(" "),a("li",[t._v("借助 "),a("code",[t._v("csv-parse")]),t._v(" 转换 "),a("code",[t._v("csv")]),t._v(" 文件")]),t._v(" "),a("li",[t._v("借助 "),a("code",[t._v("jsplistaml")]),t._v(" 转换 "),a("code",[t._v("plist")]),t._v(" 文件")]),t._v(" "),a("li",[t._v("借助 "),a("code",[t._v("plist")]),t._v(" 转换 "),a("code",[t._v("properties")]),t._v(" 文件")]),t._v(" "),a("li",[t._v("借助 "),a("code",[t._v("sheetjs")]),t._v(" 转换 "),a("code",[t._v("xlsx")]),t._v(" 文件")])]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("h3",{attrs:{id:"使用-npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-npm"}},[t._v("#")]),t._v(" 使用 npm")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @originjs/vite-plugin-content --save-dev\n")])])]),a("h3",{attrs:{id:"使用-yarn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-yarn"}},[t._v("#")]),t._v(" 使用 yarn")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @originjs/vite-plugin-content --dev\n")])])]),a("h2",{attrs:{id:"在项目中使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在项目中使用"}},[t._v("#")]),t._v(" 在项目中使用")]),t._v(" "),a("p",[t._v("首先，在 "),a("code",[t._v("vite.config.js")]),t._v(" 文件中引入 "),a("code",[t._v("@originjs/vite-plugin-content")]),t._v(" 。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vite.config.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" content "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@originjs/vite-plugin-content'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* options */")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("然后引入 "),a("code",[t._v("yaml")]),t._v("、"),a("code",[t._v("xml")]),t._v("、"),a("code",[t._v("xlsx")]),t._v("、"),a("code",[t._v("ini")]),t._v("、"),a("code",[t._v("toml")]),t._v("、"),a("code",[t._v("csv")]),t._v("、"),a("code",[t._v("plist")]),t._v(" 和 "),a("code",[t._v("properties")]),t._v(" 文件作为 "),a("code",[t._v("ES6 modules")]),t._v(" 使用。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" yaml "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'assets/test.yaml'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" xml "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'assets/test.xml'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" xlsx "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'assets/test.xlsx'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ini "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'assets/test.ini'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" toml "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'assets/test.toml'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" csv "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'assets/test.csv'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" plist "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'assets/test.plist'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" properties "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'assets/test.properties'")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("yaml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xlsx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ini"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("toml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("csv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("plist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("properties"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[t._v("#")]),t._v(" 配置项")]),t._v(" "),a("h3",{attrs:{id:"yaml-xml-xlsx-ini-toml-csv-plist-properties-enabled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yaml-xml-xlsx-ini-toml-csv-plist-properties-enabled"}},[t._v("#")]),t._v(" [yaml/xml/xlsx/ini/toml/csv/plist/properties].enabled")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("默认值："),a("code",[t._v("true")])])]),t._v(" "),a("p",[t._v("允许对 "),a("code",[t._v("yaml/xml/xlsx/ini/toml/csv/plist/properties")]),t._v(" 进行转换。")]),t._v(" "),a("h3",{attrs:{id:"yaml-xml-xlsx-ini-toml-csv-plist-properties-include"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yaml-xml-xlsx-ini-toml-csv-plist-properties-include"}},[t._v("#")]),t._v(" [yaml/xml/xlsx/ini/toml/csv/plist/properties].include")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("string")]),t._v(" | "),a("code",[t._v("Array[...string]")])]),t._v(" "),a("li",[t._v("默认值："),a("code",[t._v("null")])])]),t._v(" "),a("p",[t._v("以"),a("a",{attrs:{href:"https://github.com/isaacs/minimatch",target:"_blank",rel:"noopener noreferrer"}},[t._v("最小匹配形式"),a("OutboundLink")],1),t._v("或数组形式，指定在构建过程中需要被该插件操作的文件。默认所有文件都是目标文件。")]),t._v(" "),a("h3",{attrs:{id:"yaml-xml-xlsx-ini-toml-csv-plist-properties-exclude"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yaml-xml-xlsx-ini-toml-csv-plist-properties-exclude"}},[t._v("#")]),t._v(" [yaml/xml/xlsx/ini/toml/csv/plist/properties].exclude")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("string")]),t._v(" | "),a("code",[t._v("Array[...string]")])]),t._v(" "),a("li",[t._v("默认值："),a("code",[t._v("null")])])]),t._v(" "),a("p",[t._v("以"),a("a",{attrs:{href:"https://github.com/isaacs/minimatch",target:"_blank",rel:"noopener noreferrer"}},[t._v("最小匹配形式"),a("OutboundLink")],1),t._v("或数组形式，指定在构建过程中需要被该插件忽略的文件。默认所有文件都不被忽略。")]),t._v(" "),a("h3",{attrs:{id:"yaml-loadmultidocument"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yaml-loadmultidocument"}},[t._v("#")]),t._v(" yaml.loadMultiDocument")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("默认值："),a("code",[t._v("false")])])]),t._v(" "),a("p",[t._v("允许读取 "),a("code",[t._v("yaml")]),t._v(" 作为多文档源，具体内容查阅"),a("a",{attrs:{href:"https://github.com/nodeca/js-yaml",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"xml-xml2jsoptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xml-xml2jsoptions"}},[t._v("#")]),t._v(" xml.xml2jsOptions")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("ParserOptions")])]),t._v(" "),a("li",[t._v("默认值："),a("code",[t._v("null")])])]),t._v(" "),a("p",[a("code",[t._v("xml2js")]),t._v(" 配置项，具体内容查阅"),a("a",{attrs:{href:"https://github.com/Leonidas-from-XIV/node-xml2js",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"csv-csvoptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csv-csvoptions"}},[t._v("#")]),t._v(" csv.csvOptions")]),t._v(" "),a("p",[a("code",[t._v("csv-parse")]),t._v(" 配置项，具体内容查阅"),a("a",{attrs:{href:"https://csv.js.org/parse/options/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"xlsx-xlsxoptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xlsx-xlsxoptions"}},[t._v("#")]),t._v(" xlsx.xlsxOptions")]),t._v(" "),a("p",[a("code",[t._v("sheetjs")]),t._v(" 配置项，具体内容查阅"),a("a",{attrs:{href:"https://github.com/SheetJS/sheetjs#parsing-options",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);s.default=n.exports}}]);