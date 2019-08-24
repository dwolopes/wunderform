import createLoadingPlugin from '@rematch/loading';
import createRematchPersist from '@rematch/persist';

export const loading = createLoadingPlugin({
    whitelist: ['formInformation/registerCustomer'],
});

export const persistPlugin = createRematchPersist({
    whitelist: ['formInformation'],
    version: 1,
});