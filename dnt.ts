import { build, emptyDir } from "https://deno.land/x/dnt@0.37.0/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./src/main.ts"],
  outDir: "./npm",
  shims: {
    deno: true,
  },
  package: {
    name: "@orama/chunker",
    version: Deno.args[0],
    description: "Split large texts into chunks with a maximum number of token. Split by fixed size or by sentence.",
    license: "Apache 2.0",
    type: "module",
    repository: {
      type: "git",
      url: "git+https://github.com/oramasearch/chunker",
    },
    bugs: {
      url: "https://github.com/oramasearch/chunkerissues",
    },
    author: {
      name: "Michele Riva",
      url: "https://github.com/MicheleRiva"
    }
  },
  postBuild() {
    Deno.copyFileSync("LICENSE.md", "npm/LICENSE.md");
    Deno.copyFileSync("README.md", "npm/README.md");
  },
});