import React from "react";

export default class Users extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((usersdata) => this.setState({ users: usersdata.data }));
  }

  render() {
    console.log(this.state.users);
    return <div></div>;
  }
}
