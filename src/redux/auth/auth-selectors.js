export const selectIsUserLogin = state => state.auth.isLogin;
export const selectUserToken = state => state.auth.token;
export const selectLoading= state => state.auth.loading;
export const selectUser = (state) => state.auth.user;
export const selectError = (state) => state.auth.error;
export const selectToken = (state) => state.auth.token;
export const selectRefreshToken = (state) => state.auth.refreshToken;