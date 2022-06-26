import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from '../../context/user.context';
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import './navigation.styles.scss';

const Navigation = () => {

    const { currentUser } = useContext(UserContext);

    const { isCartOpen } = useContext(CartContext);

    const signOutHandler = async () => {
        await signOutUser();
    }

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <div className="logo-text">Dinis Costa</div>
                </Link>
                <div className="nav-links-container">
                    {
                        currentUser ? (
                            <Link className="nav-link" to="/" onClick={signOutHandler}>SAIR</Link>
                        ) : (
                            <Link className="nav-link" to="/autenticacao">
                                AUTENTICAÇÃO
                            </Link>
                        )
                    }
                    <Link className="nav-link" to="/sobre">
                        SOBRE MIM
                    </Link>
                    <Link className="nav-link" to="/servicos">
                        SERVIÇOS
                    </Link>
                    <Link className="nav-link" to="/contato">
                        CONTATO
                    </Link>
                    <CartIcon />
                </div>   
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;