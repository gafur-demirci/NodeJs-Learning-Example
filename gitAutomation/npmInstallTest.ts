import { exec } from "child_process";

export const npmIFunc = async (file: String) => {

   //console.log("currrent folder is: " + file);

   await exec(`cd ${file} && npm install`, (err,stdout,stderr) => {

      if(err) {

         console.log(err + stderr);
         return err;

      }
      console.log(`file is : ${file} \ndownloading: ${stdout}`);
      
   })
   
}