import React, { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Layout from './components/Layout';

interface RouteItem {
  path: string;
  children: ReactElement;
}

const PAGE_LIST: RouteItem[] = [
  {
    path: '/',
    children: <Login />,
  },
  {
    path: '/home',
    children: <Home />,
  },
];

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {PAGE_LIST.map(({ path, children }) => (
          <Route key={path} path={path} element={children}></Route>
        ))}
      </Route>
    </Routes>
  );
}

export default AppRoute;
