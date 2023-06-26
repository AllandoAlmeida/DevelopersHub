import "react-toastify/dist/ReactToastify.css";
import { RoutesMain } from "./routes/RoutesMain";
import { ResetStyle } from "./styles/reset";
import { CustomToastContainer } from "./components/CustomToastContainer/CustomToastContainer";
import { useContext } from "react";
import { UserContext } from "./providers/UserContext";

export const App = () => {
  const { loading } = useContext(UserContext);
  return (
    <div>
      <ResetStyle />
      {loading ? <p>Carregando...</p> : <RoutesMain />}
      <CustomToastContainer />
    </div>
  );
};
