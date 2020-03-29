import React from 'react'
import Layout from '../../components/structure/layout'
// import CreateGroup from '../../assets/CreateGroup.mp4'

class Restore_File_Folder extends React.Component {
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
          <h3>To Restore File/Folder, Please follow below mention steps:</h3>
          <ul>
            <h6>Step # 1: Click on Recycle Bin, located at Side Navigation Bar</h6>
            <h6>Step # 2: In Recycle Bin, Right Clcik on The File/Folder, you want to restore</h6>
            <h6>Step # 3: Clcik Restore to complete operation</h6>

          </ul>

          {/* <video controls>
            <source src={CreateGroup} type="video/mp4" />
          </video> */}
        </div>
      </Layout>
    )
  }
}
export default Restore_File_Folder
