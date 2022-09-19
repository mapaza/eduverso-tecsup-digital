import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Form } from './styles';
import { useForm } from 'react-hook-form'
import axios from 'axios'


const getCities = async () => {
  const url = '/api/ciudades';
  const { data } = await axios.get(url);

  return data;
};

function Contact({ onSubmit, textButton, ...props }) {

  const { register, handleSubmit, errors } = useForm();
  const [cities, setCities] = useState([]);
  // console.log(getValues());

  useEffect(() => {
    async function callApi() {
      const data = await getCities();
      setCities(data);
    }
    callApi();
  }, [])

  return (
    <Form {...props} onSubmit={handleSubmit(onSubmit)}>
      <div className="title">Contacto</div>
      {errors.nombres && <div className="error">
        Se debe completar todo los campos
      </div>}
      <div className="inline">
        <input ref={register({ required: true })} placeholder="Nombres" autoComplete="off" type="text" name="nombres" id="nombres" className="input" />
        <input ref={register({ required: true })} placeholder="Apellidos" autoComplete="off" type="text" name="apellidos" id="apellidos" className="input" />
      </div>
      <div className="inline">
        <select ref={register({ required: true })} placeholder="Ciudad" name="ciudad" id="ciudad" className="input">
          {cities.map((city) => (
            <option
              key={city.idCiudad}
              value={city.idCiudad}
            >
              {city.nombreCiudad}
            </option>
          ))}
        </select>
        <input ref={register({ required: true })} placeholder="Compañia" autoComplete="off" type="text" name="compania" id="compania" className="input" />
      </div>
      <div className="inline">
        <input ref={register({ required: true, value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, })} placeholder="Correo electrónico" autoComplete="off" type="email" name="email" id="email" className="input" />
      </div>

      <div className="inline">
        <input ref={register()} placeholder="Teléfono" autoComplete="off" type="text" name="telefono" id="telefono" className="input" />
      </div>
      <div className="checkboxes">
        <div className="checkbox">
          <input ref={register()} type="checkbox" name="telefono-verificacion" id="telefono-verificacion" />
          <label htmlFor="telefono-verificacion">
            Deseo que el equipo comercial se ponga en contacto conmigo
            </label>
        </div>
        <div className="checkbox">
          <input ref={register({ required: true })} type="checkbox" name="politicas-verificacion" id="policitcas-verificacion" />
          <label htmlFor="policitcas-verificacion">
            Acepto las Condiciones y Políticas de Privacidad
            </label>
        </div>
      </div>


      <button type="submit">
        <span>{textButton}</span>
        <div className="circle">
          <MdKeyboardArrowRight />
        </div>
      </button>
    </Form >
  );
}

export default Contact;
