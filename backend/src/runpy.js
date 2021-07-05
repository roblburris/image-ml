import { pyPath, tmpPath, classes } from "./config.js";
import { spawn } from "child_process";
import { join } from "path";

export default function(filename) {
	return new Promise((resolve, reject) => {
		let dataToSend = "";
	
		const py = spawn('python', [join(pyPath, "ml.py"), filename, classes]);
		console.log(py);

		py.stdout.on('data', (data) => {
			dataToSend = data.toString();
		});

		py.stderr.on("data", (data) => {
			console.log(data.toString())
		});
		
		py.on('close', (code) => {
			console.log("Exit code: " + code);
			if(code != 0) return resolve(code);
			resolve(dataToSend);
		});

	});
}
