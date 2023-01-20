"use strict";
exports.__esModule = true;
var simple_git_1 = require("simple-git");
(0, simple_git_1.simpleGit)()
    .exec(function () { return console.log('Starting pull...'); })
    .pull(function (err, update) {
    if (update && update.summary.changes) {
        require('child_process').exec('npm restart');
    }
})
    .exec(function () { return console.log('pull done.'); });
// when using async and optional chaining
