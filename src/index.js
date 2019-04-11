import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Layout extends React.Component {
  state = {
    showSidebar: false
  };

  toggleSidebar = () => {
    this.setState({ showSidebar: !this.state.showSidebar });
  };

  render() {
    const { showSidebar } = this.state;
    return (
      <div className="layout">
        {showSidebar && (
          <Sidebar toggleSidebar={this.toggleSidebar}>
            {" "}
            Some Sidebar Content{" "}
          </Sidebar>
        )}
        <Content
          isSidebarVisible={showSidebar}
          toggleSidebar={this.toggleSidebar}
        >
          {" "}
          Some content Here{""}
        </Content>
      </div>
    );
  }
}

const Content = ({ children, isSidebarVisible, toggleSidebar }) => (
  <div className="content">
    {children}{" "}
    {!isSidebarVisible && <button onClick={toggleSidebar}>Show </button>}
  </div>
);

const Sidebar = ({ toggleSidebar, children }) => (
  <div className="sidebar">
    {children}
    <button onClick={toggleSidebar}> Hide </button>
  </div>
);
const rootElement = document.getElementById("root");
ReactDOM.render(<Layout />, rootElement);
