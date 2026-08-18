import globals from 'globals';
import nodePlugin from 'eslint-plugin-n';
import eslintConfigPrettier from 'eslint-config-prettier'; // 1. Import it here
export default [
    {
        ignores: ['lib/**', 'dist/**'],
    },
    // 1. Inject the modern Node/ESM plugin rules automatically
    nodePlugin.configs['flat/recommended'],

    // 2. Your custom project configuration
    {
        files: ['**/*.{js,mjs,cjs}'],
        // NOTE: In Flat Config, 'extends' is no longer used inside the configuration object.
        // js.configs.recommended is already handled by putting 'js' or plugins at the top array level,
        // but since we imported 'js', its rules can be inherited directly.
        rules: {
            // Your existing stylistic and quality rules
            indent: ['error', 4],
            'linebreak-style': ['error', 'unix'],
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            'no-console': 'off',
            'no-await-in-loop': 'warn',
            'require-await': 'error',
            'no-async-promise-executor': 'error',

            // New ESM Strictness Rule: Catches missing .js extensions!
            'n/no-missing-import': 'error',

            // New CommonJS Bans: Catch 'require', 'module.exports', etc.
            'no-restricted-globals': [
                'error',
                { name: 'require', message: "Use ESM 'import' instead." },
                { name: 'module', message: "Use ESM 'export' instead." },
                { name: 'exports', message: "Use ESM 'export' instead." },
                { name: '__dirname', message: 'Use import.meta.url and path instead.' },
                { name: '__filename', message: 'Use import.meta.url and path instead.' },
            ],

            // Catch AST edge cases like: const x = require('x')
            'no-restricted-syntax': [
                'error',
                {
                    selector: "CallExpression[callee.name='require']",
                    message: "CommonJS 'require' is forbidden. Use ESM 'import' instead.",
                },
            ],
        },
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module', // Tells ESLint the codebase uses standard ES Modules
            globals: {
                ...globals.node,
            },
        },
    },
    eslintConfigPrettier,
];
