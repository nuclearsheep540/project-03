import React from 'react'

import Eventdisplay from './Eventdisplay'

class Home extends React.Component {







  render() {
    return (
      <div className='container-full'>


        <div className='hero'>

          <p className='logo heroTitle'>Skill Swap </p>

        </div>




        <section className='rows'>
          <div className='content'>
            <h2 className='center-welcome'> Welcome To SkillSwap </h2>
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
            <h2 className='center1'> Tech News! </h2>
            
            <Eventdisplay
            
            />

          </div>
        </section>


        <footer className='center'>
  Made with &lt;3 by Matt Davey, Lydia Dalrymple, Shani MCDonald @ GA London 2019
        </footer>
      </div>


    )



  }
  
}

export default Home