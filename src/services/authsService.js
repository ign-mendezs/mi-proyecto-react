import axios from "axios";
import Cookies from "js-cookie";

export const loginUser = async (email, password, setIsAuthenticated) => {
  try {
    const response = await axios.post("http://localhost:5000/api/login", {
      email,
      password,
    });

    Cookies.set("sessionToken", response.data.token, { expires: 1 }); // Expira en 1 día
    setIsAuthenticated(true);
  } catch (error) {
    console.error("Error en el inicio de sesión", error);
  }
};
