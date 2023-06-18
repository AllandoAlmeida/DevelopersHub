import logo from '../../../assets/Logo.svg';
import { StyledHeaderHome } from './styles';

export const HeaderHome = () =>{
    return(
        <StyledHeaderHome>
            <div>
                <img src={logo} alt="logo Kenzie Hub" />
            </div>
        </StyledHeaderHome>

    )
}