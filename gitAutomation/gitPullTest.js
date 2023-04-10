"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pullFunc = void 0;
const child_process_1 = require("child_process");
const pullFunc = async (file) => {
    //console.log("currrent folder is: " + file);
    await (0, child_process_1.exec)(`cd ${file} && git pull`, (err, stdout, stderr) => {
        if (err) {
            console.log(err + stderr);
            return err;
        }
        console.log(`file is : ${file} \nstatus is: ${stdout}`);
    });
};
exports.pullFunc = pullFunc;
