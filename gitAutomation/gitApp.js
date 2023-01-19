"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const simple_git_1 = require("simple-git");
const git = (0, simple_git_1.simpleGit)().clean(simple_git_1.CleanOptions.FORCE);
console.log("hello");
