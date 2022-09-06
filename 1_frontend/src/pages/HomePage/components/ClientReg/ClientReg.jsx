import { useState } from 'react';
import axios from 'axios';

const ClientReg = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const validateForm = () => {
    const { name, email, date, time } = form;
    const newError = {};

    if (!name || name === '') newError.name = 'Enter client name';
    if (!email || email === '') newError.email = 'Enter client email';
    if (!date || date === '') newError.date = 'Enter visitation date';
    if (!time || time === '') newError.time = 'Select visitation time';

    return newError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log('Form submited');

      const newClient = {
        name: form.name,
        email: form.email,
        date: form.date,
        time: form.time,
      };

      axios.post('http://localhost:5000/api/clients', newClient);
    }
  };

  return (
    <section>
      <h3>Register a new client</h3>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={form.name}
            onChange={(e) => setField('name', e.target.value)}
          />
          <span>{errors.name}</span>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={form.email}
            onChange={(e) => setField('email', e.target.value)}
          />
          <span>{errors.email}</span>
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={form.date}
            onChange={(e) => setField('date', e.target.value)}
          />
          <span>{errors.date}</span>
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <select
            id="time"
            autoComplete="off"
            value={form.time}
            onChange={(e) => setField('time', e.target.value)}
          >
            <option value="default">Select time</option>
            <option value="8:00">8:00</option>
            <option value="8:30">8:30</option>
            <option value="9:00">9:00</option>
            <option value="9:30">9:30</option>
            <option value="10:00">10:00</option>
          </select>
          <span>{errors.time}</span>
        </div>

        <div>
          <button onClick={handleSubmit}>Register</button>
        </div>
      </form>
    </section>
  );
};

export default ClientReg;
