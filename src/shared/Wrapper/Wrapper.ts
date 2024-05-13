import { apiCaller } from "@/services/apiCaller";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface WrapperProps {
  children: React.ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  const checkToken = async () => {
    try {
      if (!token) {
        throw new Error("Token is missing");
      }

      const payloadData = {
        token: token
      };

      const payload = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await apiCaller.post("/api/v1/authverify/", payloadData);
   
      if (response.data) {
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
