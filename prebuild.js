const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Get the total number of commits
const commitCount = execSync('git rev-list --count HEAD').toString().trim();

// Read the version from package.json
const packageJsonPath = path.resolve(process.cwd(), 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const version = packageJson.version;

// Get the current date in UTC format
const buildDate = new Date().toISOString();

// Combine the version, commit count, and build date
const buildInfo = {
  version,
  commitCount,
  buildDate,
  buildNumber: `${version}.${commitCount}`
};

// Write the build info to a file
fs.writeFileSync('build-info.json', JSON.stringify(buildInfo, null, 2));

console.log(`Build info generated: ${JSON.stringify(buildInfo, null, 2)}`);