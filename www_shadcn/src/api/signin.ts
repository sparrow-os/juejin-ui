import {FormData} from '@/schema/sign-in';
import HttpClient from "@/utils/HttpClient";
export default function signIn(signData:FormData) {
  return HttpClient.post('/register/email', signData);
}