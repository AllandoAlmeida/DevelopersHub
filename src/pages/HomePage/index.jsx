import { Link } from "react-router-dom";
import { LoginSection } from "../../components/Section/LoginSection";

export const HomePage = () => {
  return (
    <div>
      <LoginSection />
      <div>
        <p>Ainda não possui um conta?</p>
        <button>
          <Link to="/register">Cadastre-se</Link>
        </button>
      </div>
    </div>
  );
};
