import axios from 'axios';
import { BASE_URL } from '../constants';

type authUserProps = {
  email: string;
  password: string;
};

type authUsereturn = {
  email: string;
  password: string;
  _id: number;
};

const authUser = (data: authUserProps): Promise<authUsereturn> => {
  return axios.post(BASE_URL + '/user/login/', data, {
    headers: {
      'content-type': 'application/json',
    },
  });
};

export default authUser;
