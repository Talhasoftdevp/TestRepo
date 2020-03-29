import React from 'react'
import Layout from '../../components/structure/layout'
import CreateNewFolder from '../../assets/Repositories/CreateNewFolder.mp4'

class Create_New_Repository extends React.Component {
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
          <h3>To Create New Repository, please follow below mention steps:</h3>
          <ul>
            <h6>Step # 1: Proceed to Left Side Navigation Bar, and Right Click on DMS Repositories to create Main folder </h6>
            <h6>Step # 2: Or Right Click on existing folder to create sub folder</h6>
            <h6>Step # 3: Click on Create Folder</h6>
            <h6>Step # 4: Give Name to your folder</h6>

          </ul>

          <video controls>
            <source src={CreateNewFolder} type="video/mp4" />
          </video>
        </div>
      </Layout>
    )
  }
}
export default Create_New_Repository
