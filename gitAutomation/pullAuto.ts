import * as fs from "fs";
import { pullFunc } from "./gitPullTest";

const files = async () => {

    fs.readdir("C:\\Users\\201054\\Desktop\\repos", (err, files) => {

        if (err === null) {

            // files -> klasör

            files.forEach(file => {

                // file -> klasör içindeki dosya

                fs.readdir("C:\\Users\\201054\\Desktop\\repos\\" + file, async (err, subFiles) => {

                    let inGit = subFiles.includes(".git");

                    if (inGit) {

                        let filePath = "C:\\Users\\201054\\Desktop\\repos\\" + file;
                        //console.log(filePath);

                        pullFunc(filePath).then(() => {

                            //console.log("pull triggered");
                            //console.log("---------------------------");

                        });

                        // console.log(file);

                        // switch (file) {
                        //     case "authentication":
                        //         baseURI = "git@gitlab.rally.softtech:rally/ngsp/" + file + ".git";
                        //         branch = "master";
                        //         break;
                        //     case "config":
                        //         baseURI = "git@gitlab.rally.softtech:rally/rubix/" + file + ".git";
                        //         branch = "master";
                        //         break;
                        //     case "quick-mobile-android-sdk":
                        //     case "quick-mobile-network-android":
                        //         baseURI = "https://github.com/STechQ/" + file + ".git";
                        //         branch = "dev";
                        //         break;
                        //     default:
                        //         baseURI = "https://github.com/STechQ/" + file + ".git";
                        //         branch = "main";
                        // }
                        // let gitWithFolder : SimpleGit = simpleGit("C:\\Users\\201054\\Desktop\\repos\\" + file);
                        // const pullResponse : PullResult = await gitWithFolder.pull(
                        //     {
                        //         remote: "origin",
                        //         branch: branch,
                        //     },
                        //     (err, data) => {
                        //         if (!err) console.log(data);
                        //         else console.log("there is an error: " + err);
                        //     }

                        // );
                        // console.log("this is pull response: " + pullResponse);

                    } else {

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
                                        let inGit = subFiles?.includes(".git");

                                        let baseURI, branch;
                                        // console.log(inGit);

                                        if (inGit) {

                                            let filePath = `C:\\Users\\201054\\Desktop\\repos\\${file}\\` + fileIn;
                                            //console.log("file path: " + filePath);

                                            pullFunc(filePath).then(() => {

                                                //console.log("pull triggered second");
                                                //console.log("---------------------------");

                                            });

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


                    }
                    //console.log("---------------------------");

                })
            })

        }
        else console.error(err);

    });
};

files().then(() => console.log("async worked"));