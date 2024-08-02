import instance, { setToken, clearToken } from "../../instance/instance";

export const signup = async (credentials) => {
  try {
    const { data } = await instance.post("/users/signup", credentials);
    if (data.token) {
    setToken(data.token);
    }
    return data;
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};

export const signin = async (credentials) => {
  const { data } = await instance.post("/users/signin", credentials);
  if (data.token) {
    setToken(data.token);
    }
  return data;
};

export const logoutUser = async () => {
  try {
    
    const { data } = await instance.post("/users/signout");
    console.log("Logout successful:", data);
    clearToken();
    console.log(
      "Token after clearing:",
      instance.defaults.headers.common.Authorization
    );
    return data;
  } catch (error) {
    console.error("Logout error:", error);
    throw error;
  }
};

export const getCurrentUser = async (token) => {
  try {
    setToken(token);
    const { data } = await instance.get("/users/current");
    return data;
  } catch (error) {
    // clearToken();
    throw new Error(error.message);
      
    }
  }



