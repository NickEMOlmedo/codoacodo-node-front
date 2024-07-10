import { useState } from 'react';
import styled from 'styled-components'; 
import PropTypes from 'prop-types'

const SearchBarComponent = ({ handleSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

 
    if (searchTerm.trim() !== '') {
      try {
        const response = await fetch(`http://localhost:3000/empleados/search/${searchTerm}`);
        const data = await response.json();
        if (response.ok) {
          setResults(data); 
        } else {
          setResults([]); 
        }
      } catch (error) {
        console.error('Error al buscar empleados:', error);
        setResults([]);
      }
    } else {
      setResults([]); 
    }
  };

  return (
    <SearchBarWrapper>
      <input
        className='formInput'
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Ingrese un Nombre:"
      />
      {results.length > 0 && (
        <ul>
          {results.map((empleado) => (
            <li key={empleado.id} onClick={() => handleSelect(empleado)}>
              {empleado.nombre}
            </li>
          ))}
        </ul>
      )}
    </SearchBarWrapper>
  );
};

SearchBarComponent.propTypes = {
  handleSelect: PropTypes.func, 
};

const SearchBarWrapper = styled.div`
  position: relative;

  input {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
  }

  ul {
    position: absolute;
    background-color: #fff;
    border: 1px solid #ccc;
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    list-style-type: none;
    margin-top: 0;
    padding-left: 0;
    z-index: 10;
  }

  li {
    padding: 8px;
    cursor: pointer;
  }

  li:hover {
    background-color: #f0f0f0;
  }
`;

export default SearchBarComponent;
