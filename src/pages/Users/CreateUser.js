import React from 'react'
import Layout from '../../components/structure/layout'
import CreateUser from '../../assets/Users/CreateUser.mp4'

class Create_New_User extends React.Component {
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
    // If user is on a dodgy connection, don't load the video at all
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
          <h3>To Create New User, please follow below mention steps:</h3>
          <ul>
            <h6>Step # 1: Proceed to Settings</h6>
            <h6>Step # 2: Click on Users</h6>
            <h6>Step # 3: On users screen proceed to "+" sign</h6>
            <h6>
              Step # 4: Input in Manadatory Fields, Provide User Details &
              assign the Group with desired Rights
            </h6>
            <h6>Step # 5: Click on save to Successfully create User</h6>
          </ul>

          <video controls>
            <source src={CreateUser} type="video/mp4" />
          </video>
        </div>
      </Layout>
    )
  }
}
export default Create_New_User
