import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { DashboardPage } from "../pages/DashboardPage";

import { ProtectedRoutes } from "./ProtectedRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { TechnologiesProvider } from "../providers/TechnologiesContext";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route
          path="/dashboard"
          element={
            <TechnologiesProvider>
              <DashboardPage />
            </TechnologiesProvider>
          }
        />
      </Route>
    </Routes>
  );
};
