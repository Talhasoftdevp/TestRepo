import React from 'react'
import Layout from '../../components/structure/layout'
import BookmarkDocument from '../../assets/Documents/BookmarkDocument.mp4'

class Bookmark_Docuemnt extends React.Component {
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
          <h3>To Bookmark Document, please follow below mention steps:</h3>
          <ul>
            <h6>Step # 1: Right Click on the Docuemnt ,to whom you want to Bookmark</h6>
            <h6>Step # 2: Click on Bookmark icon, to proceed</h6>
          </ul>

          <video controls>
            <source src={BookmarkDocument} type="video/mp4" />
          </video>
        </div>
      </Layout>
    )
  }
}
export default Bookmark_Docuemnt
