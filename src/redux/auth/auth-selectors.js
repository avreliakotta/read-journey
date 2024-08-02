export const selectIsUserLogin = state => state.users.isLogin;
export const selectUserToken = state => state.users.token;
export const selectLoading= state => state.users.loading;
export const selectUser = (state) => state.users.user;
export const selectError = (state) => state.users.error;

export const selectRefreshToken = (state) => state.users.refreshToken;