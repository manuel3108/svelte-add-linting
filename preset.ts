import { Preset } from 'apply';

Preset.setName('svelte-add/linting');

// add dependencies to package.json
Preset.editJson('package.json')
    .merge({
        devDependencies: {
            eslint: '^7.20.0',
            'eslint-config-airbnb-base': '^14.2.1',
            'eslint-config-prettier': '^8.1.0',
            'eslint-import-resolver-alias': '1.1.2',
            'eslint-plugin-import': '^2.22.1',
            'eslint-plugin-svelte3': '^3.1.1',
            prettier: '^2.2.1',
            'prettier-plugin-svelte': '^2.1.6',
        },
        scripts: {
            eslint: 'eslint .',
            format: 'prettier --write .',
            'format:check': 'prettier --check .',
            lint: 'npm run format:check && npm run eslint',
        },
    })
    .withTitle('Adding needed dependencies and scripts');

// extract all necessary files
Preset.extract().withDots().withTitle('Adding new files');

// update dependencies
Preset.installDependencies().ifUserApproves();
