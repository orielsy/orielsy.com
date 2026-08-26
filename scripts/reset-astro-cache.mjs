import { rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const astroCacheDirectory = fileURLToPath(new URL('../.astro', import.meta.url));

rmSync(astroCacheDirectory, { recursive: true, force: true });
