import React from 'react'
import { Link } from 'gatsby'
import svgRightArrow from '../images/right-arrow.svg'
// import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.css'

export default class Desktop extends React.Component {
  state = {
    Desktop_isOpen: true,
    repository_isOpen: true,
    Document_isOpen: true,
    Search_isOpen: true,
    RecycleBin_isOpen: true,
    SearchResults_isOpen: true,

    // repository_isClose: false
  }
  /********************************************  Side Nav Toggles ************************************/

  /*****  Desktop Toggle ********/

  Desktop_toggleOpen = () => {
    this.setState(prevState => ({
      Desktop_isOpen: !prevState.Desktop_isOpen,
    }))
  }

  /*****  repository Toggle ********/

  Repository_toggleOpen = () => {
    this.setState(prevState => ({
      repository_isOpen: !prevState.repository_isOpen,
      // repository_isClose: !prevState.repository_isOpen,
    }))
  }

  /*****  Document Toggle ********/

  Document_toggleOpen = () => {
    this.setState(prevState => ({
      Document_isOpen: !prevState.Document_isOpen,
    }))
  }

  /*****  Search Toggle ********/

  Search_toggleOpen = () => {
    this.setState(prevState => ({
      Search_isOpen: !prevState.Search_isOpen,
    }))
  }

  /*****  Recycle Bin Toggle ********/

  RecycleBin_toggleOpen = () => {
    this.setState(prevState => ({
      RecycleBin_isOpen: !prevState.RecycleBin_isOpen,
    }))
  }

  /*****  Search Results Toggle ********/

  SearchResults_toggleOpen = () => {
    this.setState(prevState => ({
      SearchResults_isOpen: !prevState.SearchResults_isOpen,
    }))
  }


  render() {
    return (
      <div>
        {/*************************************************   Desktop ***********************************************/}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            cursor: 'pointer',
          }}
          onClick={this.Desktop_toggleOpen}
        >
          <h5>Desktop</h5>
          <img
            src={svgRightArrow}
            style={{
              height: '25px',
              transition: '475ms',
              transform: `rotate(${this.state.Desktop_isOpen ? 90 : 0}deg)`,
            }}
            alt="right arrow"
          />
        </div>
        {this.state.Desktop_isOpen && (
          <ul className="sidenav">
            <li>

              {/********************************************** Repository ************************************ */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                  }}
                  onClick={this.Repository_toggleOpen}
                >
                  <h6>Repository</h6>
                  <img
                    src={svgRightArrow}
                    style={{
                      height: '15px',
                      transition: '475ms',
                      transform: `rotate(${
                        this.state.repository_isOpen ? 90 : 0
                        }deg)`,
                    }}
                    alt="right arrow"
                  />
                </div>
                {this.state.repository_isOpen && (
                  <ul >
                    <li className="list-group">
                      <Link to="/Repository/CreateRepository">
                        <small>Create New repository</small>
                      </Link>
                    </li>
                    <li className="list-group">
                      <Link to="/Repository/RenameRepository">
                        <small>Rename Repository</small>
                      </Link>
                    </li>
                    <li className="list-group">
                      <Link to="/Repository/DeleteRepository">
                        <small>Delete Repository</small>
                      </Link>
                    </li>
                    <li className="list-group">
                      <Link to="/Repository/FindRepository">
                        <small>Find Repository</small>
                      </Link>
                    </li>
                    <br />
                  </ul>
                )}
              </div>
              {/********************************************** Documents ************************************ */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                  }}
                  onClick={this.Document_toggleOpen}
                >
                  <h6>Documents</h6>
                  <img
                    src={svgRightArrow}
                    style={{
                      height: '15px',
                      transition: '475ms',
                      transform: `rotate(${
                        this.state.Document_isOpen ? 90 : 0
                        }deg)`,
                    }}
                    alt="right arrow"
                  />
                </div>
                {this.state.Document_isOpen && (
                  <ul >
                    <li className="list-group">
                      <Link to="/Documents/UploadDocument">
                        <small>Upload Document</small>
                      </Link>
                    </li>
                    <li className="list-group">
                      <Link to="/Documents/DeleteDocument">
                        <small>Delete Document</small>
                      </Link>
                    </li>
                    <li className="list-group">
                      <Link to="/Documents/EditDocument">
                        <small>Edit Document</small>
                      </Link>
                    </li>
                    <li className="list-group">
                      <Link to="/Documents/FindDocument">
                        <small>Find Document</small>
                      </Link>
                    </li><li className="list-group">
                      <Link to="/Documents/BookmarkDocument">
                        <small>Bookmark Document</small>
                      </Link>
                    </li><li className="list-group">
                      <Link to="/Documents/CopyDocument">
                        <small>Copy Document</small>
                      </Link>
                    </li><li className="list-group">
                      <Link to="/Documents/MoveDocument">
                        <small>Move Document</small>
                      </Link>
                    </li><li className="list-group">
                      <Link to="/Documents/DownloadDocument">
                        <small>Download Document</small>
                      </Link>
                    </li>
                    <li className="list-group">
                      <Link to="/Documents/CreateDocumentShortcut">
                        <small>Create Document Shortcut</small>
                      </Link>
                    </li>
                    <br />
                  </ul>
                )}
              </div>
              {/********************************************** Search ************************************ */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                  }}
                  onClick={this.Search_toggleOpen}
                >
                  <h6>Search</h6>
                  <img
                    src={svgRightArrow}
                    style={{
                      height: '15px',
                      transition: '475ms',
                      transform: `rotate(${
                        this.state.Search_isOpen ? 90 : 0
                        }deg)`,
                    }}
                    alt="right arrow"
                  />
                </div>
                {this.state.Search_isOpen && (
                  <ul >
                    <li className="list-group">
                      <Link to="/Search/Search">
                        <small>Search Document</small>
                      </Link>
                    </li>

                    <br />
                  </ul>
                )}
              </div>
              {/********************************************** Recycle Bin ************************************ */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                  }}
                  onClick={this.RecycleBin_toggleOpen}
                >
                  <h6>Recycle Bin</h6>
                  <img
                    src={svgRightArrow}
                    style={{
                      height: '15px',
                      transition: '475ms',
                      transform: `rotate(${
                        this.state.RecycleBin_isOpen ? 90 : 0
                        }deg)`,
                    }}
                    alt="right arrow"
                  />
                </div>
                {this.state.RecycleBin_isOpen && (
                  <ul >
                    <li className="list-group">
                      <Link to="/RecycleBin/Restore_File_Folder">
                        <small>Restore File/Folder</small>
                      </Link>
                    </li>
                    <li className="list-group">
                      <Link to="/RecycleBin/EmptyRecycleBin">
                        <small>Empty Recycle Bin</small>
                      </Link>
                    </li>
                    <br />
                  </ul>
                )}
              </div>
              {/********************************************** Search Results ************************************ */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                  }}
                  onClick={this.SearchResults_toggleOpen}
                >
                  <h6>Search Results</h6>
                  <img
                    src={svgRightArrow}
                    style={{
                      height: '15px',
                      transition: '475ms',
                      transform: `rotate(${
                        this.state.SearchResults_isOpen ? 90 : 0
                        }deg)`,
                    }}
                    alt="right arrow"
                  />
                </div>
                {this.state.SearchResults_isOpen && (
                  <ul >
                    <li className="list-group">
                      <Link to="/SearchResults/SearchResults">
                        <small>Search Results</small>
                      </Link>
                    </li>
                    <br />
                  </ul>
                )}
              </div>
            </li>
            <br />
          </ul>
        )}
      </div>
    )
  }
}
