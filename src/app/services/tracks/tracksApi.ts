import axios from 'axios';
import { BASE_URL } from '../constants';
import { Track } from '@/sharedTypes/sharedTypes';

type Section = {
  _id: number;
  name?: string;
  items: number[];
  owner: number[];
  __v: number;
};

type SectionResponse = {
  success: boolean;
  data: Section | null;
};

type TrackResponse = {
  success: boolean;
  data: Track[];
};

export const getTracks = (): Promise<Track[]> => {
  return axios
    .get<TrackResponse>(BASE_URL + '/catalog/track/all')
    .then((response) => {
      return response.data.data;
    });
};

export const getSelection = (id: string): Promise<Section | null> => {
  return axios
    .get<SectionResponse>(BASE_URL + `/catalog/selection/${id}/`)
    .then((response) => {
      return response.data.data;
    });
};
