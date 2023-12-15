import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main>
      {/* 공통 레이아웃 */}
      <header>헤더</header>

      {/* 렌더링 될 페이지 */}
      <Outlet />
    </main>
  );
};

export default Layout;
