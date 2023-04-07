// import { PullResult, SimpleGit, simpleGit } from "simple-git";
import { exec } from "child_process";

// let file = "C:\\Users\\201054\\Desktop\\repos\\" + "authentication";

// simpleGit("C:\\Users\\201054\\Desktop\\repos\\" + file)
//    .exec(() => console.log('Starting pull...'))
//    .pull((err, update) => {
//       if (update && update.summary.changes) {
//          require('child_process').exec('npm restart');
//       }
//    })
//    .exec(() => console.log('pull doneeeeee.'));

// exec(`cd ${file} && git pull`, (err,stdout,stderr) => {
//    if(err) console.log(err + stderr);
//    console.log("cd file: " +stdout);
// })
// exec('pwd', (err,stdout,stderr) => {
//    if(err) console.log(err);
//    console.log("pwd: " +stdout);
// })
export const pullFunc = async (file: String) => {

   //console.log("currrent folder is: " + file);

   await exec(`cd ${file} && git pull`, (err,stdout,stderr) => {

      if(err) {

         console.log(err + stderr);
         return err;

      }
      console.log(`file is : ${file} \nstatus is: ${stdout}`);
      
   })
   
}
// when using async and optional chaining