import express from "express";
const app = express();
import { createServer } from "http";
const server = createServer(app);

import { PORT, tmpPath } from "./config.js";
import runpy from "./runpy.js";

import { writeFile, unlink } from "fs";
import { join } from "path";

app.get("/", (req, res) => {
	res.send("hi");
});

app.post("/", (req, res) => {
	writeFile(join(tmpPath, "img.txt"), "random text. will be file once post request accepts files", (err) => {
		if(err) res.json({message: "Error writing to file"})
		runpy("img.txt").then(resp => {
			unlink(join(tmpPath, "img.txt"), (err) => {
				if (err) res.json({message: "Failed to delete file"});
				else res.json({message: resp});
			});
		});
	});
});

server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});