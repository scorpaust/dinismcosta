import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { selectCurrentUser } from "../../store/user/user.selector";
import { NavigationContainer, NavLinksContainer, NavLink, LogoContainer, LogoText } from './navigation.styles';

const Navigation = () => {

    const currentUser = useSelector(selectCurrentUser);

    const isCartOpen = useSelector(selectIsCartOpen);

    const signOutHandler = async () => {
        await signOutUser();
    }

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <LogoText>Dinis Costa</LogoText>
                </LogoContainer>
                <NavLinksContainer>
                    {
                        currentUser ? (
                            <NavLink to="/" onClick={signOutHandler}>SAIR</NavLink>
                        ) : (
                            <NavLink to="/autenticacao">
                                AUTENTICAÇÃO
                            </NavLink>
                        )
                    }
                    {/* <NavLink to="/sobre">
                        SOBRE MIM
                    </NavLink> */}
                    <NavLink to="/servicos">
                        SERVIÇOS
                    </NavLink>
                    {/* <NavLink to="/contato">
                        CONTATO
                    </NavLink> */}
                    <CartIcon />
                </NavLinksContainer>   
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;