import { IntermediateObject } from '../Interfaces';

/**
 * Represents the construction of a color scheme
 * from an intermediate object.
 */

export class Serializer {
    public intermediate: Partial<IntermediateObject>;

    constructor(intermediate: Partial<IntermediateObject>) {
        this.intermediate = intermediate;
    }
}