import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <div className="logo-text">Dinis Costa</div>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/autenticacao">
                        AUTENTICAÇÃO
                    </Link>
                    <Link className="nav-link" to="/sobre">
                        SOBRE MIM
                    </Link>
                    <Link className="nav-link" to="/servicos">
                        SERVIÇOS
                    </Link>
                    <Link className="nav-link" to="/servicos">
                        CONTATO
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;