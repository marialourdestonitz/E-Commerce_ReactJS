import { Outlet,Link } from "react-router-dom"
import { Fragment } from "react"
import {ReactComponent as Shoplogo} from "../../assets/eshop.svg"

import "./Navigation.styles.scss"

const Navigation = () => {
  return (
    <Fragment>
    <div className="navigation">
    <Link className="logo-container" to="/">
    <Shoplogo className="logo"/>
    </Link>

    <div className="nav-links-container">
    <Link className="nav-link" to="/shop">
      Shop
    </Link>
    <Link className="nav-link" to="/auth">
      SIGN IN
    </Link>
    </div>

    </div>

    <Outlet/>
    </Fragment>
  );
}

export default Navigation
