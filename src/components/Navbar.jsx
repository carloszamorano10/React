import CartWidget from "./CartWidget";

const Navbar = () => {    
    
    return ( <>
        <nav className="navbar navbar-expand-lg bg-body-secondary">
          <div className="container-fluid">
            <a className="navbar-brand fw-semibold fs-1" href="#">BICIADOS</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link px-2 fs-3" href="#">Productos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-2 fs-3" href="#">Contacto</a>
                </li>
                <li className="nav-item dropdown">
                   <a className="nav-link dropdown-toggle fs-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Categorias
                   </a>
                   <ul class="dropdown-menu">
                     <li><a className="dropdown-item fs-4" href="#">Ruedas</a></li>
                     <li><a className="dropdown-item fs-4" href="#">Cuadros</a></li>
                     <li><a className="dropdown-item fs-4" href="#">Componentes</a></li>
                     <li><a className="dropdown-item fs-4" href="#">Indumentaria</a></li>
                   </ul>
                 </li>
              </ul>
            </div>
              <CartWidget />  
          </div>
        </nav>

    </> );
}
 
export default Navbar;