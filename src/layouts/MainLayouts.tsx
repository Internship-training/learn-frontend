import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";

function MainLayout() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>Footer</footer>
    </>
  );
}

export default MainLayout;