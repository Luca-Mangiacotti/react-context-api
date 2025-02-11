import BtnDefault from "../pages-components/BtnDefault";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const initialData = {
    username: "",
    password: "",
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialData);

  const HandleFormFields = (fieldName, value) => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      [fieldName]: value,
    }));
  };

  const FormSubmit = (event) => {
    event.preventDefault();

    //simulazione di login con un if
    if (formData.username === "Luca" && formData.password === "password") {
      console.log("accesso riuscito");
      navigate("/");
    } else {
      console.log("accesso negato");
    }
    setFormData(initialData);
  };

  return (
    <div className="w-full max-w-xs">
      <form
        onSubmit={FormSubmit}
        className="bg-amber-50  shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(event) =>
              HandleFormFields("username", event.target.value)
            }
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            value={formData.password}
            onChange={(event) =>
              HandleFormFields("password", event.target.value)
            }
          />
        </div>
        <BtnDefault type="submit">ENTRA</BtnDefault>
      </form>
    </div>
  );
}
