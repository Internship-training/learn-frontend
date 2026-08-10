import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

function MainLayout() {
  return (
    <>
      <div className="max-w-[1920px] mx-auto">
        <header>
          <Header />
        </header>

        <main>
          <Outlet />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default MainLayout;
