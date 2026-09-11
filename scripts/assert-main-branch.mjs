import { execFileSync } from 'node:child_process';

const requiredBranch = 'main';

let currentBranch;

try {
  currentBranch = execFileSync('git', ['branch', '--show-current'], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  }).trim();
} catch {
  console.error('Unable to determine the current Git branch. Production publishing has been blocked.');
  process.exit(1);
}

if (currentBranch !== requiredBranch) {
  const branchLabel = currentBranch || '(detached HEAD)';
  console.error(`Production publishing is only allowed from '${requiredBranch}'. Current branch: '${branchLabel}'.`);
  console.error(`Switch to '${requiredBranch}', pull the latest changes, and run 'npm run live' again.`);
  process.exit(1);
}

console.log(`Production publish guard passed: current branch is '${requiredBranch}'.`);
