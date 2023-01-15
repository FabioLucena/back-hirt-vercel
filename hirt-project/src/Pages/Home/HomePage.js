import React from "react";
import logo from "../../images/logo-SF.png";
import styled from "styled-components"
import { goToAdminPage, goToCollabPage } from "../../Routes/RouteFunctions";
import { useNavigate } from "react-router-dom";

const ContainerGeral = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #66CDAA;
`
function HomePage() {

    const navigate = useNavigate();

    return (
        <ContainerGeral>
            <img src={logo} alt='logo' />
            <div>
                <button onClick={()=>goToAdminPage(navigate)}>Administrador</button>
                <button onClick={()=>goToCollabPage(navigate)}>Colaborador</button>
            </div>
        </ContainerGeral>
    )
}

export default HomePage;