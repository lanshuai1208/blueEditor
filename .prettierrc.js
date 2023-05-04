module.exports = {
  printWidth: 80, // 自动换行的行长
  useTabs: false,
  tabWidth: 2, // 指定每个缩进级别的空格数，默认值为2个空格。
  semi: false, // 使用分号，默认为true
  singleQuote: true, // 使用单引号代替双引号
  proseWrap: 'never',
  arrowParens: 'avoid', //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  htmlWhitespaceSensitivity: 'ignore',
  trailingComma: 'none' // 在对象或数组最后一个元素后面是否加逗号
}
