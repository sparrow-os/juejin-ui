import {FormData} from '@/schema/sign-up';
import HttpClient from "@/utils/HttpClient";
export default function signUp(signData:FormData) {
  return HttpClient.post('/register/email', signData);
}