import styled from "styled-components";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import paisesJSON from '/src/paises.json'
import axios from "axios";
import SearchBar from "../../components/SearchBar";
import alertError from "../../components/alertError";
import alertSuccess from "../../components/alertSuccess";
import alertQuestion from "../../components/alertQuestion";

const ActualizarEmpleado = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const [selectNombre, setSelectNombre] = useState(null);
  const [listaDepartamentos, setListaDepartamentos] = useState([]);


  const fetchDepartamentos = async () => {

    const url_Departamentos = 'http://codoacodo-node-back-production.up.railway.app/';

    try {

      const response = await axios.get(url_Departamentos);
      const dataDepartamentos = response.data;
      return dataDepartamentos;

    } catch (error) {

      console.error('Error cargando departamentos', error);

    }


  };

  useEffect(() => {

    const cargarDepartamentos = async () => {

      const departamentos = await fetchDepartamentos();

      setListaDepartamentos(departamentos);

    };

    cargarDepartamentos();

  }, []);


  const cargarData = async (data) => {

    try {

      const empleado = {
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

      const response = await axios.put('http://localhost:3000/addEmpleados', empleado, {

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

      alertQuestion({ title: "empleado", nombre: selectNombre.nombre });

    } else {

      console.error("No se ha seleccionado ningún empleado para actualizar.");

    }
  };

  return (
    <ActualizarEmpleadoComponent>
      <h2 className="formTittle">Cargar Empleado</h2>
      <p className="formParagraph">Por favor ingresa un nombre en la búsqueda:</p>

      <SearchBar handleNombre={handleNombre} />

      {selectNombre && (
        <form className="empleadoForm" onSubmit={handleSubmit(cargarData)}>
          <h2 className="formTittle">Cargar Empleado</h2>
          <p className="formParagraph">Por favor ingresa un nuevo empleado:</p>
          <div className="formContainer">
            <div className="formGroup">
              <input
                type="text"
                id="nombre"
                className="formInput"
                placeholder=" "
                defaultValue={selectNombre.nombre}
                {...register("nombre", {
                  required: "No ha ingresado ningún nombre",
                  minLength: { value: 2, message: "El nombre debe tener al menos dos caracteres" },
                  maxLength: { value: 30, message: "El nombre no puede tener más de 30 caracteres" },
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
                id="apellido"
                className="formInput"
                placeholder=" "
                defaultValue={selectNombre.apellido}
                {...register("apellido", {
                  required: "No ha ingresado ningún apellido",
                  minLength: { value: 2, message: "El apellido debe tener al menos dos caracteres" },
                  maxLength: { value: 30, message: "El apellido no puede tener más de 30 caracteres" },
                  pattern: {
                    value: /^[A-Za-z\s]+$/i,
                    message: "El apellido solo puede contener letras y espacios"
                  }
                })}
              />
              {errors.apellido && <p className="errorsMessage">{errors.apellido.message}</p>}
              <label htmlFor="apellido" className="formLabel">
                Apellido:
              </label>
              <span className="formLine"></span>
            </div>
            <div className="formGroup">
              <input
                type="number"
                inputMode="numeric"
                id="dni"
                className="formInput"
                placeholder=" "
                defaultValue={selectNombre.dni}
                {...register("dni", {
                  required: "El DNI es obligatorio",
                  min: { value: 1, message: "El DNI debe ser mayor a 1 dígito" },
                  max: { value: 20, message: "El DNI debe ser menor a 20 dígitos" },
                  validate: { positive: value => parseInt(value, 10) > 1 || "El DNI debe ser mayor a 1" }
                })}
              />
              {errors.dni && <p className="errorsMessage">{errors.dni.message}</p>}
              <label htmlFor="dni" className="formLabel">
                DNI:
              </label>
              <span className="formLine"></span>
            </div>
            <div className="formGroup">
              <select
                name="country"
                className="formInput"
                {...register("pais", { required: "Debe seleccionar un país" })}
                defaultValue={selectNombre.pais}
              >
                <option value="">Seleccione un país:</option>
                {paisesJSON.map((pais) => (
                  <option key={pais.value} value={pais.value}>
                    {pais.label}
                  </option>
                ))}
              </select>
              {errors.pais && <p className="errorsMessage">{errors.pais.message}</p>}
              <span className="formLine"></span>
            </div>
            <div className="formGroup">
              <input
                type="date"
                id="fecha_contratacion"
                className="formInput"
                placeholder=" "
                {...register("fecha_contratacion", { required: "La fecha de contratación es obligatoria" })}
              />
              {errors.fecha_contratacion && <p className="errorsMessage">{errors.fecha_contratacion.message}</p>}
              <label htmlFor="fecha_contratacion" className="formLabel">
                Fecha de contratación:
              </label>
              <span className="formLine"></span>
            </div>
            <div className="formGroup">
              <select
                name="departamento"
                className="formInput"
                {...register("departamento", { required: "Debe seleccionar un departamento" })}
              >
                <option value="">Seleccione un Departamento:</option>
                {listaDepartamentos.map((departamento) => (
                  <option key={departamento.id} value={departamento.id}>
                    {departamento.nombre}
                  </option>
                ))}
              </select>
              {errors.departamento && <p className="errorsMessage">{errors.departamento.message}</p>}
              <span className="formLine"></span>
            </div>
            <div className="formGroup">
              <input
                type="text"
                id="cargo"
                className="formInput"
                placeholder=" "
                defaultValue={selectNombre.cargo}
                {...register("cargo", {
                  required: "No ha ingresado ningún cargo",
                  minLength: { value: 2, message: "El cargo debe tener al menos dos caracteres" },
                  maxLength: { value: 30, message: "El cargo no puede tener más de 30 caracteres" },
                  pattern: {
                    value: /^[A-Za-z\s]+$/i,
                    message: "El cargo solo puede contener letras y espacios"
                  }
                })}
              />
              {errors.cargo && <p className="errorsMessage">{errors.cargo.message}</p>}
              <label htmlFor="cargo" className="formLabel">
                Cargo:
              </label>
              <span className="formLine"></span>
            </div>
            <div className="formGroup">
              <input
                type="number"
                id="salario"
                inputMode="numeric"
                className="formInput"
                placeholder=" "
                defaultValue={selectNombre.salario}
                {...register("salario", {
                  required: "El salario es obligatorio",
                  min: { value: 100, message: "El mínimo permitido es 100." },
                  max: { value: 9999999, message: "El máximo permitido es 9999999 " },
                  validate: { positive: value => parseInt(value, 10) > 100 || "El salario debe ser mayor a 100" }
                })}
              />
              {errors.salario && <p className="errorsMessage">{errors.salario.message}</p>}
              <label htmlFor="salario" className="formLabel">
                Salario:
              </label>
              <span className="formLine"></span>
            </div>
            <input type="submit" className="formSubmit" value="Actualizar Empleado" onClick={question} />
          </div>
        </form>
      )}
    </ActualizarEmpleadoComponent>

  )
}

const ActualizarEmpleadoComponent = styled.form`

  background-color: #ffffff;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 3rem;
  max-width: 400px;
  text-align: center;
  padding: 4.5rem 3rem 2.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 10px -5px rgb(0 0 0 / 100%);

  .formTittle {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.formParagraph {
  font-weight: 300;
  margin-bottom: 1rem;
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

.errorsMessage {

color: tomato;
font-size: 10px; 
   
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


export default ActualizarEmpleado;
