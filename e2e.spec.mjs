import {_electron as electron} from 'playwright';

let electronApp = await electron.launch({args: [process.cwd()]});

const appPath = await electronApp.evaluate(async ({app}) => app.getAppPath());
console.assert(
    appPath === process.cwd(),
    `appPath expect value: ${process.cwd()}, but got ${appPath}`
)


await electronApp.close()


process.exit(appPath === process.cwd() ? 0 : 1)
