import { Serializer } from '../Serializers';
import { Deserializer } from '../Deserializers';

import { LinkedSerializers } from '../Structures';
import { LinkedDeserializers } from '../Structures';

// TODO: This. Create a serializer/deserializer combo first.

export class Serializable {
    public Serializer: typeof Serializer;
    public Deserializer: typeof Deserializer;

    constructor(scheme: keyof typeof LinkedSerializers) {
        this.Serializer = LinkedSerializers[scheme];
        this.Deserializer = LinkedDeserializers[scheme];
    }
}