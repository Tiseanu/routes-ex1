import { Fragment } from "react";
import MainNavigation from './MainNavigation';
import "./Layout.module.css";

const Layout = (props) => {
    return (
        <Fragment>
            <MainNavigation />
            <main>{props.children}</main>
        </Fragment>
    );
}
export default Layout;