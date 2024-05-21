import { LoginUser } from "@/services/fetch";
import { useMutation } from "@tanstack/react-query";

interface Credentials {
    login: string;
    password: string;
  }

const UseLoginUser = () => {
    return useMutation({
       mutationFn: LoginUser,
        }
    );
 }
 
 export { UseLoginUser };

