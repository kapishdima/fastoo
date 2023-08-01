import axios from 'axios';

export const sendApplication = async (values) => {
  const { data } = axios.post('https://fastoomerchant.com/add.php', { values });

  console.log(data);
};
