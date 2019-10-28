import { ByteColor } from '../Interfaces';

export function byteColorsToHexColor(r: ByteColor, g: ByteColor, b: ByteColor): string {
    let red = r.value.toString(16);
    let green = g.value.toString(16);
    let blue = b.value.toString(16);

    if (red.length < 2) red = "0" + red;
    if (green.length < 2) green = "0" + green;
    if (blue.length < 2) blue = "0" + blue;

    return('#' + red + green + blue);
}