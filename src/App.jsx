import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { Toaster, toast } from "react-hot-toast";
import { current, refreshAuthToken } from "./redux/auth/auth-thunk";

import { selectLoading, selectError } from "./redux/auth/auth-selectors";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        await dispatch(current()).unwrap();
      } catch (e) {
        if (e.response?.status === 401) {
          try {
            await dispatch(refreshAuthToken()).unwrap();

            await dispatch(fetchCurrentUser()).unwrap();
          } catch (refreshError) {
            console.error("Failed to refresh token:", refreshError);
            toast.error("Failed to refresh token. Please log in again.");
          }
        } else {
          console.error("Failed to fetch current user:", e);
        }
      }
    };

    initializeAuth();
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
