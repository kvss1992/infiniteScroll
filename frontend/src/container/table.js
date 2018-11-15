import React, { Component } from "react";
import debounce from "lodash/debounce";

import Header from "../component/Header";
import Record from "../component/Record";

import fetchAsync from "../service/request";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      page: 0
    };
  }
  componentDidMount() {
    fetchAsync(this.state.page)
      .then(data =>
        this.setState(prevState => ({
          response: data.response,
          page: prevState.page + 10
        }))
      )
      .catch(reason => console.log(reason.message));

    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = debounce(() => {
    if (window.innerHeight <= window.scrollY + 200 && this.state.page < 100) {
      fetchAsync(this.state.page)
        .then(data =>
          this.setState(prevState => ({
            response: [...prevState.response, ...data.response],
            page: prevState.page + 10
          }))
        )
        .catch(reason => console.log(reason.message));
    }
  }, 250);
  render() {
    const { response } = this.state;
    return (
      <table>
        <Header />
        <tbody>
          {response.map(record => (
            <Record
              key={record.id}
              id={record.id}
              name={record.Name}
              date={record.Date}
              currency={record.Currency}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
