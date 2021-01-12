// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Toran } = initSchema(schema);

export {
  Toran
};