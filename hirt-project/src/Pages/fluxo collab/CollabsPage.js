import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../Constants/url";
import { useRequestData } from "../../Hooks/UseRequestData";
import { goToConcludedAp, goToInfoApPage, goToInfoPage } from "../../Routes/RouteFunctions";
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import CircularProgress from '@mui/material/CircularProgress';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Header } from "../../Constants/Header";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { CardObras, ContainerButton, ContainerGeral, ContainerGrid, ContainerText } from "../../Styled/StyledCollab/StyledCollab";
import { Button } from "@mui/material";

export default function CollabsPage() {

    useProtectedPage();
    const navigate = useNavigate();
    const { type, id } = useParams();
    const [obra_info, loading, erro] = useRequestData(`${BASE_URL}/apartments/constructions/all`);
    const obra = obra_info ? obra_info : 'carregando'
    console.log(obra_info)

    const expired = () => {
        if(obra_info === 'jwt expired'){
            localStorage.removeItem('token')
            
        }


    }

    expired()
    
   

    const listaObras = obra_info && obra_info.map((obra) => {
        return <CardObras >
            <ContainerText>
                <h4>{obra.nome_obra}</h4>
            </ContainerText>
            <ContainerButton>
                <InfoRoundedIcon fontSize="large" sx={{ color: '#1D2854ff' }} onClick={() => goToInfoPage(navigate, type, id, obra.id)} />
                <AddCircleIcon fontSize="large" sx={{ color: '#1D2854ff' }} onClick={() => goToConcludedAp(navigate, obra.id)} />
            </ContainerButton>
        </CardObras>
    });
    // console.log(obra_info)
    return (
        <ContainerGeral>
            <Header />

            <ContainerGrid>
                
                {/* {!loading && erro && <p>Deu ruim!</p>}
                {!loading && obra_info && obra_info.length > 0 && listaObras} */}

                {!obra_info ? "Você não possui apartamentos cadastrados" : listaObras}
            </ContainerGrid>
            {loading && loading &&
                <CircularProgress sx={{ color: '#4498C6ff' }} spacing={2} />}
        </ContainerGeral>
    )
};