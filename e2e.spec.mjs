import {_electron as electron} from 'playwright';

let electronApp = await electron.launch({args: [process.cwd()]});

const appPath = await electronApp.evaluate(async ({app}) => app.getAppPath());
console.log({
    ['app.getAppPath()']: appPath,
    cwd: process.cwd(),
});
console.assert(
    appPath === process.cwd(),
)

await electronApp.close()


process.exit(appPath === process.cwd() ? 0 : 1)
