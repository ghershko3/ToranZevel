import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Toran {
  readonly id: string;
  readonly name: string;
  readonly isInOffice?: boolean;
  readonly order?: number;
  readonly isOnShift?: boolean;
  constructor(init: ModelInit<Toran>);
  static copyOf(source: Toran, mutator: (draft: MutableModel<Toran>) => MutableModel<Toran> | void): Toran;
}