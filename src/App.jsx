import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home';
import { LoginPage } from './pages/login';
import { NotFoundPage } from './pages/404';
import { RegisterPage } from './pages/register';
import { LoginLayout } from './components/Layout/Login';
import { ConfirmRegisterPage } from './pages/register/confirm';
import { AuthContextProvider } from './contexts/AuthContext';
import { AppLayout } from './components/Layout/App';
import { ForgetPasswordPage } from './pages/password/forget';
import { ResetPasswordPage } from './pages/password/reset';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>

          <Route element={<LoginLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/register/confirm" element={<ConfirmRegisterPage />} />
            <Route path="/password/forget" element={<ForgetPasswordPage />} />
            <Route path="/password/reset" element={<ResetPasswordPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
