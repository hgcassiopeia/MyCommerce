import React from 'react';

const Footer = (props) => {
    const {creatorName, creatorMail} = props
    return (
        <div>Powered By : {creatorName} | Created By : {creatorMail}</div>
    )
}

export default Footer;