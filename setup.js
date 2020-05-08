const exec = require('child_process').exec;
const file_d = __dirname + '/mac' + '/window';


exec("chmod +x " + file_d, (error, stdout, stderr) => {
    if (error) return process.exit(2);
    process.exit(0);
});