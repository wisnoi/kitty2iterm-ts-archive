import { LinkedSerializers } from '../Structures'

export function validateScheme(input: string): boolean {
    return Object.keys(LinkedSerializers).includes(input);
}