import styled from "styled-components";
import { useForm } from "react-hook-form";
import sendForm from '/src/components/sendForm.js'


const AgregarProyecto = () => {

  const { register, formState: { errors }, reset, handleSubmit } = useForm();

  const onSubmitHandler = (data) => {

    const url = 'http://localhost:3000/proyectos/';

    const proyecto = {

      nombre: data.nombre,
      fecha_inicio: data.fecha_inicio,
      presupuesto: data.presupuesto

    };

    sendForm(url, proyecto);

    setTimeout(() => {
    reset()
    }, 2000);
  
  }


  return (
    <ProyectoFormComponent onSubmit={handleSubmit(onSubmitHandler)}>
    <h2 className="formTitle">Cargar Proyecto:</h2>
    <p className="formParagraph">Por favor ingresa un nuevo Proyecto:</p>
    <div className="formContainer">
      <div className="formGroup">
        <label htmlFor="nombre" className="formLabel">
          Nombre:
        </label>
        <input
          type="text"
          id="nombre"
          className="formInput"
          placeholder=" "
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
        {errors.nombre && <p className="errorMessage">{errors.nombre.message}</p>}
        <span className="formLine"></span>
      </div>
      <div className="formGroup">
        <label htmlFor="fecha_inicio" className="formLabel">
            Fecha de inicio:
          </label>
          <input
            type="date"
            id="fecha_inicio"
            className="formInput"
            {...register("fecha_inicio", { required: "La fecha de inicio es obligatoria" })}
          />
          {errors.fecha_inicio && <p className="errorMessage">{errors.fecha_inicio.message}</p>}
          <span className="formLine"></span>
        </div>
        <div className="formGroup">
        <label htmlFor="salario" className="formLabel">
            Presupuesto:
          </label>
          <input
            type="text"
            id="presupuesto"
            inputMode="numeric"
            className="formInput"
            {...register("presupuesto", {
              required: "El prsupuesto es obligatorio",
              min: { value: 100, message: "El mínimo permitido es 100" },
              max: { value: 9999999, message: "El máximo permitido es 99999999999" },
              validate: { positive: value => parseInt(value, 10) > 100 || "El salario debe ser mayor a 100" }
            })}
          />
          {errors.salario && <p className="errorMessage">{errors.salario.message}</p>}
          <span className="formLine"></span>
        </div>
      <input type="submit" className="formSubmit" value="Cargar Proyecto" />
    </div>
  </ProyectoFormComponent>
  )
}

const ProyectoFormComponent = styled.form`

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



export default AgregarProyecto;
