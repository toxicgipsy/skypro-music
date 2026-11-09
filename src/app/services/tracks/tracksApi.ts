import axios from 'axios';
import { BASE_URL } from '../constants';
import { Track } from '@/sharedTypes/sharedTypes';

const getTracks = (): Promise<Track[]> => {
  return axios(BASE_URL + '/catalog/track/all').then((response) => {
    return response.data.data;
  });
};

export default getTracks;
