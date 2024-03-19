import { defineConfig } from "rollup";
import babel from "@rollup/plugin-babel";

export default defineConfig({
  input: "src/index.js",
  output: {
    dir: "dist",
    format: "es",
    name: "easeauth",
  },
  external: ["react", "react-dom"],
  plugins: [
    babel({
      babelHelpers: 'bundled',
      presets: ["@babel/preset-react"]
    })
  ],
});
