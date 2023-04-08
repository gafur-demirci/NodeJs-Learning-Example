import { exec } from "child_process";

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