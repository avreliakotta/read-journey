import axios from 'axios';
const baseURL= "https://readjourney.b.goit.study/api";
const instance=axios.create({
    baseURL: `${baseURL}`,
    headers: {
      'Content-Type': 'application/json',
    },
});
export const setToken = token => {
	instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
	instance.defaults.headers.common.Authorization = "";
};
export default instance;