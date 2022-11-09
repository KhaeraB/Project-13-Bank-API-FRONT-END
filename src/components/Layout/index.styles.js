import styled from "styled-components";
import { customTheme } from "../../constants";

 export const HeaderNavbar = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: space-between; 
    align-items:center; 
    padding: 5px 20px;
 `; 
 export const LogoImg = styled.img`
      max-width: 100%;
      width: 200px;
 `; 

 export const FooterContent = styled.footer`
 display: flex;
 justify-content: center;
 border-top: 2px solid ${customTheme.colors.neutral400};
 padding: 2rem 0 1.5rem;
`; 

export const FooterText = styled.p`
 margin: 0;
 padding: 0;
`; 
 
