import React from 'react'
import Layout from '../../components/structure/layout'
import MoveDocument from '../../assets/Documents/MoveDocument.mp4'

class Move_Docuemnt extends React.Component {
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
          <h3>To Move Document, please follow below mention steps:</h3>
          <ul>
            <h6>Step # 1: Right Click on the Docuemnt ,to whom you want to Move</h6>
            <h6>Step # 2: Click on Move icon</h6>
            <h6>Step # 3: Proceed to the Directory, where you want to Move your  Document</h6>
            <h6>Step # 4: Right Click and click on paste to complete operation</h6>
          </ul>

          <video controls>
            <source src={MoveDocument} type="video/mp4" />
          </video>
        </div>
      </Layout>
    )
  }
}
export default Move_Docuemnt
