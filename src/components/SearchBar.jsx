import styled from 'styled-components'
import { useState } from 'react'
import axios from 'axios';
import PropTypes from 'prop-types';

const SearchBar = ({ handleNombre }) => {

  const [nombres, setNombres] = useState([]);
  const [value, setValue] = useState('');

  const setValor = (event) => {

    setValue(event.target.value);

  }

  const realizarBusqueda = async () => {

    const URL = '';

    try {

      const response = await axios.get(URL, {

        params: { search: value }

      });

    

      if (response.status === 201 && response.data.status === 'success') {

        setNombres(response.data.nombre);

      } else {

        setNombres([]);

        console.error('Error en la búsqueda:', response.data.message);
      }

    } catch (error) {

      console.error('Error en la búsqueda:', error);

    }
  };

  const handleNombreClick = (nombre) => {

    handleNombre(nombre);

  };

  return (
    <SearchBarComponent>
      <form className="empleadoForm " onSubmit={(e) => e.preventDefault()}>
        <div className="formContainer">
          <div className="formGroup">
            <input
              type="text"
              className="formInput"
              placeholder=" "
              onChange={setValor}
            />
            <label htmlFor="name" className="formLabel">
              Nombre:
            </label>
            <span className="formLine"></span>
          </div>
          <input type="submit" className="formSubmit" value="Buscar" onClick={realizarBusqueda}/>
          <ul>
            {nombres.map((nombre) => (
              <li key={nombre.id} onClick={() => handleNombreClick(nombre)}>
                {nombre.name}
              </li>
            ))}
          </ul>
        </div>
      </form>
    </SearchBarComponent>
  )
}

SearchBar.propTypes = {

  handleNombre: PropTypes.func.isRequired,

}

const SearchBarComponent = styled.form`

  
  background-color: #ffffff;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 3rem;
  max-width: 400px;
  text-align: center;
  padding: 1rem 3rem 2.5rem;
  border-radius: 10px;
  border: solid 1px  #5757577e;
  box-shadow: 0 5px 10px -5px rgb(0 0 0 / 100%);


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


export default SearchBar;