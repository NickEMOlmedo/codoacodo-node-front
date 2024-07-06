import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import SearchBar from "../../components/SearchBar";
import alertError from "../../components/alertError";
import alertSuccess from "../../components/alertSuccess";
import alertQuestion from "../../components/alertQuestion";

const ActualizarDepartamento = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const [selectNombre, setSelectNombre] = useState(null);


  const cargarData = async (data) => {

    try {

      const departamento = {
        id: data.id,
        nombre: data.nombre,
        apellido: data.apellido,
        dni: data.dni,
        fecha_contratacion: data.fecha_contratacion,
        salario: data.salario,
        departamento: data.departamento,
        pais: data.pais,
        cargo: data.cargo,
      };

      const response = await axios.put('http://localhost:3000/addEmpleados', departamento, {

        headers: { 'Content-Type': 'application/json' }

      });

      if (response.status === 201) {

        alertSuccess();
      }
    } catch (error) {
      alertError(error);
    }
  };

  const handleNombre = (nombre) => {

    setSelectNombre(nombre);

  };

  const question = () => {

    if (selectNombre) {

      alertQuestion({ title: "departamento", nombre: selectNombre.nombre });

    } else {

      console.error("No se ha seleccionado ningún departamento para actualizar.");

    }
  };


  return (
    <ActualizarDepartamentoFormComponent>
      <SearchBar handleNombre={handleNombre} />

      {selectNombre && (
        <form className="empleadoForm" onSubmit={handleSubmit(cargarData)}>
          <h2 className="formTittle">Cargar Departamento:</h2>
          <p className="formParagraph">Por favor ingresa un nuevo Departamento:</p>
          <div className="formContainer">
            <div className="formGroup">
              <input
                type="text"
                id="nombre"
                className="formInput"
                placeholder=" "
                defaultValue={selectNombre.nombre}
                {...register("nombre", {
                  required: "No ha ingresado ningun nombre",
                  minLength: { value: 2, message: "El nombre debe tener al menos dos caracteres" },
                  maxLength: { value: 30, message: "El nombre no puede tener mas de 30 caracteres" },
                  pattern: {
                    value: /^[A-Za-z\s]+$/i,
                    message: "El nombre solo puede contener letras y espacios"
                  }
                })}
              />
              {errors.nombre && <p className="errorsMessage">{errors.nombre.message}</p>}
              <label htmlFor="nombre" className="formLabel">
                Nombre:
              </label>
              <span className="formLine"></span>
            </div>
            <div className="formGroup">
              <input
                type="text"
                id="ubicacion"
                className="formInput"
                placeholder=" "
                defaultValue={selectNombre.ubicacion}
                {...register("ubicacion", {
                  required: "No ha ingresado ninguna ubicacion",
                  minLength: { value: 2, message: "La ubicación debe tener al menos dos caracteres" },
                  maxLength: { value: 30, message: "La ubicación no puede tener mas de 30 caracteres" },
                  pattern: {
                    value: /^[A-Za-z\s]+$/i,
                    message: "La ubicación solo puede contener letras y espacios"
                  }
                })}
              />
              {errors.ubicacion && <p className="errorsMessage">{errors.ubicacion.message}</p>}
              <label htmlFor="ubicacion" className="formLabel">
                Ubicación:
              </label>
              <span className="formLine"></span>
            </div>
            <input type="submit" className="formSubmit" value="Cargar Departamento" onClick={question} />
          </div>
        </form>
      )}
    </ActualizarDepartamentoFormComponent>


  )
}

const ActualizarDepartamentoFormComponent = styled.form`

  background-color: #ffffff;
  width: 90%;
  margin: 0 auto;
  max-width: 400px;
  text-align: center;
  padding: 4.5rem 3rem;
  border-radius: 10px;
  box-shadow: 0 5px 10px -5px rgb(0 0 0 / 100%);


  .formTittle {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.formParagraph {
  font-weight: 300;
}

.formContainer {
  margin-top: 3rem;
  display: grid;
  gap: 2.5rem;
}

.formGroup {
  position: relative;
  --color: #5757577e;
}

.formInput {
  width: 100%;
  background: none;
  color: #706c6c;
  font-size: 1rem;
  padding: 0.6rem 0.3rem;
  border: none;
  outline: none;
  border-bottom: 1px solid var(--color);
  font-family: "Roboto", sans-serif;
}

.formLabel {
  color: var(--color);
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 5px;
  transform: translateY(10px);
  transition: transform 0.5s color 0.3s;
}

.formInput:focus + .formLabel,
.formInput:not(:placeholder-shown) + .formLabel {
  transform: translateY(-12px) scale(0.9);
  transform-origin: left top;
  color: #3866f2;
}

.formSubmit {
  background-color: #3866f2;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  padding: 0.8em;
  border: none;
  border-radius: 0.5em;
}

.formLine {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #3866f2;
  transform: scale(0);
  transform: left bottom;
  transition: transform 0.4s;
}

.formInput:focus ~ .formLine,
.formInput:not(:placeholder-shown) ~ .formLine {
  transform: scale(1);
}

.formInput:not(:placeholder-shown) {
  color: #4d4646;
}


@media (max-width: 768px) {

margin-bottom: 2rem;

  .formTittle {
    font-size: 1.8rem;
  }
}

`;

export default ActualizarDepartamento