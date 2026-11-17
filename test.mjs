// The page must have a greeting of at least two letters.
import { readFileSync } from 'node:fs';
const page = readFileSync(new URL('./index.html', import.meta.url), 'utf8');
if (!/id="greeting">[^<]{2,}</.test(page)) { console.error('FAIL: the greeting is missing'); process.exit(1); }
console.log('ok: greeting present');
