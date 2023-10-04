import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

import './App.css';

function App() {

  const navs = [
    {
      to: "/",
      page: "Homepage",
    },
    {
      to: "/about",
      page: "About",
    },
    {
      to: "/menu",
      page: "Menu",
    },
    {
      to: "/reservations",
      page: "Reservations",
    },
    {
      to: "/order",
      page: "Order Online",
    },
    {
      to: "/login",
      page: "Login",
    },
  ];

  return (
    <>
      <Header navs={navs} />
      <Main />
      <Footer navs={navs}/>
    </>
  );
}

export default App;
