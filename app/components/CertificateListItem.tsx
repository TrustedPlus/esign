import * as React from "react";
import { connect } from "react-redux";
import { verifyCertificate } from "../AC";
import { CertificatesApp, certs_app } from "../module/certificates_app";
import { lang } from "../module/global_app";
import { sign, SignApp } from "../module/sign_app";

//declare const $: any;

interface ICertificateListItemProps {
  chooseCert: (event: any) => void;
  selectedCert: (event: any) => void;
  operation: string;
  isOpen: boolean;
  toggleOpen: () => void;
  cert: any;
}

class CertificateListItem extends React.Component<ICertificateListItemProps, ICertificateListItemProps> {
  constructor(props: ICertificateListItemProps) {
    super(props);
  }

  shouldComponentUpdate(nextProps: ICertificateListItemProps, nextState: ICertificateListItemProps) {
    return nextProps.isOpen !== this.props.isOpen ||
           nextProps.cert.verified !== this.props.cert.verified;
  }

  stopEvent = (event: any) => {
    event.stopPropagation();
  }

  addCertKey = () => {
    const CLICK_EVENT = document.createEvent("MouseEvents");

    CLICK_EVENT.initEvent("click", true, true);
    document.querySelector("#cert-key-import").dispatchEvent(CLICK_EVENT);
  }

  activeCert() {
    const { cert, isOpen } = this.props;
    if (isOpen) {
      certs_app.set_certificate_for_info = cert;
      if (this.props.operation === "sign") {
        sign.set_certificate_for_info = cert;
      }
    }
  }

  componentDidMount() {
    this.checkAndVerify(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.checkAndVerify(nextProps);
  }

  checkAndVerify({ cert, verifyCertificate }) {
    if (!cert.verified) {
      verifyCertificate(cert.id);
    }
  }

  render() {
    const { cert, chooseCert, operation, selectedCert, toggleOpen, isOpen } = this.props;
    let certKeyMenu: any = null;
    let active = "";
    let doubleClick: (event: any) => void;

    let status: string;
    if (cert.status) {
      status = "status_cert_ok_icon";
    } else {
      status = "status_cert_fail_icon";
    }

    if (isOpen) {
      active = "active";
    }
    if (operation === "certificate" && cert.key.length === 0 && cert.provider === "SYSTEM") {
      certKeyMenu = <div key={"i" + "_" + cert.key.toString()}>
        <i className="cert-setting-item waves-effect material-icons secondary-content"
          data-activates={"cert-key-set-file-" + cert.key} onClick={this.stopEvent}>more_vert</i>
        <ul id={"cert-key-set-file-" + cert.key} className="dropdown-content">
          <li><a onClick={this.addCertKey}>{lang.get_resource.Certificate.import_key}</a></li>
        </ul>
      </div>;
    } else {
      certKeyMenu = "";
    }

    if (operation === "sign") {
      doubleClick = selectedCert;
    }

    return <div key={cert.id.toString()} className={"collection-item avatar certs-collection " + active}
      onClick={toggleOpen}
      onDoubleClick={doubleClick}>
      <div className="r-iconbox-link">
        <div className="r-iconbox-cert-icon"><i className={status} id="cert-status"></i></div>
        <p className="collection-title">{cert.subjectFriendlyName}</p>
        <p className="collection-info cert-info">{cert.issuerFriendlyName}</p>
      </div>
      {certKeyMenu}
      {this.activeCert()}
    </div>;
  }
}

export default connect(null, { verifyCertificate })(CertificateListItem);
