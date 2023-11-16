import { execSync } from 'child_process';

export default async function useless() {
    execSync('sleep 1.5');

    return "Bravo !";
}