import React from 'react'
import Layout from '../../components/structure/layout'
import RenameRepository from '../../assets/Repositories/RenameRepository.mp4'

class Rename_Repository extends React.Component {
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
    // If Repository is on a dodgy connection, don't load the video at all
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
          <h3>To Rename Repository, please follow below mention steps:</h3>
          <ul>
            <h6>Step # 1: Right Click on the Repository ,to whom you want to rename</h6>
            <h6>Step # 2: assign new name to your folder</h6>
          </ul>

          <video controls>
            <source src={RenameRepository} type="video/mp4" />
          </video>
        </div>
      </Layout>
    )
  }
}
export default Rename_Repository
