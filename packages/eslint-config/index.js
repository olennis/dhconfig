module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/recommended', // import 관련 규칙 추가
		'plugin:import/typescript', // TypeScript import 규칙 추가
		'prettier', // eslint-config-prettier를 마지막에 추가하여 다른 설정과의 충돌 방지
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'import'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'no-console': 'error',
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				prefer: 'type-imports',
			},
		],
		'import/order': [
			'error',
			{
				groups: [
					['builtin', 'external'], // Node.js 및 설치한 라이브러리
					['internal'], // 커스텀 경로
					['type'], // 타입 import
				],
				pathGroups: [
					{
						pattern: '@/types/**',
						group: 'type',
						position: 'after',
					},
					{
						pattern: '@/**',
						group: 'internal',
					},
				],
				pathGroupsExcludedImportTypes: ['builtin'],
				'newlines-between': 'always', // 그룹 사이 빈 줄 추가
				alphabetize: {
					order: 'asc', // 알파벳 순으로 정렬
					caseInsensitive: true, // 대소문자 구분 안 함
				},
			},
		],
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: '*', next: 'function' },
			{ blankLine: 'always', prev: '*', next: 'return' },
			{ blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
			{ blankLine: 'always', prev: ['case', 'default'], next: '*' },
			{ blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
		],
	},
};
