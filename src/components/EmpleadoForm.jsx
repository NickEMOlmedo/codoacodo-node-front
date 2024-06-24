
import "../App.css"
import styled from "styled-components";
import { useState } from "react";

{

  /*
  const [nombre, setNombre] = useState;
  const [apellido, setApellido] = useState;
  const [edad, setEdad] = useState;
  const [pais, setPais] = useState;
  const [cargo, setCargo] = useState;
  const [antiguedad, setAntiguedad] = useState;
  
  */
}


const EmpleadoForm = () => {

  return (
    <EmpleadoFormComponent>
      <form className="empleadoForm">
        <h2 className="formTittle">Cargar Empleado</h2>
        <p className="formParagraph">Porfavor ingresa un nuevo empleado:</p>
        <div className="formContainer">
          <div className="formGroup">
            <input
              type="text"
              id="nombre"
              className="formInput"
              placeholder=" "
              onChange={(event) => {
                setNombre(event.target.value)
              }}
            />
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
              onChange={(event) => {
                setApellido(event.target.value)
              }}
            />
            <label htmlFor="apellido" className="formLabel">
              Apellido:
            </label>
            <span className="formLine"></span>
          </div>
          <div className="formGroup">
            <input
              type="number"
              id="edad"
              min="18"
              max="99"
              className="formInput"
              placeholder=" "
              onChange={(event) => {
                setEdad(event.target.value)
              }}
            />
            <label htmlFor="name" className="formLabel">
              Edad:
            </label>
            <span className="formLine"></span>
          </div>
          <div className="formGroup">
            <select name="country" className="formInput" onChange={(event) => {
              setPais(event.target.value)
            }}>
              <option value="invalid">Ingrese el Pais</option>
              <option value="AF">Afganistán</option>
              <option value="AL">Albania</option>
              <option value="DZ">Argelia</option>
              <option value="AS">Samoa Americana</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
              <option value="AI">Anguila</option>
              <option value="AQ">Antártida</option>
              <option value="AG">Antigua y Barbuda</option>
              <option value="AR">Argentina</option>
              <option value="AM">Armenia</option>
              <option value="AW">Aruba</option>
              <option value="AU">Australia</option>
              <option value="AT">Austria</option>
              <option value="AZ">Azerbaiyán</option>
              <option value="BS">Bahamas</option>
              <option value="BH">Baréin</option>
              <option value="BD">Bangladés</option>
              <option value="BB">Barbados</option>
              <option value="BY">Bielorrusia</option>
              <option value="BE">Bélgica</option>
              <option value="BZ">Belice</option>
              <option value="BJ">Benín</option>
              <option value="BM">Bermudas</option>
              <option value="BT">Bután</option>
              <option value="BO">Bolivia</option>
              <option value="BA">Bosnia y Herzegovina</option>
              <option value="BW">Botsuana</option>
              <option value="BV">Isla Bouvet</option>
              <option value="BR">Brasil</option>
              <option value="IO">Territorio Británico del Océano Índico</option>
              <option value="BN">Brunéi Darussalam</option>
              <option value="BG">Bulgaria</option>
              <option value="BF">Burkina Faso</option>
              <option value="BI">Burundi</option>
              <option value="KH">Camboya</option>
              <option value="CM">Camerún</option>
              <option value="CA">Canadá</option>
              <option value="CV">Cabo Verde</option>
              <option value="KY">Islas Caimán</option>
              <option value="CF">República Centroafricana</option>
              <option value="TD">Chad</option>
              <option value="CL">Chile</option>
              <option value="CN">China</option>
              <option value="CX">Isla de Navidad</option>
              <option value="CC">Islas Cocos (Keeling)</option>
              <option value="CO">Colombia</option>
              <option value="KM">Comoras</option>
              <option value="CG">Congo</option>
              <option value="CD">República Democrática del Congo</option>
              <option value="CK">Islas Cook</option>
              <option value="CR">Costa Rica</option>
              <option value="CI">Costa de Marfil</option>
              <option value="HR">Croacia</option>
              <option value="CU">Cuba</option>
              <option value="CY">Chipre</option>
              <option value="CZ">República Checa</option>
              <option value="DK">Dinamarca</option>
              <option value="DJ">Yibuti</option>
              <option value="DM">Dominica</option>
              <option value="DO">República Dominicana</option>
              <option value="EC">Ecuador</option>
              <option value="EG">Egipto</option>
              <option value="SV">El Salvador</option>
              <option value="GQ">Guinea Ecuatorial</option>
              <option value="ER">Eritrea</option>
              <option value="EE">Estonia</option>
              <option value="ET">Etiopía</option>
              <option value="FK">Islas Malvinas</option>
              <option value="FO">Islas Feroe</option>
              <option value="FJ">Fiyi</option>
              <option value="FI">Finlandia</option>
              <option value="FR">Francia</option>
              <option value="GF">Guayana Francesa</option>
              <option value="PF">Polinesia Francesa</option>
              <option value="TF">Territorios Australes Franceses</option>
              <option value="GA">Gabón</option>
              <option value="GM">Gambia</option>
              <option value="GE">Georgia</option>
              <option value="DE">Alemania</option>
              <option value="GH">Ghana</option>
              <option value="GI">Gibraltar</option>
              <option value="GR">Grecia</option>
              <option value="GL">Groenlandia</option>
              <option value="GD">Granada</option>
              <option value="GP">Guadalupe</option>
              <option value="GU">Guam</option>
              <option value="GT">Guatemala</option>
              <option value="GN">Guinea</option>
              <option value="GW">Guinea-Bisáu</option>
              <option value="GY">Guyana</option>
              <option value="HT">Haití</option>
              <option value="HM">Islas Heard y McDonald</option>
              <option value="VA">Santa Sede (Estado de la Ciudad del Vaticano)</option>
              <option value="HN">Honduras</option>
              <option value="HK">Hong Kong</option>
              <option value="HU">Hungría</option>
              <option value="IS">Islandia</option>
              <option value="IN">India</option>
              <option value="ID">Indonesia</option>
              <option value="IR">Irán</option>
              <option value="IQ">Irak</option>
              <option value="IE">Irlanda</option>
              <option value="IL">Israel</option>
              <option value="IT">Italia</option>
              <option value="JM">Jamaica</option>
              <option value="JP">Japón</option>
              <option value="JO">Jordania</option>
              <option value="KZ">Kazajistán</option>
              <option value="KE">Kenia</option>
              <option value="KI">Kiribati</option>
              <option value="KP">Corea del Norte</option>
              <option value="KR">Corea del Sur</option>
              <option value="KW">Kuwait</option>
              <option value="KG">Kirguistán</option>
              <option value="LA">Laos</option>
              <option value="LV">Letonia</option>
              <option value="LB">Líbano</option>
              <option value="LS">Lesoto</option>
              <option value="LR">Liberia</option>
              <option value="LY">Libia</option>
              <option value="LI">Liechtenstein</option>
              <option value="LT">Lituania</option>
              <option value="LU">Luxemburgo</option>
              <option value="MO">Macao</option>
              <option value="MK">Macedonia del Norte</option>
              <option value="MG">Madagascar</option>
              <option value="MW">Malaui</option>
              <option value="MY">Malasia</option>
              <option value="MV">Maldivas</option>
              <option value="ML">Malí</option>
              <option value="MT">Malta</option>
              <option value="MH">Islas Marshall</option>
              <option value="MQ">Martinica</option>
              <option value="MR">Mauritania</option>
              <option value="MU">Mauricio</option>
              <option value="YT">Mayotte</option>
              <option value="MX">México</option>
              <option value="FM">Micronesia</option>
              <option value="MD">Moldavia</option>
              <option value="MC">Mónaco</option>
              <option value="MN">Mongolia</option>
              <option value="MS">Montserrat</option>
              <option value="MA">Marruecos</option>
              <option value="MZ">Mozambique</option>
              <option value="MM">Birmania</option>
              <option value="NA">Namibia</option>
              <option value="NR">Nauru</option>
              <option value="NP">Nepal</option>
              <option value="NL">Países Bajos</option>
              <option value="AN">Antillas Neerlandesas</option>
              <option value="NC">Nueva Caledonia</option>
              <option value="NZ">Nueva Zelanda</option>
              <option value="NI">Nicaragua</option>
              <option value="NE">Níger</option>
              <option value="NG">Nigeria</option>
              <option value="NU">Niue</option>
              <option value="NF">Isla Norfolk</option>
              <option value="MP">Islas Marianas del Norte</option>
              <option value="NO">Noruega</option>
              <option value="OM">Omán</option>
              <option value="PK">Pakistán</option>
              <option value="PW">Palaos</option>
              <option value="PS">Territorio Palestino Ocupado</option>
              <option value="PA">Panamá</option>
              <option value="PG">Papúa Nueva Guinea</option>
              <option value="PY">Paraguay</option>
              <option value="PE">Perú</option>
              <option value="PH">Filipinas</option>
              <option value="PN">Pitcairn</option>
              <option value="PL">Polonia</option>
              <option value="PT">Portugal</option>
              <option value="PR">Puerto Rico</option>
              <option value="QA">Catar</option>
              <option value="RE">Reunión</option>
              <option value="RO">Rumania</option>
              <option value="RU">Federación de Rusia</option>
              <option value="RW">Ruanda</option>
              <option value="SH">Santa Elena</option>
              <option value="KN">San Cristóbal y Nieves</option>
              <option value="LC">Santa Lucía</option>
              <option value="PM">San Pedro y Miquelón</option>
              <option value="VC">San Vicente y las Granadinas</option>
              <option value="WS">Samoa</option>
              <option value="SM">San Marino</option>
              <option value="ST">Santo Tomé y Príncipe</option>
              <option value="SA">Arabia Saudita</option>
              <option value="SN">Senegal</option>
              <option value="CS">Serbia y Montenegro</option>

            </select>
            <span className="formLine"></span>
          </div>
          <div className="formGroup">
            <input
              type="text"
              id="cargo"
              className="formInput"
              placeholder=" "
              onChange={(event) => {
                setCargo(event.target.value)
              }}
            />
            <label htmlFor="cargo" className="formLabel">
              Cargo:
            </label>
            <span className="formLine"></span>
          </div>
          <div className="formGroup">
            <input
              type="number"
              id="antiguedad"
              min="0"
              max="99"
              className="formInput"
              placeholder=" "
              onChange={(event) => {
                setAntiguedad(event.target.value)
              }}

            />
            <label htmlFor="antiguedad" className="formLabel">
              Antiguedad:
            </label>
            <span className="formLine"></span>
          </div>
          <input type="submit" className="formSubmit" value="Cargar Empleado" />
        </div>
      </form>
    </EmpleadoFormComponent>
  )
}

const EmpleadoFormComponent = styled.form`

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


export default EmpleadoForm;
