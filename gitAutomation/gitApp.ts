import * as fs from "fs";
import { pullFunc } from "./gitPullTest";
import { npmIFunc } from "./npmInstallTest";
// import * as path from "path";
// import { PullResult, SimpleGit, simpleGit } from "simple-git";
// import * as shell from "shelljs";
//cimport * as fs-extra from "fs-extra";

//const git : SimpleGit = simpleGit().clean(CleanOptions.FORCE);
// const git: SimpleGit = simpleGit();

// const userName: String = "*********";
// const password: String = "********";

const files = async () => {

    fs.readdir("C:\\Users\\201054\\Desktop\\repos", (err, files) => {

        if (err === null) {

            // files -> klasör

            files.forEach(file => {

                // file -> klasör içindeki dosya

                fs.readdir("C:\\Users\\201054\\Desktop\\repos\\" + file, async (err, subFiles) => {

                    // console.log(file);
                    let inGit = subFiles.includes(".git");
                    let inPackage = subFiles.includes("package.json");
                    // console.log(inGit);

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

                    if (inPackage) {

                        let filePath = "C:\\Users\\201054\\Desktop\\repos\\" + file;
                        //console.log(filePath);

                        npmIFunc(filePath);


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


                    }
                    //console.log("---------------------------");

                })
            })

        }
        else console.error(err);

    });
};

files().then(() => console.log("async worked"));

// const filePath = fs.existsSync(path.resolve(__dirname, 'folder name'));
// console.log(`file path is ${filePath}`);


// if (!fs.existsSync(path.resolve(__dirname, 'folder name'))) {

//     await git.clone(`https://${userName}:${password}@github.com/yourepo`);
// };

// try {
//     shell.cd('/folder where git repo is');
//     await fse.copySync(path.resolve(__dirname, 'folder where file is present'), path.resolve(__dirname, 'git repo folder'), {
//         overwrite: true
//     }, (error: new () => any) => {
//         if (error)
//             throw new error;
//         else
//             throw new Error("some internal error");
//     });

//     //shell.exec(`git add --all`);
//     //shell.exec(`git commit -m "Updated Repo"`);
//     shell.exec(`git pull`);
//     //shell.exec(`git pull https://${userName}:${password}@github.com/yourepo`);
// }
// catch (error) {
//     console.log("Error while pushing files to git repo, the error is ", error);
// }

// console.log("hello");