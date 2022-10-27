import styled from "styled-components";
import { customTheme } from "../../constants";

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