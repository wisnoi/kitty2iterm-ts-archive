import { IntermediateObject } from '../Interfaces';

export function validateIntermediateKey(key: string): key is keyof IntermediateObject {
    const int: Partial<IntermediateObject> = {};
    return Object.keys(int).includes(key);
}