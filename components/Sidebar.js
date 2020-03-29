import React from 'react'
import { Link } from 'gatsby'
import svgRightArrow from '../images/right-arrow.svg'
import 'bootstrap/dist/css/bootstrap.css'
import styled from 'styled-components'

const activeStyle = {
  color: '#0057e7',
  fontWeight: 600,
  fontSize: '0.95rem',
}

const StyledSidebar = styled.aside`
  a {
    color: #0175d8;
    text-decoration: none;
    box-shadow: none;
  }

  a:hover {
    color: #0175d8;
    box-shadow: none;
  }
`
class SideNavigation extends React.Component {
  
  constructor(props) {
    super(props);
  

    this.state = {
      Admin_isOpen: true,
      User_isOpen: true,
      General_isOpen: true,
      Group_isOpen: true,
      Template_isOpen: true,
      Integerator_isOpen: true,
      WorkFlow_isOpen: true,
      Desktop_isOpen: true,
      repository_isOpen: true,
      Document_isOpen: true,
      Search_isOpen: true,
      RecycleBin_isOpen: true,
      SearchResults_isOpen: true,
      AdvanceSearch_isOpen: true,
      ContextualSearch_isOpen: true,
      SearchByDate_isOpen: true,
      SearchByTemplate_isOpen: true,
      filtered: [],
      // search_Data: this.props.search_string,
      
      side_bar: [
                          /************************************ ADMINISTRATION *********************************/
        {
          title: 'Administration',
          data_toggle: 'Admin_isOpen',
          childs: [
            {
              title: 'General',
              data_toggle: 'General_isOpen',
              childs: [
                {
                  title: 'General',
                  route: '/General/General',
                },
              ],
            },
            {
              title: 'Users',
              data_toggle: 'User_isOpen',
              childs: [
                {
                  title: 'Create New User',
                  route: '/Users/CreateUser',
                },
                {
                  title: 'Edit User',
                  route: '/Users/EditUser',
                },
                {
                  title: 'Delete User',
                  route: '/Users/DeleteUser',
                },
              ],
            },
            {
              title: 'Groups',
              data_toggle: 'Group_isOpen',
              childs: [
                {
                  title: 'Create New Group',
                  route: '/Groups/CreateGroup',
                },
                {
                  title: 'Edit Group',
                  route: '/Groups/EditGroup',
                },
                {
                  title: 'Delete Group',
                  route: '/Groups/DeleteGroup',
                },
              ],
            },
            {
              title: 'Templates',
              data_toggle: 'Template_isOpen',

              childs: [
                {
                  title: 'Create New Template',
                  route: '/Template/CreateTemplate',
                },
                {
                  title: 'Edit Template',
                  route: '/Template/EditTemplate',
                },
                {
                  title: 'Delete Template',
                  route: '/Template/DeleteTemplate',
                },
              ],
            },
            {
              title: 'Work Flow',
              data_toggle: 'WorkFlow_isOpen',
              childs: [ {
                title: 'Design Work Flow',
                route: '/WorkFlow/Design',
              },
              {
                title: 'Edit Work Flow',
                route: '/WorkFlow/EditWorkFlow',
              },
              {
                title: 'Delete WorkFlow',
                route: '/WorkFlow/DeleteWorkFlow',
              },
              {
                title: 'Debug',
                route: '/Integerator/Configuration',
              },
              {
                title: 'Production',
                route: '/Integerator/Configuration',
              },
            ],
            },
            {
              title: 'Integrators',
              data_toggle: 'Integerator_isOpen',

              childs: [
                {
                  title: 'Configuration',
                  route: '/Integerator/Configuration',
                },
              ],
            },
            ],
        },
                          /************************************ DESKTOP *********************************/
        {
          title: 'Desktop',
          data_toggle: 'Desktop_isOpen',
          childs: [
            {
              title: 'Repository',
              data_toggle: 'repository_isOpen',
              childs: [
                {
                  title: 'Create New repository',
                  route: '/Repository/CreateRepository',
                },
                {
                  title: 'Rename Repository',
                  route: '/Repository/RenameRepository',
                },
                {
                  title: 'Delete Repository',
                  route: '/Repository/DeleteRepository',
                },
                {
                  title: 'Find Repository',
                  route: '/Repository/FindRepository',
                },
              ],
            },
            {
              title: 'Documents',
              data_toggle: 'Document_isOpen',
              childs: [
                {
                  title: 'Upload Document',
                  route: '/Documents/UploadDocument',
                },
                {
                  title: 'Delete Document',
                  route: '/Documents/DeleteDocument',
                },
                {
                  title: 'Edit Document',
                  route: '/Documents/EditDocument',
                },
                {
                  title: 'Find Document',
                  route: '/Documents/FindDocument',
                },
                {
                  title: 'Bookmark Document',
                  route: '/Documents/BookmarkDocument',
                },
                {
                  title: 'Copy Document',
                  route: '/Documents/CopyDocument',
                },
                {
                  title: 'Move Document',
                  route: '/Documents/MoveDocument',
                },
                {
                  title: 'Download Document',
                  route: '/Documents/DownloadDocument',
                },
                {
                  title: 'Create Document Shortcut',
                  route: '/Documents/CreateDocumentShortcut',
                }
              ],
            },
            {
              title: 'Search',
              data_toggle: 'Search_isOpen',
              childs: [
                {
                  title: 'Search Document',
                  route: '/Search/Search',
                }
              ],
            },
            {
              title: 'Recycle Bin',
              data_toggle: 'RecycleBin_isOpen',

              childs: [
                {
                  title: 'Restore File/Folder',
                  route: '/RecycleBin/Restore_File_Folder',
                },
                {
                  title: 'Empty Recycle Bin',
                  route: '/RecycleBin/EmptyRecycleBin',
                },
            ],
            },
            {
              title: 'Search Results',
              data_toggle: 'SearchResults_isOpen',
              childs: [ 
                {
                title: 'Search Results',
                route: '/SearchResults/SearchResults',
              }
            ]
            },
          ],
        },
                    /************************************ ADVANCE SEARCH *********************************/
        {
          title: 'Advance Search',
          data_toggle: 'AdvanceSearch_isOpen',
          childs: [
            {
              title: 'Contextual Search',
              data_toggle: 'ContextualSearch_isOpen',
              childs: [
                {
                  title: 'Contextual Search',
                  route: '/AdvanceSearch/ContextualSearch',
                },
              ],
            },
            {
              title: 'Search By Date',
              data_toggle: 'SearchByDate_isOpen',
              childs: [
                {
                  title: 'Search By Date',
                  route: '/AdvanceSearch/SearchByDate',
                },
              ],
            },
            {
              title: 'Search By Template',
              data_toggle: 'SearchByTemplate_isOpen',
              childs: [
                {
                  title: 'Search By Template',
                  route: '/AdvanceSearch/SearchByTemplate',
                },
              ],
            },
          ]
        }
      ]
    }
}
  
  /***************  Side Nav Toggles *************/

  /** Toggle ***/

  toggleSideNav = e => {
    // e.preventDefault()
    let { toggle } = e.target.closest('div').dataset
    this.setState(prevState => ({
      [toggle]: !prevState[toggle],
    }))
  }

  render() {
    
  let side_bar_filtered =  this.state.side_bar.filter((menu) =>{return menu.title.toLowerCase().indexOf(this.props.searchString.toLowerCase())!== -1})
    
    return (
    <StyledSidebar className="sidebar-wrapper">
      <div className="sidebar">
        {side_bar_filtered.map((value, index) => {
          return (
            <>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                }}
                data-toggle={value.data_toggle}
                onClick={e => this.toggleSideNav(e)}
              >
                <h5>{value.title}</h5>
                <img
                  src={svgRightArrow}
                  style={{
                    height: '25px',
                    transition: '475ms',
                    transform: `rotate(${
                      this.state[value.data_toggle] ? 90 : 0
                    }deg)`,
                  }}
                  alt="right arrow"
                />
              </div>
              {value.childs.length > 0 && this.state[value.data_toggle] && (
                <ul className="sidenav">
                  <li>
                    {value.childs.map((value, index) => {
                      return (
                        <div key={index}>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              cursor: 'pointer',
                            }}
                            data-toggle={value.data_toggle}
                            onClick={e => this.toggleSideNav(e)}
                          >
                            <h6>{value.title}</h6>
                            <img
                              src={svgRightArrow}
                              style={{
                                height: '15px',
                                transition: '475ms',
                                transform: `rotate(${
                                  this.state[value.data_toggle] ? 90 : 0
                                }deg)`,
                              }}
                              alt="right arrow"
                            />
                          </div>
                          {value.childs.length > 0 &&
                            this.state[value.data_toggle] && (
                              <ul>
                                {value.childs &&
                                  value.childs.map((value, key) => {
                                    return (
                                      <li className="list-group" key={key}>
                                        <Link to={value.route}>
                                          <small>{value.title}</small>
                                        </Link>
                                      </li>
                                    )
                                  })}
                                <br />
                              </ul>
                            )}
                        </div>
                      )
                    })}
                  </li>
                  <br />
                </ul>
              )}
            </>
          )
        })}
      </div>
      </StyledSidebar>
    )
  }
}

export default  SideNavigation