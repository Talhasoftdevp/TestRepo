import React from 'react'
import Layout from '../../components/structure/layout'
import EditTemplate from '../../assets/Templates/EditTemplate.mp4'

class Edit_Template extends React.Component {
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
          <h3>To Edit Template, please follow below mention steps:</h3>
          <ul>
            <h6>Step # 1: Double Click on the Template ,to whom you want to edit</h6>
            <h6>Step # 2: Change Field Values , add new fields, reassign rights  of template fields to groups or add more groups as per your needs</h6>
          </ul>

          <video controls>
            <source src={EditTemplate} type="video/mp4" />
          </video>
        </div>
      </Layout>
    )
  }
}
export default Edit_Template
