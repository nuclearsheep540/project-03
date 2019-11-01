import React from 'react'
import axios from 'axios'

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      seeds: {}
    }

  }
  componentDidMount() {
    axios.get('/api/all')
      .then(res => this.setState({ seeds: res.data }))
      .then(console.log(this.state))
  }

  render() {
    if (!this.state.seeds) return null
    return (
      <div className='container-full'>
        <div className='hero'>
          <p className='logo heroTitle'>Skill Swap </p>
        </div>

        <section className='rows'>
          <div className='content'>
            <h2 className='center'> Welcome To SkillSwap </h2>
            <h4 className='center'> Join The Community! </h4>
            <br />
            <div className='center'>
              <p>
                Skill swap is an online and face-to-face community for requestors and contributors to collaborate on all things tech!
              </p>
              <p>
                Requesters can gain knowledge by posting their language/framework queries or browsing our list of contributors to find someone with the skills that match their query
              </p>
              <p>
                Contributors can offer their help by running small group sessions on their subject knowledge or offer to meet their requestor and share their knowledge in exchange for a cup of coffee or lunch
              </p>
            </div>
          </div>
        </section>

        <section className='rows'>
          <div className='content'>
            <h2 className='center'> There&apos;s More! </h2>
            <div className='center'>
              <p>
                Skill swap is for junior developers to reach out to experienced individuals in a particular programming language.  Also, experienced professionals can practice their teaching skills by running small tutorial sessions on framework related problems.
              </p>
              <p>
                This community eliminates the intimidation factor that comes with other platforms and encourages in-person collaboration in an otherwise remote line of work.
              </p>
              <p>
                Register above to join our community and create your first request.
              </p>
            </div>
          </div>
        </section>

        <footer className='center'>
          Made with &lt;3 by Matt Davey, Lydia Dalrymple, Shani MCDonald @ GA London 2019
        </footer>
      </div>
    )
  }
}