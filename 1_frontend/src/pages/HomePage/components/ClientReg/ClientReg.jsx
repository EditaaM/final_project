import React from 'react';

const ClientReg = () => {
  return (
    <section>
      <h3>Register a new client</h3>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" />
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <input type="text" id="time" />
        </div>

        <div>
          <input type="submit" value="Register" />
        </div>
      </form>
    </section>
  );
};

export default ClientReg;
