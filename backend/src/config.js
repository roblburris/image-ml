import { join } from "path";

export const PORT = process.env.PORT || 8080;
export const pyPath = join(new URL("./", import.meta.url).pathname, "python");
export const tmpPath = join(new URL("./", import.meta.url).pathname, "..", "tmp");