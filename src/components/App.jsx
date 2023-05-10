import { LoginPage, DashboardPage } from 'pages';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
};
