import { join } from "path";

export const PORT = process.env.PORT || 8080;
const py = join(new URL("./", import.meta.url).pathname, "python");
export const pyPath = process.platform === "win32" ? py.substr(1, py.length) : py;
const temp = join(new URL("./", import.meta.url).pathname, "..", "tmp");
export const tmpPath = process.platform === "win32" ? temp.substr(1, temp.length) : temp;
