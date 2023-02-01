import { Outlet } from "react-router-dom"
import { Fragment,useContext } from "react"
import {ReactComponent as Logo} from "../../assets/logo.svg"
import { signOutUser } from "../../utils/firebase/FirebaseUtils"

import { UserContext } from "../../context/UserContext"
import { CartContext } from "../../context/CartContext"

import CartIcon from "../../component/cart-icon/CartIcon"
import CartDropdown from "../../component/cart-dropdown/CartDropdown"

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./Navigation.styles"

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Logo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
