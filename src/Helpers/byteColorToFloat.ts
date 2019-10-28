import { ByteColor } from '../Interfaces';

export function byteColorToFloat(color: ByteColor): number {
    return color.value / 256.0;
}