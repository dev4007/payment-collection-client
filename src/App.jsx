import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import AuthRoutes from "./routes/AuthRoutes";
import { SignIn, SignUp } from "./pages/auth";

function App() {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route element={<AuthRoutes />}>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/home/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
