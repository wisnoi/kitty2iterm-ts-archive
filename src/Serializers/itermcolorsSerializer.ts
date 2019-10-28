import { IntermediateObject } from '../Interfaces';
import { JSONType } from '../Types';
import { Serializer } from '.';
import { validateIntermediateKey } from '../Helpers';

export class itermcolorsSerializer extends Serializer {
    constructor(intermediate: Partial<IntermediateObject>) {
        super(intermediate);
    }

    /**
     *> console.log(plist.build({ "test": 1 }));
        <?xml version="1.0" encoding="UTF-8"?>
        <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
        <plist version="1.0">
            <dict>
                <key>test</key>
                <integer>1</integer>
            </dict>
        </plist>
     */
    serialize(): string {
        const json: any = {}; // TODO: Make an actual union type for JSON

        // There should never not be all 15
        // ANSI colors in an intermediate object,
        // but sometimes things happen
        for (let i = 0; i < 15; i++) {
            const itermname = `Ansi ${i} Color`;
            const intName = `ANSI${i}_COLOR`;
            if (validateIntermediateKey(intName)) {
                if (this.intermediate[intName]) {
                    // Convert to float.
                }
            }
        }

        return '';
    }
}