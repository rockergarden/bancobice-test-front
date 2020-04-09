import { Deserializable } from './deserializable.model';

export class IndicatorModel implements Deserializable{

    key: string = "";
    name: string;
    unit: string;
    date: string;
    value: number;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
      }
    
    }

    

