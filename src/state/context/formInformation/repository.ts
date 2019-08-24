
import apiClient from '../../../utils/api-client';

export const registerCustomer = (params: any) => apiClient.post('/default/wunderfleet-recruiting-backend-dev-save-payment-data', {...params});