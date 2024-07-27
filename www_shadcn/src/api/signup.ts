import {FormData} from '@/schema/sign-up';
export default function signUp(signData:FormData) {
  httpClient.post('/api/signup', signData)
  alert(JSON.stringify(signData, null, 2));
}