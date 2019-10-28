import * as fs from 'fs';
import minimist from 'minimist';
import SimpleLoggerW from 'simpleloggerw';
const Logger = new SimpleLoggerW();

/**
 * Use input/output to create serializables
 * Do things with those serializables.
 */
function argHandler(args: minimist.ParsedArgs): void {

    /**
     * const in = new Serializable(args.i);
     * const to = new Serializable(args.o);
     * 
     * const fileData = fs.readFileSync(args.f, 'utf8');
     * const intermediate = new in.Deserializer(fileData).deserialize();
     * const out = new to.Serializer(intermediate).serialize();
     * if (args.t) {
     *     fs.writeFileSync(args.t, out);
     * } else {
     *     process.stdout.write(out);
     * }
     */


    console.log(fs.readFileSync(args.f), 'utf8');
}

export { argHandler };