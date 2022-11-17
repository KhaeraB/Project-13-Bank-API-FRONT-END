import styled from "styled-components"
import { Container } from "react-bootstrap"
import { customTheme } from "../../utils/style/variable"

export const ErrorContent =  styled(Container)`
    display:flex; 
    flex-direction: column; 
    justify-content: center;
    align-items: center; 
    height:750px; 
`
export const ErrorType =  styled.span`
    color: ${customTheme.colors.neutral200}
`