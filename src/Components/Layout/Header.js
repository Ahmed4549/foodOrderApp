import { Fragment } from "react"
import MeadImg from '../Assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton"

const Header = (props) => {
    return (
        <Fragment>
        <header className={classes.header}>
            <h1>SnackHack</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes[`main-image`]}>
            <img src={MeadImg} alt="Meal Img Here" />
        </div>
        </Fragment>
    )
}

export default Header
