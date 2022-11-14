import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
    return (
        <header>
            <div className={classes.logo}>QTS</div>
            <nav>
                <ul>
                    <li><NavLink to="/quotes" activeClassName={classes.active}>Homepage</NavLink></li>
                    <li><NavLink to="/add-quote" activeClassName={classes.active}>Add Quote</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}
export default MainNavigation;