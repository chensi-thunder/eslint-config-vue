/*
 * @Author: guozp
 * @Date: 2020-01-17 22:42:44
 * @LastEditTime: 2020-03-28 17:22:59
 * @LastEditors: guozp
 * @Description: Do not edit
 * @FilePath: /web-front-end-eslint/index.js
 */
module.exports = {
	globals: {
			MyGlobal: true
	},
	extends: [
		'plugin:vue/essential',
		'@vue/standard'
	],
	rules: {
		'arrow-parens': 0, // 要求箭头函数的参数使用圆括号
		'constructor-super': 0, // 要求在构造函数中有 super() 的调用
		'no-fallthrough': 0, // 禁止 case 语句落空
		'generator-star-spacing': 0, // 强制 generator 函数中 * 号周围使用一致的空格
		'no-eval': [2, { allowIndirect: true }], // 禁止使用 eval 函数
		'no-multi-spaces': [2, { ignoreEOLComments: true }], // // 禁止多个空格， 忽略行位注释前的多个空格
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'eol-last': 0, // 去除文件末尾需要换行
		'multiline-ternary': ["error", "never"], // 要求或禁止在三元操作数中间换行
		'new-cap': 2, // 要求构造函数首字母大写
		'vue/html-closing-bracket-newline': ['error', {
				singleline: 'never',
				multiline: 'never'
		}],
		"vue/html-indent": ["error", 2, {
				attribute: 1,
				baseIndent: 1,
				closeBracket: 1,
				alignAttributesVertically: false,
				ignores: []
		}]
	},
	processors: {
		// assign to the file extension you want (.js, .jsx, .html, etc.)
		".js": {
			// takes text of the file and filename
			preprocess: function(text, filename) {
				// here, you can strip out any non-JS content
				// and split into multiple strings to lint

				return [string];  // return an array of strings to lint
			},
			// takes a Message[][] and filename
			postprocess: function(messages, filename) {
				// `messages` argument contains two-dimensional array of Message objects
				// where each top-level array item contains array of lint messages related
				// to the text that was returned in array from preprocess() method

				// you need to return a one-dimensional array of the messages you want to keep
				return messages[0];
			},
			supportsAutofix: true // (optional, defaults to false)
		}
	}
}