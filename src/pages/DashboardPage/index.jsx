import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api";
import { SectionUnderDevelopment } from "../../components/SectionUnderDevelopment";
import { HeaderDashboard } from "../../components/Headers/HearderDashboard";
import { StyledSectionProfile } from "./styles";
import { toast } from "react-toastify";

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
          const token = tokenWithQuotes.replace(/"/g, "");
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const userData = response.data;
          setUserData(userData);
        }
      } catch (error) {
        toast.error(error);
      }
    };
    authentication();
  }, [navigate]);

  return (
    <main>
      <HeaderDashboard />
      <StyledSectionProfile>
        <div>
          <h1>{userData.name}</h1>
          <p>{userData.course_module}</p>
        </div>
      </StyledSectionProfile>
      <SectionUnderDevelopment />
    </main>
  );
};
