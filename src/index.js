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
          <Sidebar onHide={this.toggleSidebar}> Some Sidebar Content </Sidebar>
        )}
        <Content
          isSidebarVisible={showSidebar}
          onShowSideBar={this.toggleSidebar}
        >
          {" "}
          Some More content Here{" "}
        </Content>
      </div>
    );
  }
}

const Content = ({ children, isSidebarVisible, onShowSidebar }) => {
  return (
    <div className="content">
      {children}{" "}
      {!isSidebarVisible && <button onClick={onShowSidebar}>Show</button>}
    </div>
  );
};

const Sidebar = ({ onHide, children }) => (
  <div className="sidebar">
    {children}
    <button onClick={onHide}> Hide </button>
  </div>
);
const rootElement = document.getElementById("root");
ReactDOM.render(<Layout />, rootElement);
