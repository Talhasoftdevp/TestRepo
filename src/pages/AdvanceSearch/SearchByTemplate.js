import React from 'react'
import Layout from '../../components/structure/layout'
import SearchByTemplate from '../../assets/Documents/SearchByTemplate.mp4'

class Search_By_Template extends React.Component {
  state = {
    loadVideo: true,
  }

  handleVideoClick = e => {
    e.target.pause()
    e.target.currentTime = 0
    e.target.load()
    e.target.play()
  }

  componentDidMount() {
    // If Docuemnt is on a dodgy connection, don't load the video at all
    if ('connection' in navigator) {
      if (navigator.connection.downlink < 5) {
        this.setState({ loadVideo: false })
      }
    }
  }
  render() {
    // const posts = this.props.data.allMarkdownRemark.edges
    const { loadVideo } = this.state

    return (
      <Layout>
        <div>
          <h3>To Perform Searching By Template Wise, please follow below mention steps:</h3>
          <ul>
            <h6>Step # 1: Click on Template, Located at Side Navigation Bar</h6>
            <h6>Step # 2: Select Field Values from their respective drop downs and click on Apply</h6>
            <h6>Step # 3: Click on Advance Search Bar</h6>
            <h6>Step # 4: Input the name of document, you want to search</h6>
            <h6>Step # 5: Press Enter to complete Operation</h6>
          </ul>

          <video controls>
            <source src={SearchByTemplate} type="video/mp4" />
          </video>
        </div>
      </Layout>
    )
  }
}
export default Search_By_Template
