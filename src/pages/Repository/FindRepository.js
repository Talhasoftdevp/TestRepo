import React from 'react'
import Layout from '../../components/structure/layout'
import FindRepository from '../../assets/Repositories/FindRepository.mp4'

class Find_Repository extends React.Component {
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
          <h3>To Find Repository, please follow below mention steps:</h3>
          <ul>
            <h6>Step # 1: Click on First Icon of Nav Bar at top</h6>
            <h6>Step # 2: In "Make Folder Search" Window,in search bar, type your folder name</h6>
            <h6>Step # 3: Click on Search to proceed</h6>
          </ul>

          <video controls>
            <source src={FindRepository} type="video/mp4" />
          </video>
        </div>
      </Layout>
    )
  }
}
export default Find_Repository
