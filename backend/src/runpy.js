import { pyPath, tmpPath } from "./config.js";
import { spawn } from "child_process";
import { join } from "path";

export default function(filename) {
	return new Promise((resolve, reject) => {
		let dataToSend;
	
		const py = spawn('python', [join(pyPath, "ml.py"), filename]);

		py.stdout.on('data', (data) => {
			dataToSend = data.toString();
		});
		
		py.on('close', (code) => {
			console.log("Exit code: " + code);
			resolve(dataToSend);
		});

	});
}