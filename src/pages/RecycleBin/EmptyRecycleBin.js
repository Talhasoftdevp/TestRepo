import React from 'react'
import Layout from '../../components/structure/layout'
// import CreateGroup from '../../assets/CreateGroup.mp4'

class EmptyRecycleBin extends React.Component {
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
    // If Group is on a dodgy connection, don't load the video at all
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
          <h3>To Empty Recycle Bin, Please follow below mention steps:</h3>
          <ul>
            <h6>Step # 1: Click on Recycle Bin, located at Side Navigation Bar</h6>
            <h6>Step # 2: Right Click on Recycle Bin, and click on Empty Recycle Bin </h6>
          </ul>


          {/* <video controls>
            <source src={CreateGroup} type="video/mp4" />
          </video> */}
        </div>
      </Layout>
    )
  }
}
export default EmptyRecycleBin
