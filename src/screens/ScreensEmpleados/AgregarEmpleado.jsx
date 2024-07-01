import styled from "styled-components";
import { useForm } from "react-hook-form";
import paisesJSON from '/src/paises.json'
import axios from "axios";
import alertError from '/src/components/alertError'
import alertSuccess from '/src/components/alertSuccess'
import PropTypes from 'prop-types'


const AgregarEmpleado = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();

  const cargarData = async (data) => {

    try {

      const empleado = {

        nombre: data.nombre,
        apellido: data.apellido,
        dni: data.dni,
        fecha_contratacion: data.fecha_contratacion,
        salario: data.salario,
        departamento: data.departamento,
        pais: data.pais,
        cargo: data.cargo,

      }

      const url = '';

      const response = await axios.post(url, empleado, {

        headers: { 'Content-Type': 'application/json' }

      })

      if (response.status === 201) {

        alertSuccess();

      }

    } catch (error) {

      alertError(error);

    }

  }

  return (
    <EmpleadoFormComponent>
      <form className="empleadoForm" onSubmit={handleSubmit(cargarData)}>
        <h2 className="formTittle">Cargar Empleado</h2>
        <p className="formParagraph">Porfavor ingresa un nuevo empleado:</p>
        <div className="formContainer">
          <div className="formGroup">
            <input
              type="text"
              id="nombre"
              className="formInput"
              placeholder=" "
              {...register("nombre", {
                required: "No ha ingresado ningun nombre", minLength: { value: 2, message: "El nombre debe tener al menos dos caracteres" }, maxLength: { value: 30, message: "El nombre no puede tener mas de 30 caracteres" }, pattern: {
                  value: /^[A-Za-z\s]+$/i,
                  message: "El nombre solo puede contener letras y espacios"
                }
              })} />
            {errors.nombre && <p className="errorsMessage">{errors.nombre.message}</p>}
            <label htmlFor="name" className="formLabel">
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
              {...register("apellido", {
                required: "No ha ingresado ningun apellido", minLength: { value: 2, message: "El apellido debe tener al menos dos caracteres" }, maxLength: { value: 30, message: "El apellido no puede tener mas de 30 caracteres" }, pattern: {
                  value: /^[A-Za-z\s]+$/i,
                  message: "El apellido solo puede contener letras y espacios"
                }
              })} />
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
              {...register("dni", { required: "El dni es obligatori0", min: { value: 1, message: "El dni debe ser mayo a 1 digito" }, max: { value: 20, message: "El dni debe ser menor a 20 digitos" }, validate: { positive: value => parseInt(value, 10) > 1 || "El dni debe ser mayor a 1" } })} />

            {errors.dni && <p className="errorsMessage">{errors.dni.message}</p>}
            <label htmlFor="dni" className="formLabel">
              DNI:
            </label>
            <span className="formLine"></span>
          </div>
          <div className="formGroup">
            <select name="country" className="formInput" {...register("pais", { required: "Debe seleccionar un pais" })}>
              <option value="">Seleccione un país:</option>
              {paisesJSON.map((pais) => (
                <option key={pais.value} value={pais.value}>
                  {pais.label}
                </option>
              ))}
            </select>
            {errors.pais && <p className="errorsMessage">{errors.pais.message}</p>}
            <div />
            <span className="formLine"></span>
          </div>
          <div className="formGroup">
            <input
              type="date"
              id="fecha_contratacion"
              className="formInput"
              placeholder=" "
              {...register("fecha_contratacion", { required: "La fecha de contatacion es obligatoria" })} />
            {errors.fecha_contratacion && <p className="errorsMessage">{errors.fecha_contratacion.message}</p>}
            <label htmlFor="fecha_contratacion" className="formLabel">
              Fecha de contratacion:
            </label>
            <span className="formLine"></span>
          </div>
          <div className="formGroup">
            <select name="departamento" className="formInput" {...register("pais", { required: "Debe seleccionar un pais" })}>
              <option value="">Seleccione un Departamento:</option>
              {paisesJSON.map((pais) => (
                <option key={pais.value} value={pais.value}>
                  {pais.label}
                </option>
              ))}
            </select>
            {errors.pais && <p className="errorsMessage">{errors.pais.message}</p>}
            <div />
            <span className="formLine"></span>
          </div>
          <div className="formGroup">
            <input
              type="text"
              id="cargo"
              className="formInput"
              placeholder=" "
              {...register("cargo", {
                required: "No ha ingresado ningun cargo", minLength: { value: 2, message: "El cargo debe tener al menos dos caracteres" }, maxLength: { value: 30, message: "El cargo no puede tener mas de 30 caracteres" }, pattern: {
                  value: /^[A-Za-z\s]+$/i,
                  message: "El cargo solo puede contener letras y espacios"
                }
              })} />
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
              {...register("salario", { required: "El salario es obligatorio", min: { value: 100, message: "El minimo permitido es 100." }, max: { value: 9999999, message: "El maximo permitido es: 9999999 " }, validate: { positive: value => parseInt(value, 10) > 100 || "El salario debe ser mayor a 100" } })} />
            {errors.salario && <p className="errorsMessage">{errors.salario.message}</p>}
            <label htmlFor="salario" className="formLabel">
              Salario:
            </label>
            <span className="formLine"></span>
          </div>
          <input type="submit" className="formSubmit" value="Cargar Empleado" />
        </div>
      </form>
    </EmpleadoFormComponent>
  )
}


AgregarEmpleado.propTypes = {

  valor: PropTypes.Object,
  url: PropTypes.string.isRequired,

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


export default AgregarEmpleado;
