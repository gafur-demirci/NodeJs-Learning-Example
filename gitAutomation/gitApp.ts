import { SimpleGit, CleanOptions, simpleGit } from "simple-git";

const git : SimpleGit = simpleGit().clean(CleanOptions.FORCE);

console.log("hello");