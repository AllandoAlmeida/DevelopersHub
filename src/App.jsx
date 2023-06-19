import "react-toastify/dist/ReactToastify.css";
import { RoutesMain } from "./routes/RoutesMain";
import { ResetStyle } from "./styles/reset";
import { CustomToastContainer } from "./components/CustomToastContainer/CustomToastContainer";

export const App = () => {
  return (
    <div>
      <ResetStyle />
      <RoutesMain />
      <CustomToastContainer />
    </div>
  );
};
