// "env"：一个环境定义了一组预定义的全局变量
// "extends": 配置文件可以从基本配置扩展启用的规则集。有四种类型（后面覆盖前面，eslint-config可省略）
// "parserOptions"：ESLint 允许你指定你想要支持的 JavaScript 语言选项。默认情况下，ESLint 支持 ECMAScript 5 语法。你可以覆盖该设置，以启用对 ECMAScript 其它版本和 JSX 的支持。
// "parser"：ESLint 默认使用Espree作为其解析器，你可以在配置文件中指定一个不同的解析器(请使用parserOptions.parser，因为某些如vue插件有自己的解释器，重写此项会导致解释器被覆盖)
// "plugins"：ESLint 支持使用第三方插件（eslint-plugin可省略）
// "globals"：如果你想在一个源文件里使用全局变量，推荐你在 ESLint 中定义这些全局变量，这样 ESLint 就不会发出警告了。
// "rules"：ESLint 附带有大量的规则。你可以使用注释或配置文件修改你项目中要使用的规则（最高优先级，不要轻易更改）

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "airbnb-base",
    "plugin:prettier/recommended", // Prettier的修复通过ESlint来体现
    // 等价于：
    // {
    //     "extends": ["prettier"],
    //     "plugins": ["prettier"],
    //     "rules": {
    //       "prettier/prettier": "error",
    //       "arrow-body-style": "off",
    //       "prefer-arrow-callback": "off"
    //     }
    //  }
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
      jsx: true,
    },
    requireConfigFile: false,
    parser: "@babel/eslint-parser",
  },
  plugins: [
    "vue",
    // 'eslint-plugin-prettier', // 已由plugin:prettier/recommended引入
    "eslint-plugin-import",
  ],
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
  settings: {
    "import/resolver": {
      alias: [["@", "./src"]], // 解决eslint无法识别vite配置的别名的问题
    },
  },
  // 这里是配置规则的,自己看情况配置
  rules: {
    // 'semi': ['warn', 'never'],           // 禁止尾部使用分号
    // 'no-console': 'warn',                // 禁止出现console
    // 'no-debugger': 'warn',               // 禁止出现debugger
    // 'no-duplicate-case': 'warn',         // 禁止出现重复case
    // 'no-empty': 'warn',                  // 禁止出现空语句块
    // 'no-extra-parens': 'warn',           // 禁止不必要的括号
    // 'no-func-assign': 'warn',            // 禁止对Function声明重新赋值
    // 'no-unreachable': 'warn',            // 禁止出现[return|throw]之后的代码块
    // 'no-else-return': 'warn',            // 禁止if语句中return语句之后有else块
    // 'no-empty-function': 'warn',         // 禁止出现空的函数块
    // 'no-lone-blocks': 'warn',            // 禁用不必要的嵌套块
    // 'no-multi-spaces': 'warn',           // 禁止使用多个空格
    // 'no-redeclare': 'warn',              // 禁止多次声明同一变量
    // 'no-return-assign': 'warn',          // 禁止在return语句中使用赋值语句
    // 'no-return-await': 'warn',           // 禁用不必要的[return/await]
    // 'no-self-compare': 'warn',           // 禁止自身比较表达式
    // 'no-useless-catch': 'warn',          // 禁止不必要的catch子句
    // 'no-useless-return': 'warn',         // 禁止不必要的return语句
    // 'no-mixed-spaces-and-tabs': 'warn',  // 禁止空格和tab的混合缩进
    // 'no-multiple-empty-lines': 'warn',   // 禁止出现多行空行
    // 'no-trailing-spaces': 'warn',        // 禁止一行结束后面不要有空格
    // 'no-useless-call': 'warn',           // 禁止不必要的.call()和.apply()
    // 'no-var': 'warn',                    // 禁止出现var用let和const代替
    // 'no-delete-var': 'off',              // 允许出现delete变量的使用
    // 'no-shadow': 'off',                  // 允许变量声明与外层作用域的变量同名
    // 'dot-notation': 'warn',              // 要求尽可能地使用点号
    // 'default-case': 'warn',              // 要求switch语句中有default分支
    // 'eqeqeq': 'warn',                    // 要求使用 === 和 !==
    // 'curly': 'warn',                     // 要求所有控制语句使用一致的括号风格
    // 'space-before-blocks': 'warn',       // 要求在块之前使用一致的空格
    // 'space-in-parens': 'warn',           // 要求在圆括号内使用一致的空格
    // 'space-infix-ops': 'warn',           // 要求操作符周围有空格
    // 'space-unary-ops': 'warn',           // 要求在一元操作符前后使用一致的空格
    // 'switch-colon-spacing': 'warn',      // 要求在switch的冒号左右有空格
    // 'arrow-spacing': 'warn',             // 要求箭头函数的箭头前后使用一致的空格
    // 'array-bracket-spacing': 'warn',     // 要求数组方括号中使用一致的空格
    // 'brace-style': 'warn',               // 要求在代码块中使用一致的大括号风格
    // 'camelcase': 'warn',                 // 要求使用骆驼拼写法命名约定
    // 'indent': ['warn', 4],               // 要求使用JS一致缩进4个空格
    // 'max-depth': ['warn', 4],            // 要求可嵌套的块的最大深度4
    // 'max-statements': ['warn', 100],     // 要求函数块最多允许的的语句数量20
    // 'max-nested-callbacks': ['warn', 3], // 要求回调函数最大嵌套深度3
    // 'max-statements-per-line': ['warn', {max: 1}],   // 要求每一行中所允许的最大语句数量
    // "quotes": ["warn", "single", "avoid-escape"],      // 要求统一使用单引号符号
    // "vue/require-default-prop": 0,                     // 关闭属性参数必须默认值
    // "vue/singleline-html-element-content-newline": 0,  // 关闭单行元素必须换行符
    // "vue/multiline-html-element-content-newline": 0,   // 关闭多行元素必须换行符
    // // 要求每一行标签的最大属性不超五个
    // 'vue/max-attributes-per-line': ['warn', {singleline: 5}],
    // // 要求html标签的缩进为需要4个空格
    // "vue/html-indent": ["warn", 4, {
    //     "attribute": 1,
    //     "baseIndent": 1,
    //     "closeBracket": 0,
    //     "alignAttributesVertically": true,
    //     "ignores": []
    // }],
    // // 取消关闭标签不能自闭合的限制设置
    // "vue/html-self-closing": ["error", {
    //     "html": {
    //         "void": "always",
    //         "normal": "never",
    //         "component": "always"
    //     },
    //     "svg": "always",
    //     "math": "always"
    // }]
  },
};
