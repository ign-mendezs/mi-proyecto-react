import { useForm } from "react-hook-form";
import { loginUser } from "../services/authService";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data);
      login(response.token);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded">
      <h2 className="text-lg font-semibold">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Email" type="email" register={register} name="email" required />
        <Input label="Contraseña" type="password" register={register} name="password" required />
        <Button text="Ingresar" />
      </form>
    </div>
  );
};

export default Login;
