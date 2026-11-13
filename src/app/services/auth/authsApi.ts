import axios from 'axios';
import { BASE_URL } from '../constants';

type AuthUserProps = {
  email: string;
  password: string;
};

type AuthUserReturn = {
  email: string;
  username: string;
  _id: number;
};

type RegisterUserProps = {
  email: string;
  username: string;
  password: string;
};

type RegisterUserReturn = {
  message: string;
  result: AuthUserReturn;
  success: boolean;
};

type Tokens = {
  access: string;
  refresh: string;
};

export const authUser = (data: AuthUserProps): Promise<AuthUserReturn> => {
  return axios
    .post<AuthUserReturn>(BASE_URL + '/user/login/', data, {
      headers: {
        'content-type': 'application/json',
      },
    })
    .then((respone) => {
      return respone.data;
    });
};

export const getTokens = (data: AuthUserProps): Promise<Tokens> => {
  return axios
    .post<Tokens>(BASE_URL + '/user/token/', data, {
      headers: {
        'content-type': 'application/json',
      },
    })
    .then((respone) => {
      return respone.data;
    });
};

export const registerUser = (
  data: RegisterUserProps,
): Promise<RegisterUserReturn> => {
  return axios
    .post<RegisterUserReturn>(BASE_URL + '/user/signup/', data, {
      headers: {
        'content-type': 'application/json',
      },
    })
    .then((respone) => {
      return respone.data;
    });
};
