import useFetch from '../../../../hooks/useFetch';
import Table from '../../../../components/Table/Table';

const ClientList = () => {
  const { clients, isLoading, error } = useFetch(
    'http://localhost:5000/api/clients'
  );

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Table data={clients} />
      )}
    </div>
  );
};

export default ClientList;
