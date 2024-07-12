import styled from "styled-components";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import alertError from "../../components/alertError";
import sendForm from '/src/components/sendForm.js'


const AgregarAsignacion = () => {

  const { register, formState: { errors }, reset, handleSubmit } = useForm();

  const [listaEmpleados, setListaEmpleados] = useState([]);
  const [listaProyectos, setListaProyectos] = useState([]);

  //Fetch para Setear las listas de seleccion.

  useEffect(() => {

    const fetchEmpleadosyProyectos = async () => {

      const url_Empleados = 'https://sistema-gestion-de-empleados-backend-2024.vercel.app/empleados/';
      const url_Proyectos = 'https://sistema-gestion-de-empleados-backend-2024.vercel.app/proyectos/';

      try {

        const responseEmpleados = await fetch(url_Empleados);

        if (!responseEmpleados.ok) {

          throw new Error('Error al cargar el empleado');
        }

        const data = await responseEmpleados.json();

        setListaEmpleados(data.data.data);

      } catch (error) {

        alertError('Error al cargar departamentos');

      }

      try {

        const responseProyectos = await fetch(url_Proyectos);

        if (!responseProyectos.ok) {

          throw new Error('Error al cargar el proyecto');
        }

        const data = await responseProyectos.json();

        setListaProyectos(data.data.data);

      } catch (error) {


        alertError('Error al cargar departamentos');

      }

    };

    fetchEmpleadosyProyectos();

  }, []);

  const onSubmitHandler = (data) => {

    const url = 'https://sistema-gestion-de-empleados-backend-2024.vercel.app/asignaciones/';

    const asignacion = {

      empleado_id: data.empleado_id,
      proyecto_id: data.proyecto_id,
      fecha_asignacion: data.fecha_asignacion,
      horas_trabajadas: data.horas_trabajadas,

    };

    sendForm(url, asignacion);

    reset();

  };

  return (
    <AsignacionesFormComponent>
      <h2 className="formTittle">Cargar Asignación:</h2>
      <p className="formParagraph">Por favor ingresa una nueva asignación:</p>
      <div className="formContainer">
        <div className="formGroup">
          <label htmlFor="empleado_id" className="formLabel">
            Seleccione un Empleado:
          </label>
          <select
            name="empleado_id"
            className="formInput"
            {...register("empleado_id", { required: "Debe seleccionar un empleado." })}
          >
            <option value="">Elija un Empleado</option>
            {listaEmpleados.map((empleado) => (
              <option key={empleado.id} value={empleado.id}>
                {empleado.nombre}
              </option>
            ))}
          </select>
          {errors.empleado_id && <p className="errorMessage">{errors.empleado_id.message}</p>}
          <span className="formLine"></span>
        </div>
        <div className="formGroup">
          <label htmlFor="proyecto" className="formLabel">
            Seleccione un Proyecto:
          </label>
          <select
            name="proyecto"
            className="formInput"
            {...register("proyecto_id", { required: "Debe seleccionar un proyecto." })}
          >
            <option value="">Elija un Proyecto</option>
            {listaProyectos.map((proyecto) => (
              <option key={proyecto.id} value={proyecto.id}>
                {proyecto.nombre}
              </option>
            ))}
          </select>
          {errors.proyecto && <p className="errorMessage">{errors.proyecto.message}</p>}
          <span className="formLine"></span>
        </div>
        <div className="formGroup">
          <label htmlFor="fecha_asignacion" className="formLabel">
            Fecha de asignación:
          </label>
          <input
            type="date"
            id="fecha_asignacion"
            className="formInput"
            {...register("fecha_asignacion", { required: "La fecha de asignación es obligatoria." })}
          />
          {errors.fecha_asignacion && <p className="errorMessage">{errors.fecha_asignacion.message}</p>}
          <span className="formLine"></span>
        </div>
        <div className="formGroup">
          <label htmlFor="horas_trabajadas" className="formLabel">
            Horas trabajadas:
          </label>
          <input
            type="text"
            id="horas_trabajadas"
            inputMode="numeric"
            className="formInput"
            {...register("horas_trabajadas", {
              required: "Las horas trabajadas son obligatorias.",
              min: { value: 1, message: "El mínimo permitido es 1." },
              max: { value: 8764, message: "El máximo permitido es 8764." },
              validate: { positive: value => parseInt(value, 10) > 1 || "Las horas deben ser mayor a 1." }
            })}
          />
          {errors.horas_trabajadas && <p className="errorMessage">{errors.horas_trabajadas.message}</p>}
          <span className="formLine"></span>
        </div>
        <input type="submit" className="formSubmit" value="Cargar Asignación" onClick={handleSubmit(onSubmitHandler)} />
      </div>
    </AsignacionesFormComponent>

  )
}


const AsignacionesFormComponent = styled.form`
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



export default AgregarAsignacion;
