import { defineConfig } from "eslint/config";
import next from "eslint-config-next";
import nextTypescript from "eslint-config-next/typescript";
import coreWebVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...next,
  ...nextTypescript,
  ...coreWebVitals,
]);
