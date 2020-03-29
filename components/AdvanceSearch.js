import React from 'react'
import { Link } from 'gatsby'
import svgRightArrow from '../images/right-arrow.svg'
// import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.css'

export default class AdvanceSearch extends React.Component {
  state = {
    AdvanceSearch_isOpen: true,
  }
  /********************************************  Side Nav Toggle ************************************/

  AdvanceSearch_toggleOpen = () => {
    this.setState(prevState => ({
      AdvanceSearch_isOpen: !prevState.AdvanceSearch_isOpen,
    }))
  }

  render() {
    return (
      <div>
        {/********************************************  Advance Search ************************************/}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            cursor: 'pointer',
          }}
          onClick={this.AdvanceSearch_toggleOpen}
        >
          <h5>Advance Search</h5>
          <img
            src={svgRightArrow}
            style={{
              height: '25px',
              transition: '475ms',
              transform: `rotate(${this.state.AdvanceSearch_isOpen ? 90 : 0}deg)`,
            }}
            alt="right arrow"
          />
        </div>
        {this.state.AdvanceSearch_isOpen && (
          <ul className="sidenav">
            <li>
              <ul >
                <li className="list-group">
                  <Link to="/AdvanceSearch/ContextualSearch">
                    <small>Contextual Search</small>
                  </Link>
                </li>
                <li className="list-group">
                  <Link to="/AdvanceSearch/SearchByDate">
                    <small>Search By Date</small>
                  </Link>
                </li>
                <li className="list-group">
                  <Link to="/AdvanceSearch/SearchByTemplate">
                    <small>Search By Template</small>
                  </Link>
                </li>
                <br />
              </ul>
            </li>
            <br />
          </ul>
        )}
      </div>
    )
  }
}


