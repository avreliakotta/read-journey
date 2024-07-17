import instance from "../../instance/instance";
import {setToken, clearToken} from "../../instance/instance";

 export const signup=async(credentials)=>{
    const{data}=await instance.post("/users/signup",credentials);
    setToken(data.token);
    return data;
 }

 export const signin=async(credentials)=>{
    const{data}=await instance.post("/users/signin", credentials);
    setToken(data.token);
    return data;
 }
 export  const logoutUser=async()=>{
    const{data}= await instance.post("/users/signout");
    clearToken();
    return(data);
 }


export const getCurrentUser = async (token, refreshToken) => {
    try {
        setToken(token);
        const { data } = await instance.get('/users/current');
        return data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            // Если access token истек, обновляем его с помощью refresh token
            const newTokens = await refreshToken(refreshToken);
            setToken(newTokens.accessToken);
            // Повторяем запрос с новым токеном
            const { data } = await instance.get('/users/current');
            return data;
        } else {
            console.error("Failed to fetch current user data:", error);
            throw error;
        }
    }
};
export const refreshToken = async (refreshToken) => {
    try {
        const { data } = await instance.get('/users/current/refresh', {
            headers: {
                'Authorization': `Bearer ${refreshToken}`
            }
        });
        return {accessToken:data.token,
                refreshToken:data.refreshToken};
    } catch (error) {
        console.error("Failed to refresh token:", error);
        throw error;
    }
};

  