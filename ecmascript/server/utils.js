import path from 'path';
import fs from 'fs/promises';

export async function read(page) {
    const pathfile = path.join(__dirname, "www", page);
    return await fs.readFile(pathfile);
}