import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
const Error = () =>{


    return (
        <Container className="d-flex align-items-center content">
            <h1>ERREUR <span className="brand">404</span></h1> 
            <h2>Oupps... votre compte bancaire n'est pas là </h2>
           <Link className='d-flex link-user' to={`/`} >
                               Retour à L'ACCUEIL
            </Link>
        </Container>
    )
}
export default Error