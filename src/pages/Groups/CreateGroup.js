import React from 'react'
import Layout from '../../components/structure/layout'
import CreateGroup from '../../assets/Groups/CreateNewGroup.mp4'

class Create_New_Group extends React.Component {
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
          <h3>To Create New Group, please follow below mention steps:</h3>
          <ul>
            <h6>Step # 1: Proceed to Settings</h6>
            <h6>Step # 2: Click on Groups</h6>
            <h6>Step # 3: On Groups screen proceed to "+" sign</h6>
            <h6>
              Step # 4: Input in Manadatory Fields, Provide Group Details &
              assign the Group with desired Rights
            </h6>
            <h6>Step # 5: Proceed to Directories Tab, select directory, to whom you want to assign roghts</h6>
            <h6>Step # 6: In Rights, tick mark the rights you want to assign to directory</h6>
            <h6>Step # 7: Click on "+" sign  to Successfully add that directory with rights</h6>
            <h6>Step # 8: Click on save to Successfully create Group</h6>
          </ul>

          <video controls>
            <source src={CreateGroup} type="video/mp4" />
          </video>
        </div>
      </Layout>
    )
  }
}
export default Create_New_Group
