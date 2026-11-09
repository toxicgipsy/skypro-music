import axios from 'axios';
import { BASE_URL } from '../constants';

type AuthUserProps = {
  email: string;
  password: string;
};

type AuthUserReturn = {
  email: string;
  password: string;
  _id: number;
};

const authUser = (data: AuthUserProps): Promise<AuthUserReturn> => {
  return axios
    .post(BASE_URL + '/user/login/', data, {
      headers: {
        'content-type': 'application/json',
      },
    })
    .then((respone) => {
      return respone.data.user;
    });
};

export default authUser;
