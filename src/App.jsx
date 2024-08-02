import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RecommendedPage from "../src/pages/RecommendedPage/RecommendedPage";
import MyLibraryPage from "../src/pages/MyLibraryPage/MyLibraryPage";
import { Toaster, toast } from "react-hot-toast";
import { current} from "./redux/auth/auth-thunk";
import MainLayout from "./pages/MainLayout/MainLayout";
import {
  selectLoading,
  // selectError,
  selectIsUserLogin,
  // selectUserToken
} from "./redux/auth/auth-selectors";
import PrivateRoute from "../src/components/PrivateRouter/PrivateRoute";
import PublicRoute from "../src/components/PublicRoute/PublicRoute";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  const isAuth = useSelector(selectIsUserLogin);
  // const token=useSelector(selectUserToken);
  useEffect(() => {
  
    dispatch(current());

  }, [dispatch]);
 

  if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Toaster />
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegistrationPage />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route
          path="/"
          element={isAuth ? <MainLayout /> : <RegistrationPage />}
        >
          <Route element={<PrivateRoute />}>
            <Route path="/recommended" element={<RecommendedPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/library" element={<MyLibraryPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
