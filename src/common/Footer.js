import React from 'react';

const Footer = (props) => {
    const {creatorName, creatorMail} = props
    return (
        <div className="container-fluid">
            <hr/>
            <div className="text-center title text-uppercase">
                <small>
                    <span className="text-danger">Powered By : {creatorName}</span> |
                    <span className="text-muted"> Created By : {creatorMail}</span>
                </small>
            </div>
        </div>
    )
}

export default Footer;