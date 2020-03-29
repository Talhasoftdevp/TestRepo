import React from 'react'
import Layout from '../../components/structure/layout'
import DeleteTemplate from '../../assets/Templates/DeleteTemplate.mp4'


class Delete_Template extends React.Component {
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
    // If Template is on a dodgy connection, don't load the video at all
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
          <h3>To Delete Template, please follow below mention steps:</h3>
          <ul>
            <h6>Step # 1: Click on the Template ,to whom you want to Delete</h6>
            <h6>Step # 2: Click on Trash icon, to proceed</h6>
          </ul>

          <video controls>
            <source src={DeleteTemplate} type="video/mp4" />
          </video>
        </div>
      </Layout>
    )
  }
}
export default Delete_Template