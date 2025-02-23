"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";

export function FormsLogin() {

    // State para datos del user
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    // State para errores
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Validar formulario
    const validateForm = () => {
        let isValid = true;
        let newErrors = { name: "", email: "", password: "" };

        // Validar nombre (no vacío)
        if (!formData.name.trim()) {
            newErrors.name = "El nombre no puede estar vacío";
            isValid = false;
        }

        // Validar email (debe tener @ y terminar en .com)
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = "El correo debe tener @ y terminar en .com";
            isValid = false;
        }

        // Validar contraseña (mínimo 8 caracteres, una mayúscula y un carácter especial)
        const passwordRegex = /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
        if (!passwordRegex.test(formData.password)) {
            newErrors.password =
                "La contraseña debe tener mínimo 8 caracteres, una mayúscula y un carácter especial";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()){
            setSuccessMessage(`Bienvenido ${formData.name}`);
            console.log(formData);

            setFormData({ name: "", email: "", password: "" });
            setErrors({ name: "", email: "", password: "" });
        }
    }

    

    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">

            {successMessage && (
                <h1 className="text-3xl font-bold text-green-600 mb-4">
                    {successMessage}
                </h1>
            )}

            <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">Registro</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                    />
                   
                    <input
                        type="email"
                        name="email"
                        placeholder="Correo"
                        value={formData.email}
                        onChange={handleChange}    
                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                    />
                    
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                    />

                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}  
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                   
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Registrarse
                        </button>
                    </div>  



                    {successMessage && <p className="text-green-600 font-semibold mt-3 text-center">{successMessage}</p>}
                </form>
            </div>
        </div>
    );
}


export default function Page3() {
    return (
        <div>
            <Navbar />
            <FormsLogin />
        </div>
        
    );
}   