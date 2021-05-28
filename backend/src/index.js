import express from "express";
const app = express();
import { createServer } from "http";
const server = createServer(app);

import fileUpload from "express-fileupload";

import { PORT, tmpPath } from "./config.js";
import runpy from "./runpy.js";

import { writeFile, unlink } from "fs";
import { join } from "path";

app.get("/", (req, res) => {
	res.send(`
		<style>

			* {
				background: black;
				color: ghostwhite;
			}

		</style>
		<form method="POST" action="/" enctype="multipart/form-data">
			<input name="ml-image" type="file" accept="image/*">
			<button type="submit">Submit</button>
		</form>
	`);
});

app.post("/", fileUpload({
	limits: {
		fieldNameSize: 0,
		fieldSize: 0,
		fields: 0,
		fileSize: 1950 * 1100 * 3,
		files: 1,
		parts: 1,
	},
	useTempFiles : true,
	tempFileDir : tmpPath,
	uriDecodeFileNames: true,
	abortOnLimit: true,
	preserveExtension: true,
	debug: true
}), (req, res) => {
	console.log("in post");
	console.log(req.files);
	if(!req.files["ml-image"]) {
		console.log({ message: "No file with name ml-image passed", additionalInfo: "None"});
		return res.json({ message: "No file with name ml-image passed", additionalInfo: "None"});
	}
	
	if(
		[
			"image/gif",
			"image/jpeg",
			"image/png",
			"image/svg+xml",
			"image/webp"
		].indexOf(req.files["ml-image"].mimetype) < 0
	) {
		console.log({ message: `Invalid mime type "${req.files["ml-image"].mimetype}" for file`, additionalInfo: "None"});
		return res.json({ message: `Invalid mime type "${req.files["ml-image"].mimetype}" for file`, additionalInfo: "None"});
	}

	console.log("Writing file");

	writeFile(
		join(tmpPath, req.files["ml-image"].name), req.files["ml-image"].data,
		(werr) => {
			if(werr) {
				console.log({ message: "Error writing to file", additionalInfo: werr });
				return res.json({ message: "Error writing to file", additionalInfo: werr })
			}
			console.log("Wrote file");
			runpy(req.files["ml-image"].tempFilePath).then((resp) => {
				console.log("Ran file: " + resp);
				res.json({ label: resp });
				unlink(
					join(tmpPath, req.files["ml-image"].name),
					(err) => {
						if (err) console.error("Error deleting file!");
					}
				);
			}).catch((rerr) => {
				res.json({ message: "Error generating label", additionalInfo: rerr });
				unlink(
					join(tmpPath, req.files["ml-image"].name),
					(err) => {
						if (err) console.error("Error deleting file!");
					}
				);
			});
		}
	);
});

server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});