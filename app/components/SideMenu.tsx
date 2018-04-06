import PropTypes from "prop-types";
import * as React from "react";
import { Link } from "react-router-dom";

const remote = window.electron.remote;

class SideMenu extends React.Component<{}, {}> {
  static contextTypes = {
    locale: PropTypes.string,
    localize: PropTypes.func,
  };

  shouldComponentUpdate(nextProps: {}, nextState: {}, nextContext: { locale: string }) {
    return (this.context.locale !== nextContext.locale) ? true : false;
  }

  render() {
    const { localize, locale } = this.context;

    return (
      <div>
        <nav className="menu-logo">
          <div className="center">
            <Link to="/" className="menuheaderlink" href="/">
              <i className="logo-trusted" />
              <div className="logo-text">
                {localize("About.product_NAME", locale)}
              </div>
            </Link>
          </div>
        </nav>
        <div className="row">
          <Link to="/sign">
            {localize("Sign.Sign", locale)}
            <i className="material-icons left sign">mode_edit</i>
          </Link>
          <Link to="/encrypt">
            {localize("Encrypt.Encrypt", locale)}
            <i className="material-icons left encrypt">enhanced_encryption</i>
          </Link>

          <Link to="/certificate">
            {localize("Certificate.Certificate", locale)}
            <i className="material-icons left cert">library_books</i>
          </Link>

          <Link to="/containers">
            {localize("Containers.containers", locale)}
            <i className="material-icons left keystore">library_books</i>
          </Link>
        </div>
        <div className="row">
          <div className="menu-elements">
            <div className="row">
              <Link className={"bordered--top"} to="/about">
                {localize("About.About", locale)}
                <i className="material-icons left about">about</i>
              </Link>
              <Link to="/license">
                {localize("License.License", locale)}
                <i className="material-icons left license">license</i>
              </Link>
              <Link to="/help">
                {localize("Help.Help", locale)}
                <i className="material-icons left help">help</i>
              </Link>
              <Link to="/" onClick={() => remote.getCurrentWindow().close()}>
                {localize("Common.exit", locale)}
                <i className="material-icons left exit">exit_to_app</i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideMenu;
