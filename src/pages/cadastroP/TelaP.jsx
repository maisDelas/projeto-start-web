// App.js
import React from "react";
// import EU from "./Header.jsx";
import RegistrationFrm from './RegistrationFrm.jsx';


import EU from "./Header.jsx";
import GlobalStyle from "./GlobalStyle.jsx";

function Cadastro1() {
  return (
    <>
      <GlobalStyle />
      <EU />
      <main>
        <RegistrationFrm />
      </main>
    </>
  );
}

export default Cadastro1;
