import styled from "styled-components";
import { useState, useEffect } from "react";
import {useForm } from "react-hook-form";
import paisesJSON from '/src/paises.json'
import alertError from "../../components/alertError";
import getData from '/src/components/getData.js'
import updateForm from '/src/components/updateForm.js'
import alertQuestion from "../../components/alertQuestion";


const ActualizarEmpleado = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const [listaDepartamentos, setListaDepartamentos] = useState([]);
  const [selectEmpleado, setSelectEmpleado] = useState([]);
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null);
  const [formData,setFormData] = useState({});


  useEffect(() => {

    const fetchDepartamentos = async () => {

      const url_Departamentos = 'http://localhost:3000/departamentos/';

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

    const fetchEmpleados = async () => {

      const url = 'http://localhost:3000/empleados/';

      try {
        const response = await getData(url);

        if (response && response.data && response.data.data) {

          setSelectEmpleado(response.data.data);

        } else {

          alertError('Error al cargar los empleados');
        }

      } catch (error) {

        alertError();

      }
    };

    fetchDepartamentos();
    fetchEmpleados();

  }, []);

  const cargarEmpleado = async (dniSelect) => {

    const url = `http://localhost:3000/empleados/${dniSelect}`;

    try {

      const response = await getData(url);

      if (response && response.data && response.data.data && response.data.data.length > 0) {

        const empleado = {

          nombre: response.data.data[0].nombre,
          apellido: response.data.data[0].apellido,
          dni: dniSelect,
          fecha_contratacion: response.data.data[0].fecha_contratacion,
          salario: response.data.data[0].salario,
          departamento_id: response.data.data[0].departamento_id,
          pais: response.data.data[0].pais,
          cargo: response.data.data[0].cargo

        };

        setEmpleadoSeleccionado(empleado);

      } else {

        setEmpleadoSeleccionado(null);

        console.log('No se encontraron datos válidos para el empleado');

      }
    } catch (error) {

      alert(error);
    }
  };


  const onSubmit = (data) => {

    setFormData(data);

    alert(empleadoSeleccionado.dni)
    
    alertQuestion('Empleado: ', empleadoSeleccionado.nombre + " - " + "DNI: " + empleadoSeleccionado.dni, updateAction);

  };
 
  const updateAction = async () => {

    console.log(formData)
   
    const dni = empleadoSeleccionado.dni.trim();

    const url = `http://localhost:3000/empleados/${dni}`;

    const empleado = {

      nombre: formData.nombre,
      apellido: formData.apellido,
      dni:formData.dni,
      fecha_contratacion: formData.fecha_contratacion,
      salario: formData.salario,
      departamento_id: formData.departamento_id,
      pais: formData.pais,
      cargo: formData.cargo,
    };

    
    try {

      const isTrue = await updateForm(url,empleado);
  
      if (isTrue) {

        setEmpleadoSeleccionado(null);

      }

      return isTrue;

    } catch (error) {

      alertError(error.message || 'Error al eliminar el empleado');

      return false;

    }
  };

  const formatFechaContratacion = (fecha) => {

    return new Date(fecha).toISOString().split('T')[0];

  };


  return (
    <ActualizarEmpleadoComponent onSubmit={handleSubmit(onSubmit)}>
      <h2 className="formTitle">Actualizar Empleado</h2>
      <p className="formParagraph">Por favor elija un empleado:</p>
      <div className="formContainer">
        <div className="formGroup" id="empleadoSelect">
          <select
            id="empleado"
            name="empleado"
            className="formInput"
            onChange={(e) => cargarEmpleado(e.target.value)}
          >
            <option value="">Seleccione un empleado:</option>
            {selectEmpleado.map((empleado) => (
              <option key={empleado.dni} value={empleado.dni}>
                {`${empleado.nombre} ${empleado.apellido} - DNI: ${empleado.dni}`}
              </option>
            ))}
          </select>
        </div>

        {empleadoSeleccionado && (

            <div className="empleadoForm">
              <p className="formParagraph">Proceda a actualizar los datos:</p>
              <div className="formContainer">
                <div className="formGroup">
                <label htmlFor="nombre" className="formLabel">Nombre:</label>
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
                        message: "El nombre solo puede contener letras y espacios",
                      },
                    })}
                    defaultValue={empleadoSeleccionado.nombre || '' }
                    />
                  {errors.nombre && <p className="errorsMessage">{errors.nombre.message}</p>}
               
                  <span className="formLine"></span>
                </div>
                <div className="formGroup">
                <label htmlFor="apellido" className="formLabel">Apellido:</label>
                  <input
                    type="text"
                    id="apellido"
                    className="formInput"
                    placeholder=" "
                    {...register("apellido", {
                      required: "No ha ingresado ningún apellido",
                      minLength: { value: 2, message: "El apellido debe tener al menos dos caracteres" },
                      maxLength: { value: 30, message: "El apellido no puede tener más de 30 caracteres" },
                      pattern: {
                        value: /^[A-Za-z\s]+$/i,
                        message: "El apellido solo puede contener letras y espacios",
                      },
                    })}
                    defaultValue={empleadoSeleccionado.apellido || ''}
                  />
                  {errors.apellido && <p className="errorsMessage">{errors.apellido.message}</p>}
                  <span className="formLine"></span>
                </div>
                <div className="formGroup">
                <label htmlFor="dni" className="formLabel">DNI:</label>
                <input
               type="text"
              id="dni"
              className="formInput"
                placeholder=" "
               {...register("dni", {
                required: "El DNI es obligatorio",
                 minLength: { value: 7, message: "El DNI debe tener al menos 7 dígitos" },
                maxLength: { value: 10, message: "El DNI no puede tener más de 10 dígitos" },
               pattern: {
               value: /^[0-9]+$/,
              message: "El DNI debe contener solo números",
                  },
                     })}
                   defaultValue={empleadoSeleccionado.dni || ''}
                     />
                  {errors.dni && <p className="errorsMessage">{errors.dni.message}</p>}
                  <span className="formLine"></span>
                </div>
                <div className="formGroup">
                <label htmlFor="pais" className="formLabel">Pais:</label>
                  <select
                    name="country"
                    className="formInput"
                    {...register("pais", { required: "Debe seleccionar un país" })}
                    defaultValue={empleadoSeleccionado.pais || ''}
                    >
                  
                    {paisesJSON.map((pais) => (
                      <option key={pais.value} value={pais.value}>{pais.label}</option>
                    ))}
                  </select>
                  {errors.pais && <p className="errorsMessage">{errors.pais.message}</p>}
                  <span className="formLine"></span>
                </div>
                <div className="formGroup">
                <label htmlFor="fecha_contratacion" className="formLabel">Fecha de contratación:</label>
                  <input
                    type="date"
                    id="fecha_contratacion"
                    className="formInput"
                    placeholder=" "
                    {...register("fecha_contratacion", { required: "La fecha de contratación es obligatoria" })}
                   defaultValue={formatFechaContratacion(empleadoSeleccionado.fecha_contratacion)}                  />
                  {errors.fecha_contratacion && <p className="errorsMessage">{errors.fecha_contratacion.message}</p>}
                  <span className="formLine"></span>
                </div>
                <div className="formGroup">
                <label htmlFor="departamento" className="formLabel">Departamento:</label>
                  <select
                    name="departamento"
                    className="formInput"
                    {...register("departamento", { required: "Debe seleccionar un departamento" })}
                    defaultValue={empleadoSeleccionado.departamento_id || ''}
                  >
                    <option value="">Seleccione un Departamento:</option>
                    {listaDepartamentos.map((departamento) => (
                      <option key={departamento.id} value={departamento.id}>{departamento.nombre}</option>
                    ))}
                  </select>
                  {errors.departamento && <p className="errorsMessage">{errors.departamento.message}</p>}
                  <span className="formLine"></span>
                </div>
                <div className="formGroup">
                <label htmlFor="cargo" className="formLabel">Cargo:</label>
                  <input
                    type="text"
                    id="cargo"
                    className="formInput"
                    placeholder=" "
                    {...register("cargo", {
                      required: "No ha ingresado ningún cargo",
                      minLength: { value: 2, message: "El cargo debe tener al menos dos caracteres" },
                      maxLength: { value: 30, message: "El cargo no puede tener más de 30 caracteres" },
                      pattern: {
                        value: /^[A-Za-z\s]+$/i,
                        message: "El cargo solo puede contener letras y espacios",
                      },
                    })}
                    defaultValue={empleadoSeleccionado.cargo || ''}
                  />
                  {errors.cargo && <p className="errorsMessage">{errors.cargo.message}</p>}
                  <span className="formLine"></span>
                </div>
                <div className="formGroup">
                <label htmlFor="salario" className="formLabel">Salario:</label>
                  <input
                    type="number"
                    id="salario"
                    inputMode="numeric"
                    className="formInput"
                    placeholder=" "
                    {...register("salario", {
                      required: "El salario es obligatorio",
                      min: { value: 100, message: "El mínimo permitido es 100." },
                      max: { value: 9999999, message: "El máximo permitido es 9999999" },
                      validate: { positive: value => parseInt(value, 10) > 100 || "El salario debe ser mayor a 100" },
                    })}
                    defaultValue={empleadoSeleccionado.salario || ''}
                  />
                  {errors.salario && <p className="errorsMessage">{errors.salario.message}</p>}
                  <span className="formLine"></span>
                </div>
                <input type="submit" className="formSubmit" value="Actualizar Empleado" />
              </div>
            </div>
        )}
      </div>
    </ActualizarEmpleadoComponent>
  );
};

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

  .formTitle {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .formParagraph {
  font-weight: 500;

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

  #empleadoSelect{

    border: solid 2px #4d4646;
    border-radius: 5px;
    box-shadow: 0 5px 10px -5px rgb(0 0 0 / 100%);


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

    .formTitle {
      font-size: 1.8rem;
    }
  }
`;

export default ActualizarEmpleado;