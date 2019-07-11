import fs from "fs";
import path from "path";

import { getVersion } from "../../lib";

test('"getVersion()" returns a version string equal to the value of "version" in "package.json"', () => {
  const pkgJson = readPkgJson();
  expect(getVersion()).toEqual(pkgJson.version);
});

function readPkgJson() {
  const filePath = path.resolve(process.cwd(), "package.json");
  const raw = fs.readFileSync(filePath);
  return JSON.parse(raw.toString());
}
