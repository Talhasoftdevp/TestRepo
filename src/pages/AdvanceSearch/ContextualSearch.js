import React from 'react'
import Layout from '../../components/structure/layout'
import ContextualSearch from '../../assets/Documents/ContextualSearch.mp4'

class Contextual_Search extends React.Component {
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
          <h3>To Perform Contextual Search (Content/Title/Keywords), please follow below mention steps:</h3>
          <ul>
            <h6>Step # 1: Click on Search Options, Located at Side Navigation Bar located in Advance Search Tab</h6>
            <h6>Step # 2: Tickmark your Choice, either you want to perform Search by Content Wise/Title Wise/Keyword Wise </h6>
            <h6>Step # 3: Click on Advance Search Bar</h6>
            <h6>Step # 4: Input the name of document, you want to search</h6>
            <h6>Step # 5: Press Enter to complete Operation</h6>
          </ul>

          <video controls>
            <source src={ContextualSearch} type="video/mp4" />
          </video>
        </div>
      </Layout>
    )
  }
}
export default Contextual_Search
