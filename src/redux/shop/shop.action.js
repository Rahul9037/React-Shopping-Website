import { UPDATE_COLLECTION } from '../../types/types';

export const UpdateCollection = (collectionMap) => ({
    type : UPDATE_COLLECTION,
    data : collectionMap
})