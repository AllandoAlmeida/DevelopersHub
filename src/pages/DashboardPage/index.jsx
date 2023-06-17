import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api";

export const DashboardPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const authentication = async () => {
      try {
        const tokenWithQuotes = localStorage.getItem("@kenzieHub:token");
        if (!tokenWithQuotes) {
          navigate("/login");
        } else {
          const token = tokenWithQuotes.replace(/"/g, '');

          console.log("Token found:", token);
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const userData = response.data;
          console.log("User data:", userData);

          setUserData(userData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    authentication();
  }, [navigate]);


  return (
    <div>
      <h1>{userData.name}</h1>
      <p>{userData.course_module}</p>
    </div>
  );
};
