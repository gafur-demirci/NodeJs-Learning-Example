import * as fs from "fs";
import { npmIFunc } from "./npmInstallTest";

const files = async () => {

    fs.readdir("C:\\Users\\201054\\Desktop\\repos", (err, files) => {

        if (err === null) {

            // files -> klasör

            files.forEach(file => {

                // file -> klasör içindeki dosya

                fs.readdir("C:\\Users\\201054\\Desktop\\repos\\" + file, async (err, subFiles) => {

                    let inPackage = subFiles.includes("package.json");

                    if (inPackage) {

                        let filePath = "C:\\Users\\201054\\Desktop\\repos\\" + file;
                        //console.log(filePath);

                        npmIFunc(filePath);


                    } 
 /*                    
                    else {

                        fs.readdir(`C:\\Users\\201054\\Desktop\\repos\\${file}\\`, (err, files) => {

                            if (err === null) {

                                // files -> klasör

                                // console.log("else ilk konum: " + `C:\\Users\\201054\\Desktop\\repos\\${file}\\`);

                                files.forEach(fileIn => {

                                    // console.log(file);
                                    // console.log('fileIn: ' + fileIn);

                                    // file -> klasör içindeki dosya

                                    fs.readdir(`C:\\Users\\201054\\Desktop\\repos\\${file}\\` + fileIn, async (err, subFiles) => {

                                        // console.log("ikinci read: " + `C:\\Users\\201054\\Desktop\\repos\\${file}\\` + fileIn);
                                        let inPackage = subFiles?.includes("package.json");

                                        let baseURI, branch;
                                        // console.log(inGit);

                                        if (inPackage) {

                                            let filePath = `C:\\Users\\201054\\Desktop\\repos\\${file}\\` + fileIn;
                                            //console.log("file path: " + filePath);

                                            npmIFunc(filePath);

                                        } else {

                                            //console.log('ikinci else git yok');

                                        }
                                        //console.log("---------------------------");

                                    })
                                })

                            }
                            else console.error(err);

                        });
                        //console.log("git dosyası yok");


                    } */
                    //console.log("---------------------------");

                })
            })

        }
        else console.error(err);

    });
};

files().then(() => console.log("async worked"));