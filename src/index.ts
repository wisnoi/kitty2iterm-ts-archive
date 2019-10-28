import * as fs from 'fs';
import minimist from 'minimist';
import SimpleLoggerW from 'simpleloggerw';

import { argHandler } from './Handlers';
import { validateScheme } from './Helpers';

const Logger = new SimpleLoggerW();
 
/**
 * h, help: print help documentation  
 * f, file: path to input file  
 * i, in: input format  
 * o, out: output format
 */
const argv = minimist(process.argv.slice(2), {
    string: ['file', 'in', 'out', 'target'],
    boolean: ['help'],
    alias: {
        h: 'help',
        f: 'file',
        i: 'in',
        o: 'out',
        t: 'target'
    }
});

function printHelpDocumentation(): void {
    console.log(`kitty2iterm - Convert terminal color schemes.
    Usage: kitty2iterm [arguments]

        Arguments:
            -h, -help                        -- Print this help documentation and nothing else
            -f, -file <path/to/input.ext>    -- Required, valid path to a terminal color scheme
            -i, -in <input scheme>           -- Required, scheme to convert from. See: Schemes
            -o, -out <output scheme>         -- Required, scheme to convert to. See: Schemes
            -t, -target <path/to/output.ext> -- Optional, path to a file to write to. If this argument is not set, the utility will print the converted scheme to stdout
            
        Schemes:
            kitty, itermcolors`);
        
}

let xml: string = '';

if (!argv) {
    printHelpDocumentation();
    process.exit(1);
}

if (argv.h) {
    printHelpDocumentation();
    process.exit(1);
}

if (!argv.f) {
    Logger.fatal('No input file path passed as argument');
    printHelpDocumentation();
    process.exit(1);
}

if (!argv.i) {
    Logger.fatal('No input schema passed as argument');
    printHelpDocumentation();
    process.exit(1);
}

if (!argv.o) {
    Logger.fatal('No output schema passed as argument');
    printHelpDocumentation();
    process.exit(1);
}

argv.i = argv.i.toLowerCase();
argv.o = argv.o.toLowerCase();

if (argv.i === argv.o) {
    Logger.fatal('Input and output scheme types cannot be the same: redundant');
    printHelpDocumentation();
    process.exit(1);
}

if (!validateScheme(argv.i)) {
    Logger.fatal('Invalid input scheme');
    printHelpDocumentation();
    process.exit(1);
}

if (!validateScheme(argv.o)) {
    Logger.fatal('Invalid output scheme');
    printHelpDocumentation();
    process.exit(1);
}

argHandler(argv);