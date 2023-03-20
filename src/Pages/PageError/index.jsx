import "./errorStyles.css";

import { Link } from "react-router-dom";

export default function PageError() {
  return (
    <div className="pageError">
      <h2>Pagina não encontrada 😕</h2>
      <Link to="/">Volte a Pagina inicial</Link>
    </div>
  );
}
