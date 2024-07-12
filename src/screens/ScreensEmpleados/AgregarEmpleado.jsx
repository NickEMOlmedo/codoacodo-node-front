import { useState, useEffect } from 'react';
import styled from "styled-components";
import { useForm } from "react-hook-form";
import paisesJSON from '/src/paises.json'
import getData from '/src/components/getData.js'
import sendForm from '/src/components/sendForm.js'
import alertError from '../../components/alertError';

const AgregarEmpleado = () => {

  const { register, formState: { errors }, handleSubmit} = useForm();

  const [listaDepartamentos, setListaDepartamentos] = useState([]);

  //Fetch para Setear las listas de seleccion.

  useEffect(() => {
    
    const fetchDepartamentos = async () => {

      const url_Departamentos = 'https://sistema-gestion-de-empleados-backend-2024.vercel.app/departamentos';

      try {
        
        const response = await getData(url_Departamentos);

        if (response && response.data && response.data.data) {

          setListaDepartamentos(response.data.data);

        } else {

          throw new Error('Formato de respuesta incorrecto');
        }
      } catch (error) {
        
        alertError('Error al cargar departamentos');

      }
    };

    fetchDepartamentos();

  }, []);

  const onSubmitHandler = (data) => {

    const url = 'http://sistema-gestion-de-empleados-backend-2024.vercel.app/empleados/';

    const empleado = {

      nombre: data.nombre,
      apellido: data.apellido,
      fecha_contratacion: data.fecha_contratacion,
      salario: data.salario,
      departamento_id: data.departamento_id,
      pais: data.pais,
      cargo: data.cargo,
      dni: data.dni,
    };

    sendForm(url, empleado);

    
  };


  return (
    <EmpleadoFormComponent onSubmit={handleSubmit(onSubmitHandler)}>
      <h2 className="formTittle">Cargar Empleado</h2>
      <p className="formParagraph">Por favor ingresa un nuevo empleado:</p>
      <div className="formContainer">
        <div className="formGroup">
        <label htmlFor="nombre" className="formLabel">
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            className="formInput"
            {...register("nombre", {
              required: "No ha ingresado ningún nombre",
              minLength: { value: 2, message: "El nombre debe tener al menos dos caracteres" },
              maxLength: { value: 30, message: "El nombre no puede tener más de 30 caraclearcteres" },
              pattern: {
                value: /^[A-Za-z\s]+$/i,
                message: "El nombre solo puede contener letras y espacios"
              }
            })}
          />
          {errors.nombre && <p className="errorMessage">{errors.nombre.message}</p>}
          <span className="formLine"></span>
        </div>
        <div className="formGroup">
        <label htmlFor="apellido" className="formLabel">
            Apellido:
          </label>
          <input
            type="text"
            id="apellido"
            className="formInput"
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
          {errors.apellido && <p className="errorMessage">{errors.apellido.message}</p>}
          <span className="formLine"></span>
        </div>
        <div className="formGroup">
        <label htmlFor="dni" className="formLabel">
            DNI:
          </label>
          <input
            type="text"
            inputMode="numeric"
            id="dni"
            className="formInput"
            {...register("dni", {
              required: "El DNI es obligatorio",
              min: { value: 1, message: "El DNI debe ser mayor a 1 dígito y contenero solor numeros" },
              max: { value: 9999999999, message: "El DNI debe ser menor a 20 dígitos y contener solo numeros" },
              validate: { positive: value => parseInt(value, 10) > 1 || "El DNI debe ser mayor a 1" }
            })}
          />
          {errors.dni && <p className="errorMessage">{errors.dni.message}</p>}
          <span className="formLine"></span>
        </div>
        <div className="formGroup">
          <select
            name="country"
            className="formInput"
            {...register("pais", { required: "Debe seleccionar un país" })}
          >
            <option value="">Seleccione un país:</option>
            {paisesJSON.map((pais) => (
              <option key={pais.value} value={pais.value}>
                {pais.label}
              </option>
            ))}
          </select>
          {errors.pais && <p className="errorMessage">{errors.pais.message}</p>}
          <span className="formLine"></span>
        </div>
        <div className="formGroup">
        <label htmlFor="fecha_contratacion" className="formLabel">
            Fecha de contratación:
          </label>
          <input
            type="date"
            id="fecha_contratacion"
            className="formInput"
            {...register("fecha_contratacion", { required: "La fecha de contratación es obligatoria" })}
          />
          {errors.fecha_contratacion && <p className="errorMessage">{errors.fecha_contratacion.message}</p>}
          <span className="formLine"></span>
        </div>
        <div className="formGroup">
        <select
              name="departamento"
              className="formInput"
              {...register("departamento_id", { required: "Debe seleccionar un departamento" })}>
              <option value="">Seleccione un departamento:</option>
              {listaDepartamentos.map((departamento) => (
                <option key={departamento.id} value={departamento.id}>
                {console.log(departamento)}
                  {departamento.nombre}
                </option>
              ))}
            </select>
          {errors.departamento && <p className="errorMessage">{errors.departamento.message}</p>}
          <span className="formLine"></span>
        </div>
        <div className="formGroup">
        <label htmlFor="cargo" className="formLabel">
            Cargo:
          </label>
          <input
            type="text"
            id="cargo"
            className="formInput"
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
          {errors.cargo && <p className="errorMessage">{errors.cargo.message}</p>}
          <span className="formLine"></span>
        </div>
        <div className="formGroup">
        <label htmlFor="salario" className="formLabel">
            Salario:
          </label>
          <input
            type="text"
            id="salario"
            inputMode="numeric"
            className="formInput"
            {...register("salario", {
              required: "El salario es obligatorio",
              min: { value: 100, message: "El mínimo permitido es 100" },
              max: { value: 9999999, message: "El máximo permitido es 9999999" },
              validate: { positive: value => parseInt(value, 10) > 100 || "El salario debe ser mayor a 100" }
            })}
          />
          {errors.salario && <p className="errorMessage">{errors.salario.message}</p>}
          <span className="formLine"></span>
        </div>
        <input type="submit" className="formSubmit" value="Cargar Empleado"/>
      </div>
    </EmpleadoFormComponent>

  )
}

const EmpleadoFormComponent = styled.form`

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
  font-family: "Roboto", sans-serif;
}

.formLabel {
  display:flex;
  justify-content: flex-start;
  color: #3866f2;
  border: none;
  transition: transform 0.5s color 0.3s;
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
  cursor: pointer;
}

.formLine {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #3866f2;
}

.errorMessage {

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


export default AgregarEmpleado;
