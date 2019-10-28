import { ByteColor } from '../Interfaces';

export function hexColorToByteColors(color: string): ByteColor[] {
    if (color.startsWith('#')) color = color.substr(1);

    const r = color.substr(0, 2);
    const g = color.substr(2, 2);
    const b = color.substr(4, 2);

    const rNum = parseInt(r, 16);
    const gNum = parseInt(g, 16);
    const bNum = parseInt(b, 16);

    return [
        {
            color: "r",
            value: rNum
        },
        {
            color: "g",
            value: rNum
        },
        {
            color: "b",
            value: bNum
        }
    ]
}