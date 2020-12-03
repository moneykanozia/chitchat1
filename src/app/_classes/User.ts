export interface User{
    name: string;
    id: string;
    email: string;
  }

export interface U_profile{
  name: string;
  email:string;
  dob: string;
  p_n: number;
 // photo:string,
  status:any;
}
 export interface Message{
   attachmentUrl: string;
   CreatedAt: any;
   messageText: string;
   receiverId : string;
   senderId: string;
   status: boolean;
 } 