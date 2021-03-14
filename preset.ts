import { Preset } from "apply";

Preset.setName("svelte-add/linting");

// add dependencies to package.json
Preset.editJson("package.json")
    .merge({
        devDependencies: {
            "prettier-plugin-svelte": "^2.1.6",
            prettier: "^2.2.1",
            eslint: "^7.20.0",
            "eslint-config-prettier": "^8.1.0",
            "eslint-plugin-svelte3": "^3.1.1",
            "eslint-plugin-import": "^2.22.1",
            "eslint-config-airbnb-base": "^14.2.1",
        },
        scripts: {
            lint: "eslint .",
            format: "prettier --write .",
            "format-check": "prettier --check .",
            check: "npm run lint && npm run format-check",
        },
    })
    .withTitle("Adding needed dependencies and scripts");

// extract all necessary files
Preset.extract().withDots().withTitle("Adding new files");

// update dependencies
Preset.installDependencies().ifUserApproves();
