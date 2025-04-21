import { Route, Routes } from 'react-router-dom';
import './global.css';
import SignInForm from './_auth/form/SignInForm';
import { Home } from './_root/pages';
import SignupForm from './_auth/form/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/pages/RootLayout';

const App = () => {
  <main>
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path='/sign-in' element={<SignInForm />} />
        <Route path='/sign-up' element={<SignupForm />} />
      </Route>

      {/* private route */}
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </main>;
};

export default App;
