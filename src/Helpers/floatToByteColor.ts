import { ByteColor } from '../Interfaces';

export function floatToByteColor(float: number): ByteColor {
    return { 
        value: (float >= 1.0 ? 255 : (float <= 0.0 ? 0 : Math.floor(float * 256.0)))
    }
}