import React from 'react'

const Home = () => (
  <div className='container-full'>


    <div className='hero'>

      <p className='logo heroTitle'>Skill Swap </p>

    </div>




    <section className='rows'>
      <div className='content'>
        <h2 className='center'> Welcome To SkillSwap! </h2>
        <p className='center'> Join The Community </p>
        <p>
            Skill swap is an online and face-to-face community for requestors and contributors to collaborate on all things tech!
          <br />
            Requesters can gain knowledge by posting their language/framework queries or browsing our list of contributors to find someone with the skills that match their query
            Contributors can offer their help by running small group sessions on their subject knowledge or offer to meet their requestor and share their knowledge in exchange for a cup of coffee or lunch
          <br />
            
          <br />  
            Skill swap is for junior developers to reach out to experienced individuals in a particular programming language.  Also, experienced professionals can practice their teaching skills by running small tutorial sessions on framework related problems.
          <br />  
             This community eliminates the intimidation factor that comes with other platforms and encourages in-person collaboration in an otherwise remote line of work.
          <br />  
            Register above to join our community and create your first request.
        </p>
      </div>
    </section>

    <section className='rows'>
      <div className='content'>
        <h2 className='center'> More Things! </h2>
        <p className='center'> Why all the things are awesome </p>
      </div>
    </section>


    <footer className='center bottom'>
      Made with &lt;3 by Matt Davey, Lydia Dalrymple, Shani MCDonald @ GA London 2019
    </footer>
  </div>
)

export default Home