module.exports = {
  root: true,
  extends: ["plugin:vue/recommended","plugin:vue/base"],
  env: {
    browser: true, // 开发环境配置表示可以使用浏览器的方法
    node: true, //
    es6: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    // 自定义的规则 warn error
    // indent: ["error", 2], // 强制使用一致的缩进
    // "no-console": ["error", { allow: ["log", "warn"] }], // 允许使用console.log()
    // "no-dupe-args": 2, // 禁止 function 定义中出现重名参数
    // "no-dupe-keys": 2, // 禁止对象字面量中出现重复的 key
    // "no-duplicate-case": 2, // 禁止出现重复的 case 标签
    // "no-empty": ["error", { allowEmptyCatch: true }], // 禁止出现空语句块
    // "no-func-assign": 2, // 禁止对 function 声明重新赋值
    // "no-inner-declarations": 2, // 禁止在嵌套的块中出现变量声明或 function 声明
    // "no-unreachable": 2, // 禁止在return、throw、continue 和 break 语句之后出现不可达代码
    // "default-case": 2, // 要求 switch 语句中有 default 分支
    // "no-empty-function": 2, // 禁止出现空函数
    // "no-empty-pattern": 2, // 禁止使用空解构模式
    // "no-fallthrough": 2, // 禁止 case 语句落空
    // "no-global-assign": 2, // 禁止对原生对象或只读的全局对象进行赋值
    // "no-loop-func": 2, // 禁止在循环中出现 function 声明和表达式
    // "no-return-assign": 2, // 禁止在 return 语句中使用赋值语句
    // "no-undef": 2, // 禁用未声明的变量
    // "no-unused-vars": 2, // 禁止出现未使用过的变量
    // "no-use-before-define": 2, // 禁止在变量定义之前使用它们
    // "array-bracket-spacing": ["error", "always"], // 强制数组方括号中使用一致的空格
    // "brace-style": 2, // 强制在代码块中使用一致的大括号风格
    // "comma-dangle": 2, // 强制使用一致的逗号风格
    // "object-curly-spacing": ["error", "always"], // 强制大括号内换行符的一致性
    // /*
    //  *********** ECMAScript 6 ***********
    //  */
    // "arrow-spacing": 2, // 强制箭头函数的箭头前后使用一致的空格
    // "no-duplicate-imports": 2, // 禁止重复模块导入
    // "no-useless-rename": 2, // 禁止重复模块导入
    // "no-var": 2, // 要求使用 let 或 const 而不是 var
    // "no-delete-var": 2, // 不能对var声明的变量使用delete操作符
    // "no-extra-boolean-cast": 0 // 禁止不必要的bool转换
  },
  // 全局变量配置
  globals: {
    window: true,
    document: true,
    module: true,
    require: true,
    localStorage: true
  }
};
