import axios from 'axios';
import { useState, useEffect } from 'react';
import Table from '../../../../components/Table/Table';

const ClientList = () => {
  const [clients, setClients] = useState('');

  useEffect(() => {
    const getClients = () => {
      axios
        .get('http://localhost:5000/api/clients')
        .then((res) => {
          const clients = res.data;
          setClients(clients);
          console.log('Clients received');
        })
        .catch(() => {
          console.log('Error');
        });
    };
    getClients();
  }, [setClients]);

  return <div>{clients && <Table data={clients} />}</div>;
};

export default ClientList;
