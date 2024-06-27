import styled from "styled-components";
import { useState } from "react";


const EliminarEmpleado = () => {
    return (
        <EliminarEmpleadoComponent>
            <form className="empleadoForm">
                <h2 className="formTittle">Eliminar Empleado:</h2>
                <p className="formParagraph">Porfavor ingresa el nombre del empleado:</p>
                <div className="formContainer">
                    <div className="formGroup">
                        <input
                            type="text"
                            id="empleado"
                            className="formInput"
                            placeholder=" "
                            onChange={(event) => {
                                setNombre(event.target.value)
                            }}
                        />
                        <label htmlFor="name" className="formLabel">
                            Empleado:
                        </label>
                        <span className="formLine"></span>
                    </div>
                    <div className="formGroup">
                        <input
                            type="text"
                            id="proyecto"
                            className="formInput"
                            placeholder=" "
                            onChange={(event) => {
                                setProyecto(event.target.value)
                            }}
                        />
                        <label htmlFor="nombre" className="formLabel">
                            Proyecto:
                        </label>
                        <span className="formLine"></span>
                    </div>
                   
                    <input type="submit" className="formSubmit" value="Eliminar Empleado" />
                </div>
            </form>
        </EliminarEmpleadoComponent>
    )
}

const EliminarEmpleadoComponent = styled.form`

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


.formLabel {
  color: var(--color);
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 5px;
  transform: translateY(10px);
  transition: transform 0.5s color 0.3s;
}



@media (max-width: 768px) {

margin-bottom: 2rem;

  .formTittle {
    font-size: 1.8rem;
  }
}

`;


export default EliminarEmpleado;
