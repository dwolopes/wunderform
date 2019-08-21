
import apiClient from '../../../utils/api-client';

export const getHolidays = (params: any) =>
    apiClient.post('/default/wunderfleet-recruiting-backend-dev-save-payment-data', {
            "customerId":1,
            "iban":"DE8234",
            "owner":"Max Mustermann"
    });