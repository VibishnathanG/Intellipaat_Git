<<<<<<< HEAD
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
]);
=======
// Disabled flat config — using .eslintrc.json instead
export default {};
>>>>>>> SIT
