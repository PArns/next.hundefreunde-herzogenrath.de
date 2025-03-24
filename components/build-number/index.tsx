import fs from "fs";
import path from "path";
import React from "react";

export default function BuildInfo() {
  const buildInfoPath = path.resolve(process.cwd(), "build-info.json");
  const buildInfo = JSON.parse(fs.readFileSync(buildInfoPath, "utf8"));
  const buildDate = new Date(buildInfo.buildDate);

  return (
    <div className="flex items-center">
      <span className="text-xs">
        Version: {buildInfo.buildNumber} ({buildDate.toLocaleDateString("de-DE")})
      </span>
    </div>
  );
}
