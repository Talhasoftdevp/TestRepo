import React from 'react'
import { Link } from 'gatsby'
import svgRightArrow from '../images/right-arrow.svg'
import 'bootstrap/dist/css/bootstrap.css'

export default class Administration extends React.Component {
  state = {
    Admin_isOpen: true,
    User_isOpen: true,
    General_isOpen: true,
    Group_isOpen: true,
    Template_isOpen: true,
    Integerator_isOpen: true,
    WorkFlow_isOpen: true,
    // User_isClose: false
  }
  /********************************************  Side Nav Toggles ************************************/

  /*****  Administration Toggle ********/

  Admin_toggleOpen = () => {
    this.setState(prevState => ({
      Admin_isOpen: !prevState.Admin_isOpen,
    }))
  }

  /*****  User Toggle ********/

  User_toggleOpen = () => {
    this.setState(prevState => ({
      User_isOpen: !prevState.User_isOpen,
      // User_isClose: !prevState.User_isOpen,
    }))
  }

  /*****  General Toggle ********/

  General_toggleOpen = () => {
    this.setState(prevState => ({
      General_isOpen: !prevState.General_isOpen,
    }))
  }

  /*****  Group Toggle ********/

  Group_toggleOpen = () => {
    this.setState(prevState => ({
      Group_isOpen: !prevState.Group_isOpen,
    }))
  }

  /*****  Template Toggle ********/

  Template_toggleOpen = () => {
    this.setState(prevState => ({
      Template_isOpen: !prevState.Template_isOpen,
    }))
  }

  /*****  Integerator Toggle ********/

  Integerator_toggleOpen = () => {
    this.setState(prevState => ({
      Integerator_isOpen: !prevState.Integerator_isOpen,
    }))
  }

  /*****  Work Flow Toggle ********/

  WorkFlow_toggleOpen = () => {
    this.setState(prevState => ({
      WorkFlow_isOpen: !prevState.WorkFlow_isOpen,
    }))
  }

  render() {
    return (
      <div>
        {/********************************************  Administarion ************************************/}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            cursor: 'pointer',
          }}
          onClick={this.Admin_toggleOpen}
        >
          <h5>Administration</h5>
          <img
            src={svgRightArrow}
            style={{
              height: '25px',
              transition: '475ms',
              transform: `rotate(${this.state.Admin_isOpen ? 90 : 0}deg)`,
            }}
            alt="right arrow"
          />
        </div>
        {this.state.Admin_isOpen && (
          <ul className="sidenav">
            <li>
              {/********************************************* General ******************************/}
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                  }}
                  onClick={this.General_toggleOpen}
                >
                  <h6>General</h6>
                  <img
                    src={svgRightArrow}
                    style={{
                      height: '15px',
                      transition: '475ms',
                      transform: `rotate(${
                        this.state.General_isOpen ? 90 : 0
                        }deg)`,
                    }}
                    alt="right arrow"
                  />
                </div>
                {this.state.General_isOpen && (
                  <ul >
                    <li className="list-group">
                      <Link to="/General/General">
                        <small>General</small>

                      </Link>
                    </li>

                    <br />
                  </ul>
                )}
              </div>
              {/********************************************** USERS ************************************ */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                  }}
                  onClick={this.User_toggleOpen}
                >
                  <h6>Users</h6>
                  <img
                    src={svgRightArrow}
                    style={{
                      height: '15px',
                      transition: '475ms',
                      transform: `rotate(${
                        this.state.User_isOpen ? 90 : 0
                        }deg)`,
                    }}
                    alt="right arrow"
                  />
                </div>
                {this.state.User_isOpen && (
                  <ul >
                    <li className="list-group">
                      <Link to="/Users/CreateUser">
                        <small>Create New User</small>
                      </Link>
                    </li>
                    <li className="list-group">
                      <Link to="/Users/EditUser">
                        <small>Edit User</small>
                      </Link>
                    </li>
                    <li className="list-group">
                      <Link to="/Users/DeleteUser">
                        <small>Delete User</small>
                      </Link>
                    </li>
                    <br />
                  </ul>
                )}
              </div>
              {/********************************************** GROUPS ************************************ */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                  }}
                  onClick={this.Group_toggleOpen}
                >
                  <h6>Groups</h6>
                  <img
                    src={svgRightArrow}
                    style={{
                      height: '15px',
                      transition: '475ms',
                      transform: `rotate(${
                        this.state.Group_isOpen ? 90 : 0
                        }deg)`,
                    }}
                    alt="right arrow"
                  />
                </div>
                {this.state.Group_isOpen && (
                  <ul >
                    <li className="list-group">
                      <Link to="/Groups/CreateGroup">
                        <small>Create New Group</small>
                      </Link>
                    </li>
                    <li className="list-group">
                      <Link to="/Groups/EditGroup">
                        <small>Edit Group</small>
                      </Link>
                    </li>
                    <li className="list-group">
                      <Link to="/Groups/DeleteGroup">
                        <small>Delete Group</small>
                      </Link>
                    </li>
                    <br />
                  </ul>
                )}
              </div>
              {/********************************************** Templates ************************************ */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                  }}
                  onClick={this.Template_toggleOpen}
                >
                  <h6>Templates</h6>
                  <img
                    src={svgRightArrow}
                    style={{
                      height: '15px',
                      transition: '475ms',
                      transform: `rotate(${
                        this.state.Template_isOpen ? 90 : 0
                        }deg)`,
                    }}
                    alt="right arrow"
                  />
                </div>
                {this.state.Template_isOpen && (
                  <ul >
                    <li className="list-group">
                      <Link to="/Template/CreateTemplate">
                        <small>Create New Template</small>
                      </Link>
                    </li>
                    <li className="list-group">
                      <Link to="/Template/EditTemplate">
                        <small>Edit Template</small>
                      </Link>
                    </li>
                    <li className="list-group">
                      <Link to="/Template/DeleteTemplate">
                        <small>Delete Template</small>
                      </Link>
                    </li>
                    <br />
                  </ul>
                )}
              </div>
              {/********************************************** Work Flow ************************************ */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                  }}
                  onClick={this.WorkFlow_toggleOpen}
                >
                  <h6>Work Flow</h6>
                  <img
                    src={svgRightArrow}
                    style={{
                      height: '15px',
                      transition: '475ms',
                      transform: `rotate(${
                        this.state.WorkFlow_isOpen ? 90 : 0
                        }deg)`,
                    }}
                    alt="right arrow"
                  />
                </div>
                {this.state.WorkFlow_isOpen && (
                  <ul >
                    <li className="list-group">
                      <Link to="/WorkFlow/Design">
                        <small>Design Work Flow</small>
                      </Link>
                    </li>
                    <li className="list-group">
                      <Link to="/WorkFlow/EditWorkFlow">
                        <small>Edit Work Flow</small>
                      </Link>
                    </li>
                    <li className="list-group">
                      <Link to="/WorkFlow/DeleteWorkFlow">
                        <small>Delete WorkFlow</small>
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
              {/********************************************** Integerator ************************************ */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                  }}
                  onClick={this.Integerator_toggleOpen}
                >
                  <h6>Integerator</h6>
                  <img
                    src={svgRightArrow}
                    style={{
                      height: '15px',
                      transition: '475ms',
                      transform: `rotate(${
                        this.state.Integerator_isOpen ? 90 : 0
                        }deg)`,
                    }}
                    alt="right arrow"
                  />
                </div>
                {this.state.Integerator_isOpen && (
                  <ul >
                    <li className="list-group">
                      <Link to="/Integerator/Configuration">
                        <small>Configuration</small>
                      </Link>
                    </li>
                    <br />
                  </ul>
                )}
              </div>
            </li>
            <br />
          </ul>
        )
        }
      </div>
    )
  }
}
