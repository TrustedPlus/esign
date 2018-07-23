export default {
  Agreement: {
    agreement: "Agreement",
    Agreement: "AGREEMENT",
  },
  Certificate: {
    Certificate: "CERTIFICATES",
    FCertificates: "MANAGMENT",
    certificate: "A certificate",
    certs: "Certificates",
    delete_certificate: "Delete certificate",
    realy_delete_certificate: "You really want delete certificate?",
    key_import_ok: "The key is attached to the certificate",
    key_import_failed: "Key import failed",
    cert_info: "Certificate information",
    cert: "Certificates",
    cert_not_found: "The certificate is not found",
    cert_not_select: "A certificate is not selected",
    Select_Cert_Sign: "SELECT THE SIGNATURE CERTIFICATE",
    cert_chain: "Certificate hierarchy",
    serialNumber: "Serial number",
    thumbprint: "Thumbprint",
    version: "Version",
    subject: "Certificate owner",
    organization: "Organization",
    issuer: "Certificate Authority",
    cert_valid: "Is valid until",
    import_key: "Import the key",
    priv_key: "Private key",
    issuer_name: "Issuer",
    signature_digest_algorithm: "Signature digest algorithm",
    public_key_algorithm: "Public key algorithm",
    present: "Private key is present",
    absent: "Private key is absent",
    cert_status_true: "valid",
    cert_status_false: "not valid",
    cert_chain_status: "Certificate chain status",
    cert_chain_info: "Certificate chain info",
    cert_chain_status_true: "valid",
    cert_chain_status_false: "not valid",
    cert_export: "Export the certificate",
    export_cert: "Export the certificate",
    cert_export_ok: "The certificate is successfully exported",
    cert_export_cancel: "Cancel the certificate export",
    cert_export_failed: "The certificate export failed",
    cert_import_ok: "The certificate is successfully imported",
    cert_import_failed: "The certificate import failed",
    cert_trusted_import_ok: "The trusted certificate is successfully imported",
    cert_trusted_import_failed: "The trusted certificate import failed",
    cert_delete_ok: "The certificate is successfully deleted",
    cert_delete_failed: "The certificate delete failed",
    cert_load_failed: "The certificate file cannot be read",
    cert_import: "Import the certificate",
    Select_Cert_Encrypt: "SELECT THE RECIPIENT'S CERTIFICATE",
    certs_encrypt: "Encryption certificates",
    certs_getters: "The recipients' certificates",
    cert_imported: "The certificate is already imported",
    certs_my: "Personal Certificates",
    certs_other: "Other user certificates",
    certs_intermediate: "Intermediate certificates",
    certs_root: "Trusted Root Certificates",
    certs_token: "External token/card certificates",
  },
  Documents: {
    Documents: "DOCUMENTS",
    date: "Date",
    documents: "Documents",
    encrypted_files: "Encrypted files",
    filename: "Filename",
    filesize: "Size",
    filesize_from: "File size from",
    filesize_to: "File size to",
    go_to_documents_folder: "Go to folder",
    mdate: "Modified date",
    selected_all: "Selected all",
    signed_files: "Signed files",
    type: "Type",
    docmenu_sign:"Sign",
    docmenu_verifysign:"Verify sign",
    docmenu_removesign:"Remove sign",
    docmenu_enctypt:"Encrypt",
    docmenu_dectypt:"Decrypt",
    docmenu_arhiver:"Arhiver",
    docmenu_remove:"Remove",
    documents_deleted1: "Removed documents ( files: ",
    documents_deleted2: " )",
    documents_arhive: "Create arhive of documents is name ",
  },
  Events: {
    Operations_log: "OPERATIONS LOG",
    operations_log: "Operations log",
  },
  EventsFilters: {
    all: "All",
    certificate_generation: "Certificate generation",
    certificate_import: "Certificate import",
    date: "Date",
    decrypt: "Decrypt",
    delete_certificate: "Remove certificate",
    delete_container: "Remove container",
    encrypt: "Encrypt",
    level_all: "All",
    level_error: "Error",
    level_info: "Info",
    no_found_events: "No found events",
    pkcs12_import: "Import PKCS12",
    sign: "Sign",
    unsign: "Unsign",
    write_object_for_filter: "Write object for filter",
    write_user_name: "Write user name",
  },
  EventsTable: {
    date_and_time: "Date and time",
    goto_current_logfile: "Go to the current log",
    load_archive_logfile: "Load archive operations log",
    no_rows: "No rows",
    operation: "Operation",
    operation_object: "Operation object",
    operation_result: "Operation result",
    search_in_table: "Search in operations log",
    search_in_doclist: "Search in documents list",
    status: "Status",
    user_name: "User",
  },
  Export: {
    export: "Export",
    export_certificate: "Export certificate",
    export_format: "Export file format",
    export_format_pkcs12: "Personal information exchange PKCS#12 (PFX)",
    export_format_der: "DER encoded binary X509 (.CER)",
    export_format_base64: "Base-64 encoded X509 (.CER)",
    export_private_key: "Export private key",
    no_export_private_key: "No export private key",
    export_private_key_with_certificate: "Export the private key with the certificate",
    export_params: "Export parameters",
    export_set_password: "Protect the private key by using a password",
    export_set_encoding: "Choose encoding for use in output file",
  },
  Filters: {
    filters_settings: "Filters settings",
  },
  Containers: {
    containers: "Containers",
    Containers: "CONTAINERS",
    containersNotFound: "Containers not found",
    container_delete_ok: "The container is successfully deleted",
    container_delete_failed: "The container delete failed",
    certificateInfo: "Certificate information",
    contNotSelected: "Container not selected",
    delete_container: "delete container by certificate (not recomended)",
    installCertificate: "Install certificate",
  },
  CSR: {
    algorithm: "Algorithm",
    container: "Сontainer (will generated)",
    create_request: "Create certificate request",
    create_request_created: "Certificate request was successfully created",
    create_selfSigned: "Create self-signed certificate",
    template_label: "Certificate template",
    template_default: "Default template",
    template_additional_fields: "Template with additional fields",
    template_kep_ip: "Сертификат КЭП индивидуального предпринимателя",
    template_kep_fiz: "Сертификат КЭП физичексого лица",
    csp_label: "Cryptography service provider",
    csp_openssl: "OpenSSL RSA",
    csp_microsoft_base: "Microsoft Base Cryptografic Provaider v1.0",
    not_after: "Valid not after",
    generate_new_key: "Create new key pair",
    exportable_key: "Mark private keys as exportable",
    key_length: "Key length",
    keys_params: "Key parameters",
    subject_params: "Subject parameters",
    country: "Country",
    common_name: "CN",
    inn: "INN",
    snils: "SNILS",
    ogrnip: "OGRNIP",
    organization_name: "Organization Name (eg, company)",
    organizational_unit_name: "Organizational unit name",
    title: "Position",
    locality_name: "Locality Name (eg, city)",
    province_name: "State or Province Name (full name)",
    email_address: "Email Address",
    key_generation_error: "Error generation key pair",
    key_usage: "Key usage",
    key_usage_group: "Key usage group",
    key_usage_sign: "Digital signature",
    key_usage_encrypt: "Data encipherment",
    key_usage_sign_encrypt: "Digital signature and data encipherment",
    key_usage_dataEncipherment: "Data encipherment",
    key_usage_keyAgreement: "Key agreement",
    key_usage_keyCertSign: "Certificate sign",
    key_usage_decipherOnly: "Decipher only",
    key_usage_encipherOnly: "Encipher only",
    key_usage_digitalSignature: "Digital signature",
    key_usage_nonRepudiation: "Nonrepudiation",
    key_usage_cRLSign: "CRL sign",
    key_usage_keyEncipherment: "Key encipherment",
    extKeyUsage: "Extended key usage",
    eku_serverAuth: "Server authentication",
    eku_clientAuth: "Client authentication",
    eku_emailProtection: "Email protection",
    eku_codeSigning: "Code signing",
    fill_required_fields: "Fill out the required fields",
  },
  Key: {
    key_load_failed: "Error load key",
  },
  Encrypt: {
    archive_name: "encrypt_files.zip",
    files_archived: "The files are archived",
    files_encrypt: "The files are encrypted",
    files_encrypt_failed: "File encryption failed",
    files_archived_failed: "File archivation failed ",
    decrypt_key_failed: "The private key is not found",
    files_decrypt: "The files are decrypted",
    files_decrypt_failed: "Error load key",
    encrypt_and_decrypt: "Encrypt / Decrypt",
    encrypt: "Encrypt",
    Encrypt: "ENCRYPT",
    decrypt: "Decrypt",
    Encryption: "FILES",
    encrypt_setting: "Encryption settings",
    delete_files_after: "Delete files after encryption",
    archive_files_before: "Archive files before encryption",
    search_decrypt_cert_failed: "The decryption certificate is not found",
  },
  Sign: {
    sign_and_verify: "Sign / Verify the signature",
    sign: "Sign",
    resign: "Re-sign",
    unsign: "Remove a signature",
    Sign: "SIGN",
    Signature: "SIGNATURE",
    verify: "Verify",
    load_sign_failed: "Error load sign",
    files_signed: "The files are signed",
    files_signed_failed: "File signing failed",
    files_resigned_failed: "File re-signing failed",
    files_resigned_exist: "The file is already re-signed. Select another certificate",
    files_resigned: "The file is re-signed",
    files_unsigned_failed: "Signature removal error",
    files_unsigned_detached: "A detached signature",
    files_unsigned_ok: "The signature is successfully removed",
    verify_sign_ok: "The signature is successfully verified",
    verify_sign_founds_errors: "Errors were detected while verifying",
    verify_signercontent_founds_errors: "Error: signed content not found",
    verify_sign_failed: "Signature verification failed",
    verify_signers_failed: "Error: verify signers",
    verify_get_content_failed: "The original file is not found",
    set_content_failed: "Error: content not found",
    build_chain_failed: "Chain building failed",
    sign_info: "Signature information",
    sign_content_file: "Sign content file",
    sign_detached: "Save the signature as detached",
    sign_time: "Add time of signature",
    sign_setting: "Signature settings",
    sign_ok: "The signature is valid",
    sign_error: "The signature is not valid",
    key_not_found: "The key is not found",
    signercert_not_found: "Error: signer cert not found",
    signingTime: "Signing time",
    status: "The status",
    alg: "Signature algorithm",
    digest_alg: "Hash algorithm",
  },
  Settings: {
    settings: "Settings",
    encoding: "Encoding type",
    directory_file_save: "Save the file to",
    failed_find_directory: "The directory is not found",
    DER: "DER",
    BASE: "BASE-64",
    add_files: "Add files",
    selected_all: "Select all",
    remove_selected: "Delete selection",
    remove_all_files: "Remove all listed files",
    drag_drop: "Drag and drop the files",
    open_file: "Open the file",
    go_to_file: "Go to the file",
    delete_file: "Delete the file from the list",
    write_file_failed: "File saving error",
    write_file_ok: "The settings saved",
    setting_file: "settings.json",
    field_empty: "This field cannot be empty!",
    email_error: "Email is not valid",
    choose_files: "Choose files",
    choose: "Choose",
    remove_list: "Clear the list",
    print: "Print",
    Control: "CERTIFICATES",
    Datas: "ENCRYPTION",
    Digital: "DIGITAL",
    pass_enter: "Enter the password",
    password: "Password",
    password_confirm: "Password confirm",
    wait: "Please wait",
    pattern_failed: "Only latin letters, numbers or a special characters",
  },
  Help: {
    help: "Help",
    Help: "HELP",
    Important: "Important!",
    Header1: "REFERENCE HELP BY THE TRUSTED ESIGN PROGRAM",
    Paragraf_1_1: "This help is a short reference on the interface of the Trusted eSign application and does not cover all the features of installation, configuration and operation.",
    Paragraf_1_2a: "The full version of the documentation for the software product can be obtained from the link",
    Paragraf_1_2b: "Trusted eSign v.1.2.11 Руководство пользователя.pdf",
    Paragraf_1_3a: "Application Trusted eSign is a commercial product and for its full-fledged work it is necessary to purchase a license. You can get acquainted with the conditions of license acquisition in the online store ",
    Paragraf_1_3b: "КриптоАРМ.RU",
    Header2: "CONTENT OF THE REFERENCE HELP",
    Paragraf_2_1: "1. Getting started with the application. Main window interface",
    Paragraf_2_2: "2. The License Installation Wizard",
    Paragraf_2_3: "3. Wizard for creating / verifying an electronic signature",
    Paragraf_2_4: "4. Encryption / Encryption Wizard",
    Paragraf_2_5: "5. Certificate Management Wizard",
    Header3: "1. GETTING STARTED WITH THE APPLICATION. INTERFACE OF THE MAIN WINDOW",
    Paragraf_3_1: "When you start the Trusted eSign application, the main application window appears, as shown in the figure below. In the main window there are buttons for navigating to the main application wizards: the wizard for creating / verifying an electronic signature, the encryption / decryption wizard, and the wizard for managing certificates of connected storage.",
    Paragraf_3_2: "In the title bar of the application there is a button for calling the side menu (the menu is shown in the figure to the right) and a button for switching the interface language. Using the application menu, you navigate to the main wizards and you can additionally access the page containing information about the program, the license installation wizard, and quick reference help.",
    Paragraf_3_3: "The main application window has a fixed size without the possibility of changing it. The application saves all global settings that were made by the user. Saving occurs when the application is closed. In the process of working with the application, the user's actions are also saved, executed by him in the wizards (selection of certificates, selection of files, etc.). When you go to another wizard (application page) and return to the application, you do not have to perform the same operations again.",
    Header4: "2. MASTER OF LICENSE INSTALLATION",
    Paragraf_4_1: "For the correct operation of the application, you must install a license for this software product. If, at the application startup, there are pop-up messages about the absence of a license expired in the license period, the impossibility of reading the license file, this indicates that the application will not correctly perform the operations of signing and decrypting files. The presence of a valid license for the application should be given special attention.",
    Paragraf_4_2: "To install the license and get information about it in the application there is a special wizard (shown in the figure below), which allows you to install a license from a file or clipboard. In either case, the license depends on the license.lic file and places it in the user's directory.",
    Paragraf_4_3a: "After the license has been successfully installed, the program must be restarted. If you receive messages like the following when entering a license for a software product: a non-correct license key, the license is not suitable for this program, the license has expired, then contact the technical support of the developer company (",
    Paragraf_4_3b: ").",
    Header5: "3. MASTER OF CREATION / ELECTRONIC SIGNATURE CHECKS",
    Paragraf_5_1: "In the Trusted eSign application, there is a wizard in which the operations for creating an electronic signature for one or multiple files are performed. In the same wizard, you perform the operations for creating a file signature and checking signed files. The wizard page is shown in the figure below.",
    Paragraf_5_2: "The wizard page is divided into three areas. On the left is the selection area of the subscriber certificate. The certificate is selected from the dialog with the display of certificates from the repositories.",
    Paragraf_5_3: "In the dialog for selecting a subscriber certificate, only certificates from the Personal Certificates section that have a private key binding are displayed. Other certificates are not displayed and are not available for use in this wizard.",
    Paragraf_5_4: "To verify the signature, it is enough to select the files to be scanned - files with the extension .sig, which contain an electronic signature and click on the Check button. No additional manipulation is necessary when verifying the signature.",
    Paragraf_5_5: "If the source file is not found automatically when checking the signature file separated from the signature file, its selection will be offered. The result of checking signatures is displayed as a message.",
    Paragraf_5_6: "To view the files before creating a signature, you can use the context menu (see the figure below). The signature is checked for the selected files. The figure shows the result of checking the signature of one of the files. Additionally, you can remove the signature from the signed files. In this case, the original file is saved, and the signature is deleted.",
    Header6: "4. MASTER OF ENCRYPTION / DISCRIPTION OF FILES",
    Paragraf_6_1: "In the application Trusted eSign there is a wizard in which the operations of encryption and decryption of files are performed. To perform the encryption operation, the recipients of encrypted files are used as a list of certificates. Those users of the application who have a private key associated with one of the recipient certificates will be able to decrypt the files.",
    Paragraf_6_2: "The Encryption / Decryption Wizard is shown in the figure below. The wizard page is divided into three areas: on the left is the selection area of the recipient certificates, below are the settings for performing the operations and on the right is the selection area of the source files and the result display.",
    Paragraf_6_3: "When selecting the mode of deleting files after encryption, pay attention to providing access to encrypted files. To do this, you can add a personal certificate to the list of recipients, linked to a private key.",
    Paragraf_6_4: "The figure at the right shows the dialog for selecting recipient certificates. The list of available certificates displays all certificates from the connected stores. The certificates are grouped by tabs. In the dialog, a certificate search operation is available.",
    Paragraf_6_5: "In the wizard, you can modify the list of recipients and files by adding them. The encryption operation is performed only on a set of selected files. To view files before encryption, you can use the context menu (see the figure below).",
    Paragraf_6_6: "Decrypt files by clicking the Decrypt button. To successfully perform the operation, one of the connected storages must contain a private key that is linked to the recipient's certificate. Otherwise an error will be issued.",
    Paragraf_6_7: "If the files are successfully decrypted, the result is displayed in the same wizard and the files themselves are saved either next to the encrypted files or in the specified directory.",
    Header7: "5. MASTER OF CERTIFICATES MANAGEMENT AND KEYS",
    Paragraf_7_1: "To manage certificates and keys, a separate wizard has been added to the application. The wizard page displays tabs with certificates grouped into them. When you first start the application, you must have a test certificate and a key attached to it in the Personal Certificates tab.",
    Paragraf_7_2: "In order to import the new certificate into the repository, you can use the context menu - select the Import Certificate operation. In the dialog box that appears, select the certificate (BASE64 and DER encodings are supported) and the certificate is placed in the repository. ",
    Paragraf_7_3: "Import of certificates from the repositories of supported providers is carried out at the level of using additional utilities. The most common situations are explained in the User's Guide.",
    link_user_guide: "https://cryptoarm.ru/upload/docs/userguide-trusted-esign.pdf",
    link_user_guide_name: " Trusted eSign v.1.2.11 Руководство пользователя.pdf",
    link_shop: "https://cryptoarm.ru/shop/trusted-esign",
    link_shop_name: " КриптоАРМ.RU",
    Work_App: "HOW THE APPLICATION WORKS",
    video: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Typing_example.ogv",
        title: "CREATION OF A SIGNATURE",
      },
      {
        src: "http://www.youtubeinmp4.com/redirect.php?video=6Dc1C77nra4",
        title: "ENCRYPTION",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/6/65/Examplevideo.ogv",
        title: "CERTIFICATES OPERATIONS",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/transcoded/1/14/Xacti-AC8EX-Sample_video-001.ogg/Xacti-AC8EX-Sample_video-001.ogg.360p.ogv",
        title: "SIGNATURE VERIFICATION",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/en/6/6e/Terminator.ogg",
        title: "DECRYPTION",
      },
      {
        src: "http://html5videoformatconverter.com/data/images/happyfit2.mp4",
        title: "HOW TO WORK WITH TRUSTED NET SERVICE",
      },
    ],
    video_failed: "This video cannot be played. Please check your Internet connection",
  },
  About: {
    about: "About the program",
    About: "ABOUT THE PROGRAM",
    message_send: "The message is sent",
    error_message_send: "Message failed to send",
    version_full: "Version: 1.3.0",
    version: "1.3.0",
    version_app: "Application version",
    build_number: "Build number",
    product_NAME: "Trusted eSign",
    product_name: "Trusted eSign",
    FeedBack: "FEEDBACK",
    feedback_description: "Report developers about any problems or suggest ideas for improving the program",
    username: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    Contacts: "Contacts",
    developer: "Company-developer",
    company_name: "Company Cifrovie Technologii",
    copyright: "Copyright 2016-2018",
    address: "Petrova St, 1, Yoshkar-Ola, Mari El Republic, Russia, 424033",
    phone: {
      number_one: "+7 (8362) 33-70-50",
      number_two: "+7 (499) 705-91-10",
      number_three: "+7 (800) 555-65-81",
    },
    Info: "Information",
	info: "info@trusted.plus",
	about_programm: "Application Trusted eSign is designed to create electronic signature and file encryption using digital certificates and cryptographic algorithms",
    info_about_product: "Trusted eSign is a desktop app that allows you to sign documents and encrypt files using digital certificates and cryptographic algorithms.",
    info_about_sign: "Sign any type of document files and other content",
    info_about_encrypt: "Protection of your documents and any other content by using encryption to address one or more recipients",
    info_about_certificate: "Centralized management of local and cloud-based certificate storages",
    link_facebook: "https://www.facebook.com/trusted_esign/",
    link_vk: "http://vk.com/trusted_esign",
    link_twitter: "https://twitter.com/trusted_esign",
    link_trusred: "http://www.trusted.ru/",
    AppVersion: "Version",
    CspVersion: "CryptoProviders",
    AppCoreVersion: "The kernel version of the application:",
    Compatible: "(compatibility with Electron 1.6.6, OpenSSL 1.0.2k)",
    CSPVersion: "CryptoPro CSP:",
  },
  License: {
    license: "License",
    License: "LICENSE",
    About_License: "LICENSE INFORMATION TRUSTED ESIGN",
    About_License_CSP: "CRYPTOPRO CSP LICENSE INFORMATION",
    license_key: "The license key",
    Enter_Key: "ENTER THE KEY",
	Buy_license: "BUY LICENSE",
    link_buy_license: "https://cryptoarm.ru/shop/trusted-esign",
    entered_the_key: "Enter the key",
    key_file_name: "desktopkey.lic",
    failed_key_find: "The license key is not found",
    failed_validity_key: "The license key has expired",
    failed_match_key: "The license key file does not match the application",
    failed_key: "The license key is incorrect",
    key: "The key",
    Entered: "ENTER",
	Сlose: "CLOSE",
    enter_key: "Enter the license",
    get_overtimes_license: "Obtaining a temporary license",
    Enter_license: "УСТАНОВИТЬ ЛИЦЕНЗИЮ",
    license_request: "Request for a temporary license",
    License_overtimes: "INTERIM LICENSE",
    License_reques_send: "SEND REQUEST",
    License_request: "OBTAIN A TEMPORARY LICENSE",
    overtimes_license_confirm: "To send a request for a temporary license for the Trusted eSign product, for a period of 14 days, fill out the form floor. A temporary license is issued once per workplace to familiarize yourself with all the features of the software product.",
    overtimes_license: "In the absence of a permanent license, you can request a temporary license. The temporary license is issued for a period of 14 days and provides full-fledged work with the application.",
    overtimes_license_ok: "A temporary license for the use of the Trusted eSign product was obtained. You can install it on the workstation. After installing the license, you must restart the application.",
    overtimes_license_error: "The request for obtaining a temporary license for the Trusted eSign product was rejected. Perhaps, for the email address you have already issued a license. To resolve this issue, please contact technical support at info@trusted.ru.",
    lic_file_not_found: "The license file is not found",
    lic_file_uncorrect: "The license file is not correct",
    lic_key_uncorrect: "The license key is not correct",
    lic_key_correct: "The license key is valid (Days left: ",
    lic_key_correct_days: "Error: license key is not correct",
    lic_key_setup: "The license key is successfully set up",
    lic_file_choose: "Choose the license file",
    lic_status: "The licence status",
    lic_notbefore: "Issue date of the license",
    lic_notafter: "Expiration date of the license",
    lic_unlimited: "Unlimited",
    jwtErrorInternal: "The license checking internal error",
    jwtErrorLoad: "Loading license failed",
    jwtErrorTokenFormat: "The license token invalid format",
    jwtErrorSign: "The license have invalid signature",
    jwtErrorParsing: "Can't parse license token info",
    jwtErrorStructure: "The license have invalid token info structure",
    jwtErrorProduct: "The license does not match the application",
    jwtErrorExpired: "The license expired",
    jwtErrorStarted: "The license doesn't started",
    jwtErrorOperation: "An unknown operation requested",
    jwtErrorNoLicenseInStore: "No find valid license for operation",
    jwtErrorStoreIsLocked: "Load license was loked",
    jwtErrorCode: "Unknown error code",
    jwtGetLicense: "For buy a license go to:",
    license_correct: "Correct",
    license_incorrect: "Incorrect",
    serial_number: "Serial number",
  },
  Kegistration: {
    LoginAndPass: "A USERNAME AND PASSWORD AUTHENTICATION",
    Social: "SOCIAL NETWORKS AUTHENTICATION",
    Cert: "CERTIFICATE-BASED AUTHENTICATION",
    RLoginAndPass: "LOGIN AND PASSWORD",
    RSocial: "SOCIAL NETWORKS",
    RCert: "DIGITAL CERTIFICATE",
    login: "Login",
    enter: "Enter",
    sign_up: "Sign up",
    choose_reg: "CHOOSE THE REGISTRATION TYPE ON TRUSTED NET",
    enter_service: "Enter the service",
    App_Functions: "SEVERAL USEFUL APPLICATION FUNCTIONS",
    Empowerment: "FUNCTIONAL EXTENSIONS WITH CONNECTION TO TRUSTED NET SERVICE",
  },
  Common: {
    apply: "Apply",
    clear: "Clear",
    close: "Close",
    reset: "Reset",
    yes: "Yes",
    no: "No",
    add_files: "Add files",
    add_all_files: "Add files from all the subfolders?",
    ru: "Russian",
    en: "English",
    read_file_error: "Reading from the file error",
    write_file_error: "Error: write file",
    or: "or",
    subject: "Owner",
    product: "Product",
    files_not_found: "Files are not found: perhaps they were removed or renamed",
    Back: "Back",
    back: "Back",
    next: "Next",
    error: "ERROR",
    update: "Update",
    delete: "Delete",
    exit: "EXIT",
    goOver: "Go over",
    cancel: "Cancel",
    ready: "Ready",
  },
  Csp: {
    cpcspPKZIVersion: "CryptoPro CSP product version",
    cpcspSKZIVersion: "CryptoPro CSP SKZI version",
    cspErr: "Error check CSP parameters",
    libcapi: "Cannot find libcapi. Install CryptoPro CSP",
    noCPLicense: "Error check license for CryptoPro CSP",
    noProvider2001: "GOST 2001 provider not available",
    noProvider2012: "GOST 2012 provider not available",
  },
  Diagnostic:{
    header: "Application Diagnostics",
    problem_header: "Problems detected",
    resolve_header: "Solutions",
    close: "Close",
  },
  Problems: {
    problem_1: "There is no crypto provider CryptoPro CSP",
    resolve_1_1: "The system does not have the cryptoPro CSP crypto provider installed. The further operation of the application is impossible and the application will be closed.",
    resolve_1_2: "To solve this problem, install CryptoPro CSP version 5.0 and run the application again.",
    resolve_1_3: "Distribution of the crypto provider CryptoPro CSP can be downloaded from the official CryptoPro website",
    resolve_1_4: "Detailed instructions for installing CryptoPRO CSP on various platforms can be found in the product documentation, which is available at the link",
    problem_2: "There is no license for crypto provider CryptoPro CSP",
    resolve_2_1: "The system does not have the correct license for CryptoPro CSP, which is necessary for full-function operation of the application.",
    resolve_2_2: "To solve this problem, you can purchase a license for the product in the online store, accessible by reference ",
    resolve_2_3: "Next, you will need to install the license according to the steps described in the product documentation that is available by reference ",
    problem_3: "There is no license for Trusted eSign",
    resolve_3_1: "In the application there is no installed license for the software product Crypto ARM GOST.",
    resolve_3_2: "Without a license, operations related to access to the key medium will not be performed. For example, the operation of signing and decrypting files. This problem is not critical and the application is functional with limited functionality.",
    resolve_3_3: "To solve this problem, you can purchase a license for the product in the online store, accessible by reference",
    resolve_3_4: "After purchasing a license, you can install it through the application interface",
    problem_4: "Could not check the parameters of crypto provider CryptoPro CSP",
    resolve_4_1: "When the application started, there were problems with reading the parameters of the detected CryptoPro CSP. The further operation of the application is impossible and the application will be closed.",
    resolve_4_2: "To solve this problem, you need to install the required version of the CryptoPro CSP crypto provider and start the application again.",
    resolve_4_3: "The CryptoPro installation procedure is described in the product documentation, which is available by reference ",
    problem_5: "Certificates not linked to a key container",
    resolve_5_1: "In the application there are no certificates linked to the key container, except for the test container. For full work in the mode of signing and decrypting files, you need to install certificates.",
    resolve_5_2: "To resolve this issue, install personal certificates in the steps described in the product documentation that is available by reference ",
    resolve_5_3: "Если у вас есть сертификаты на токене их можно установить с привязкой к ключевому контейнеру на странице Контейнеры.",
    problem_6: "Trusted Crypto module is not loaded",
    resolve_6_1: "When you run Crypto ARM GOST, the Trusted Crypto module is not loaded.",
    resolve_6_2: "To solve this problem, open the application control panel and forward error messages displayed on the Console tab to the technical support.",
    resolve_6_3: "Detailed instructions on how to open the control panel under the required platform can be found in the product documentation that is available on the link ",
  },
  Algorithm: {
    id_tc26_signwithdigest_gost3410_12_256: "GOST R 34.11-2012/34.10-2012 256 bit",
    id_tc26_signwithdigest_gost3410_12_512: "GOST R 34.11-2012/34.10-2012 512 bit",
    id_tc26_gost3410_12_256 : "GOST R 34.10-2012 256 bit",
    id_tc26_gost3410_12_512 : "GOST R 34.10-2012 512 bit",
    id_GostR3411_94_with_GostR3410_2001: "GOST R 34.11/34.10-2001",
    id_GostR3411_94_with_GostR3410_94: "GOST R 34.11/34.10-94",
    id_GostR3411_94: "GOST R 34.11-94",
    id_tc26_gost3411_12_256: "GOST R 34.11-2012 256 bit",
    id_tc26_gost3411_12_512: "GOST R 34.11-2012 512 bit",
    id_GostR3410_2001: "GOST R 34.10-2001",
    id_GostR3410_94: "GOST R 34.10-94",
    id_Gost28147_89: "GOST 28147-89",
  },
};
