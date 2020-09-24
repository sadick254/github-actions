const yargs = require('yargs')
const chalk = require('chalk')

const options = yargs(process.argv)

options.alias('v', 'version').version(chalk.blue('@latest')).argv
