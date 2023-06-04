import React from "react";
import User from "./user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  return (
    <div className="item">
      <img className="ui avatar image" src={User} alt="image" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i className="trash icon " style={{ color: "red", float: "right" }}></i>
    </div>
  );
};

export default ContactCard;
