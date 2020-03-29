import React from 'react';

class Header extends React.Component {
  
    
    render() { 
  
      return (
            <header
              style={{
                position: 'fixed',
                backgroundColor: 'rgb(232,232,232)',
                boxShadow:
                  '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
                height: '3.0rem',
                zIndex: '1',
                left: '0',
                right: '0',
              }}
            >
              <div
                style={{
                  paddingLeft: '1.05rem',
                  paddingRight: '1.05rem',
                  display: 'flex',
                  alignItems: 'center',
                  width: '150%',
                  height: '150%',
                }}
              >
                <h2
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '20%',
                    height: '150%',
                  }}
                >Silver Docs</h2>
                <h4
                  style={{
                    paddingLeft: '14.05rem',
                    paddingRight: '1.05rem',
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                  }}
                ><div className="searchBox">
                    <input
                      className="searchInput"
                      type="text"
                      aria-label="Search"
                      placeholder="Search Site..."
                      value ={this.props.search_string} 
                      onChange={this.props.StoreValue}
                       
                    />
                  </div></h4>
        
        
              </div>
            </header >
        
          )
    }
}
 
export default Header;