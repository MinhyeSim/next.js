import axios, {AxiosResponse} from 'axios'
import { StringIterator } from 'lodash'
import { JoinPayload } from '../reducers/userReducer.ts'
const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege...",
}

export interface UserType{
    userid : string;
    paswword: string;
    email: string;
    name: string;
    phone: string;
    birth: string;
    adress: string;
}


export const postUser = asyc (payload: 
    {userid : string,paswword: string, email: string,
     name: string, phone: string, birth: string, adress: string}) => {
     try{
        const response : AxiosResponse(unknown, UserType[]>= await axios.post(`${SERVER}/api/user/signup`, data,{headers})
        alert('진행4 : 응답성공' +JSON.stringify(response.data))
        return response.data
    }catch(err){
        return err;
    }

