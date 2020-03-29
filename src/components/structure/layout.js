import React, { createContext } from 'react'
import Header from './Header/Header'
import SideBar from '../Sidebar'
import './index.css'
import './darkmode.css'
import 'prismjs/themes/prism-okaidia.css'

class Layout extends React.Component {
  
  state = { search_string: "" }

  handleChange = (e) => {
    this.setState({
      search_string: e.target.value
    })
  }
  
  render() { 
  
    return (  
      <>
           <Header StoreValue = {this.handleChange} />
      
           <div className="main-wrapper">
             <SideBar searchString = {this.state.search_string} />
      
             <div className="main">{this.props.children}</div>
           
           </div>
         </>
    )
  }
}
 
export default Layout;




