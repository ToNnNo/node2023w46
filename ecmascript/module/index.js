import Voiture, {hi, bye} from "#voiture";
import path from "path";
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = fileURLToPath(new URL('.', import.meta.url));

const voiture = new Voiture("Citroen", "DS3");

console.log(voiture.detail());

console.log(hi(), bye());

console.log(path.join('images', 'thumbnail', 'logo.jpg'));

console.log(__dirname, __filename);