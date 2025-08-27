import { authAPI } from "../services/api";

const Login = () => {
  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await authAPI.login({ email, password });
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));
      // Redirecionar para dashboard
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
};
