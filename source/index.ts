import { $ } from "execa";

const args = ["unicorns", "&", "rainbows!"];
const { stdout } = await $`echo ${args}`;
// @ts-ignore
console.log(stdout);
