import { PullResult, SimpleGit, simpleGit } from "simple-git";

simpleGit()
   .exec(() => console.log('Starting pull...'))
   .pull((err, update) => {
      if (update && update.summary.changes) {
         require('child_process').exec('npm restart');
      }
   })
   .exec(() => console.log('pull done.'));

// when using async and optional chaining