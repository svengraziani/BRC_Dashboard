import { setUserData } from "@/redux/slice/userSlice";
import { apiCaller } from "@/services/apiCaller";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface WrapperProps {
  children: React.ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  const router = useRouter();
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  const dispatch = useDispatch()

  const checkToken = async () => {
    try {
      if (!token) {
        throw new Error("Token is missing");
      }

      const payloadData = {
        token: JSON.parse(token)
      };

      const response = await apiCaller.post("/api/v1/authverify/", payloadData);
   
      if (response.data) {
        console.log(response.data.user,'logged in user data ????');

        const userData = {
          token: response.data.token,
          email: response.data.user.email,
          firstName: response.data.user.first_name,
          lastName: response.data.user.last_name,
          isActive: response.data.user.is_active,
          isSuperUser: response.data.user.is_superuser,
          pk: response.data.user.pk
        }

        dispatch(setUserData(userData))

        
        // setLoading(false); 
      } else {
        throw new Error("Token verification failed");
      }


      // setLoading(false); 

    } catch (error) {
      console.error("Token validation error:", error);
      router.push("/login"); 
    }
  };
  
  useEffect(() => {
    checkToken();
  }, []);
  
  return children;
 
}
