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
              <div className='image-wrapper'>
                <img className='pic' src="https://techcrunch.com/wp-content/uploads/2019/05/GettyImages-1129377183.jpg?w=730&crop=1"></img> 
                <img className='pic' src="https://images.readwrite.com/wp-content/uploads/2018/10/annie-spratt-608001-unsplash-825x500.jpg"></img>
              </div>
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
              // Token={process.env.NEWS_API_KEY}
            
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