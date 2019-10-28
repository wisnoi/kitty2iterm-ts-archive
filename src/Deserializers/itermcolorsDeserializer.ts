import * as plist from 'plist';

import { byteColorsToHexColor } from '../Helpers';
import { Deserializer } from '.';
import { floatToByteColor } from '../Helpers';
import { IntermediateObject } from '../Interfaces';
import { validateIntermediateKey } from '../Helpers';


export class itermcolorsDeserializer extends Deserializer {
    constructor(data: string) {
        super(data);
    }

    _colorDictToRGB(prop: plist.PlistObject): string {
        /**
         * iTerm2 Specific Names
         */
        const red = 'Red Component'
        const green = 'Green Component';
        const blue = 'Blue Component';

        const tRed = floatToByteColor(prop[red] as number);
        const tGreen = floatToByteColor(prop[green] as number);
        const tBlue = floatToByteColor(prop[blue] as number);

        const tRGB = byteColorsToHexColor(tRed, tGreen, tBlue);
        
        return tRGB;
    }

    deserialize(): Partial<IntermediateObject> {
        const obj = plist.parse(this.data) as plist.PlistObject;

        const int: Partial<IntermediateObject> = {}

        // Iterate through ANSI colors
        for (let i = 0; i < 15; i++) {
            const itermname = `Ansi ${i} Color`;
            const intName = `ANSI${i}_COLOR`;
            if (obj[name]) {
                if (validateIntermediateKey(intName)) {
                    int[intName] = this._colorDictToRGB(obj[itermname] as plist.PlistObject);
                }
            } else {
                break;
            }
        }

        // Grab background color
        if (obj['Background Color']) {
            int.BACKGROUND_COLOR = this._colorDictToRGB(obj['Background Color'] as plist.PlistObject);
        }

        // Grab foreground color
        if (obj['Foreground Color']) {
            int.FOREGROUND_COLOR = this._colorDictToRGB(obj['Foreground Color'] as plist.PlistObject);
        }

        // Grab cursor color
        if (obj['Cursor Color']) {
            int.CURSOR_COLOR = this._colorDictToRGB(obj['Cursor Color'] as plist.PlistObject);
        }

        // Grab selection text color
        if (obj['Selection Text Color']) {
            int.SELECTION_BACKGROUND_COLOR = this._colorDictToRGB(obj['Selection Text Color'] as plist.PlistObject);
        }
        
        //Grab selection color
        if (obj['Selection Color']) {
            int.SELECTION_FOREGROUND_COLOR = this._colorDictToRGB(obj['Selection Color'] as plist.PlistObject);
        }

        return int;
    }
} 