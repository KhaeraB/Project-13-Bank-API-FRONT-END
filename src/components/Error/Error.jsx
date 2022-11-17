import React from "react";
import { Link } from "react-router-dom";
import {FaSignOutAlt} from "react-icons/fa";
import { ErrorContent, ErrorType } from "./index.styles";

export const Error = () => {
  return (
    <ErrorContent>
      <h1>
        ERREUR <ErrorType>404</ErrorType>
      </h1>
      <h2>Oupps... Votre compte bancaire n'est pas là.</h2>
      <Link className="link-user" to={`/`}>
        <FaSignOutAlt/>  Retour à L'ACCUEIL
      </Link>
    </ErrorContent>
  );
}
