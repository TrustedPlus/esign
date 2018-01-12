import PropTypes from "prop-types";
import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { loadAllCertificates, loadLicense, verifyLicense } from "../../AC";
import {
  BUG, ERROR_CHECK_CSP_LICENSE, ERROR_CHECK_CSP_PARAMS,
  ERROR_LOAD_TRUSTED_CRYPTO, NO_CORRECT_CRYPTOARM_LICENSE, NO_CRYPTOARM_LICENSE,
  NO_GOST_2001, NO_HAVE_CERTIFICATES_WITH_KEY, NOT_INSTALLED_CSP, WARNING,
} from "../../errors";
import { filteredCertificatesSelector } from "../../selectors";
import DiagnosticModal from "../Diagnostic/DiagnosticModal";
import Problems from "../Diagnostic/Problems";
import Resolve from "../Diagnostic/Resolve";

interface IError {
  important?: string;
  type: string;
}

interface IDiagnosticState {
  activeError: string;
  criticalError: boolean;
  errors: IError[];
}

class Diagnostic extends React.Component<any, IDiagnosticState> {
  static contextTypes = {
    locale: PropTypes.string,
    localize: PropTypes.func,
  };

  constructor(props: any) {
    super(props);
    this.state = ({
      activeError: "",
      criticalError: false,
      errors: [],
    });
  }

  checkCPCSP = () => {
    const { localize, locale } = this.context;

    try {
      if (!trusted.utils.Csp.isGost2001CSPAvailable()) {
        $(".toast-noProvider2001").remove();
        Materialize.toast(localize("Csp.noProvider2001", locale), 5000, "toast-noProvider2001");

        this.setState({
          errors: [...this.state.errors, {
            important: BUG,
            type: NO_GOST_2001,
          }],
        });
        this.setState({ criticalError: true});
        return false;
      }

      if (!trusted.utils.Csp.checkCPCSPLicense()) {
        $(".toast-noCPLicense").remove();
        Materialize.toast(localize("Csp.noCPLicense", locale), 5000, "toast-noCPLicense");

        this.setState({
          errors: [...this.state.errors, {
            important: WARNING,
            type: ERROR_CHECK_CSP_LICENSE,
          }],
        });

        return false;
      }
    } catch (e) {
      $(".toast-cspErr").remove();
      Materialize.toast(localize("Csp.cspErr", locale), 2000, "toast-cspErr");

      this.setState({
        errors: [...this.state.errors, {
          type: ERROR_CHECK_CSP_PARAMS,
        }],
      });

      this.setState({ criticalError: true });

      return false;
    }

    return true;
  }

  checkTrustedCryptoLoadedErr = () => {
    const { localize, locale } = this.context;

    if (window.tcerr) {
      if (window.tcerr.message) {
        if (~window.tcerr.message.indexOf("libcapi")) {
          this.setState({
            errors: [...this.state.errors, {
              important: BUG,
              type: NOT_INSTALLED_CSP,
            }],
          });

          this.setState({ criticalError: true });

          return false;
        }
      }

      this.setState({
        errors: [...this.state.errors, {
          important: BUG,
          type: ERROR_LOAD_TRUSTED_CRYPTO,
        }],
      });

      this.setState({ criticalError: true });

      return false;
    }

    return true;
  }

  componentWillReceiveProps(nextProps: any) {
    const { localize, locale } = this.context;
    const { certificates, certificatesLoaded, dataLicense, loadedLicense, loadingLicense, statusLicense, verifiedLicense } = this.props;
    // tslint:disable-next-line:no-shadowed-variable
    const { verifyLicense } = this.props;

    if (loadedLicense !== nextProps.loadedLicense && !nextProps.dataLicense) {
      this.setState({
        errors: [...this.state.errors, {
          important: WARNING,
          type: NO_CRYPTOARM_LICENSE,
        }],
      });
    }

    if (!verifiedLicense && !nextProps.verifiedLicense && nextProps.loadedLicense && nextProps.dataLicense) {
      verifyLicense(nextProps.dataLicense);
    }

    if (verifiedLicense !== nextProps.verifiedLicense && nextProps.statusLicense > 0) {
      this.setState({
        errors: [...this.state.errors, {
          important: WARNING,
          type: NO_CORRECT_CRYPTOARM_LICENSE,
        }],
      });
    }

    if (certificatesLoaded === false && nextProps.certificatesLoaded && (nextProps.certificates.length < 2)) {
      this.setState({
        errors: [...this.state.errors, {
          important: WARNING,
          type: NO_HAVE_CERTIFICATES_WITH_KEY,
        }],
      });
    }
  }

  componentDidMount() {
    const { localize, locale } = this.context;
    const { certificates, certificatesLoading, certificatesLoaded, loadedLicense, loadingLicense } = this.props;
    // tslint:disable-next-line:no-shadowed-variable
    const { loadAllCertificates, loadLicense } = this.props;

    if (this.checkTrustedCryptoLoadedErr()) {
      this.checkCPCSP();
    }

    if (!loadedLicense && !loadingLicense) {
      loadLicense();
    }

    if (!certificatesLoading) {
      loadAllCertificates();
    }
  }

  getCloseButton() {
    const { localize, locale } = this.context;
    const { activeError, criticalError, errors } = this.state;

    if (!criticalError && activeError === NO_HAVE_CERTIFICATES_WITH_KEY) {
      return (
        <Link to={"/containers"}>
          <div className="contain-btn">
            <a className="waves-effect waves-light btn modal-close">{localize("Common.goOver", locale)}</a>
          </div>
        </Link>
      );
    } else {
      return (
        <div className="contain-btn">
          <a className="waves-effect waves-light btn modal-close" onClick={this.handleMaybeCloseApp}>{localize("Diagnostic.close", locale)}</a>
        </div>
      );
    }
  }

  showModalWithError = () => {
    const { localize, locale } = this.context;
    const { errors } = this.state;

    if (!errors || !errors.length) {
      return null;
    } else if (!this.state.activeError) {
      this.setState({ activeError: errors[0].type });
    }

    return (
      <DiagnosticModal
        isOpen={true}
        header={localize("Diagnostic.header", locale)}
        onClose={this.handleMaybeCloseApp}>
        <div className="main">
          <div className="row">
            <div className={"diagnostic-content-item"}>
              <div className="col s6 m5 l6 problem-contaner">
                <Problems errors={errors} activeError={this.state.activeError} onClick={this.handleClickOnError} />
              </div>
              <div className="col s6 m7 l6 problem-contaner">
                <Resolve activeError={this.state.activeError} />
              </div>

            </div>
            <div className="row">
              {this.getCloseButton()}
            </div>
          </div>
        </div>
      </DiagnosticModal>
    );
  }

  handleClickOnError = (error: string) => {
    this.setState({ activeError: error });
  }

  handleMaybeCloseApp = () => {
    const { criticalError } = this.state;

    if (criticalError) {
      mainWindow.close();
    }
  }

  render() {
    return (
      <div className="main">
        {this.showModalWithError()}
      </div>
    );
  }
}

export default connect((state) => {
  return {
    certificates: filteredCertificatesSelector(state, { operation: "sign" }),
    certificatesLoaded: state.certificates.loaded,
    certificatesLoading: state.certificates.loading,
    dataLicense: state.license.data,
    loadedLicense: state.license.loaded,
    loadingLicense: state.license.loading,
    statusLicense: state.license.status,
    verifiedLicense: state.license.verified,
  };
}, { loadAllCertificates, loadLicense, verifyLicense })(Diagnostic);