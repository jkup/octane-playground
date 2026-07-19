// @tsrx/typescript-plugin locates each framework's TSRX compiler by a hardcoded
// path table. For octane it looks for:
//
//   node_modules/octane/src/compiler/volar.js
//
// but octane@0.1.10 publishes only `dist/`, so the lookup misses, no compiler
// is found, and every .tsrx file gets parsed as plain TypeScript — you get a
// wall of TS1005 "',' expected" errors in the editor and from tsrx-tsc.
//
// This drops in a re-export at the path the plugin expects. Remove this script
// (and the postinstall hook) once octane ships src/ or the plugin looks in dist/.
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const real = join(root, 'node_modules/octane/dist/compiler/volar.js');
const expected = join(root, 'node_modules/octane/src/compiler/volar.js');

if (!existsSync(real)) {
	console.warn('[patch-octane-volar] octane/dist/compiler/volar.js not found — skipping.');
	process.exit(0);
}

if (existsSync(expected)) process.exit(0);

mkdirSync(dirname(expected), { recursive: true });
writeFileSync(expected, "export * from '../../dist/compiler/volar.js';\n");
console.log('[patch-octane-volar] linked octane/src/compiler/volar.js -> dist/');
