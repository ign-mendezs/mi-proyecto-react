import { useForm } from "react-hook-form";
import { registerUser } from "@/services/authService";

import { useRouter } from "next/router";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      await registerUser(data);
      router.push("/login");
    } catch (error) {
      console.error("Error al registrar:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded">
      <h2 className="text-lg font-semibold">Registro</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Nombre" type="text" register={register} name="name" required />
        <Input label="Email" type="email" register={register} name="email" required />
        <Input label="Contraseña" type="password" register={register} name="password" required />
        <Button text="Registrar" />
      </form>
    </div>
  );
};

export default Register;
