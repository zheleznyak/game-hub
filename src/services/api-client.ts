import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[]
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'be96db2caac24edfaa6ac56d7175b9a0'
  }
})