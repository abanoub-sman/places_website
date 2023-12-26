import React from "react";
import UsersList from "../components/UsersList";
// this will be a component more than presentational 
// as it will load data from backend so this is Stateful
const Users = () => {
  const USERS = [
    {
      id: 1,
      name: "Cool",
      image:
        "https://lumiere-a.akamaihd.net/v1/images/a_avatarpandorapedia_neytiri_16x9_1098_01_0e7d844a.jpeg?region=0%2C0%2C1920%2C1080&width=1536",
      places: 3,
    },
  ];
  return (<UsersList items ={USERS}/>);
};

export default Users;
