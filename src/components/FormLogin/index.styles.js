import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 1rem;
    input{
        padding: 5px;
        font-size: 1.2rem;
    }
`; 

export const InputRemember = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;
    margin-bottom: 1rem;
    align-content: center;
    label{
        margin-left: 0.25rem;
    }
`; 

export const Label = styled.label`
    font-weight: bold;
`; 


export const SignInButton = styled(NavLink)`
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    
`