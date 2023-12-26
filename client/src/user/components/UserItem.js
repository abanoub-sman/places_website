import React from "react";
import "./UserItem.css"; //this using the css file without this line not design applied
import Avatar from "../../shared/components/UIElements/Avatar";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Card from "../../shared/components/UIElements/Card";
// this is a presentational component
const UserItem = (props) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/places`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
