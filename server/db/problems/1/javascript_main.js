import Handlebars from "handlebars";
import fs from 'fs';
import path from "path";
import { fileURLToPath } from 'url';

// Get the directory name of the current module (file)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const template = fs.readFileSync(path.join(__dirname, 'javascript_main.md'),'utf-8');

const javascript_main = Handlebars.compile(template);

export default javascript_main;
