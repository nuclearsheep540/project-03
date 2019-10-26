import React from 'react'


const ProfileForm = ({ profileData, handleChange, handleSubmit }) => (

  <section className="section">

    <form onSubmit={handleSubmit}>

      <div className="wrapper-two">

        <div className="input-area">
          <label name="exampleRecipientInput" type='text'>First name</label>
          <input
            className="u-full-width"
            placeholder="First name"
            type='text'
            name='firstName'
            value={profileData.firstName}
            onChange={handleChange}
          >
          </input>
        </div>


        <div className="input-area">
          <label name="exampleRecipientInput" type='text'>Last name</label>
          <input
            className="u-full-width"
            placeholder="Last name"
            type='text'
            name='lastName'
            value={profileData.lastName}
            onChange={handleChange}
          >
          </input>
        </div>


        <div className="input-area">
          <label name="exampleRecipientInput" type='text'>Image</label>
          <input
            className="u-full-width"
            placeholder="Profile picture"
            type='text'
            name='image'
            value={profileData.image}
            onChange={handleChange}
          >
          </input>
        </div>


        <div className="input-area">
          <label name="exampleRecipientInput" type='number'>Age</label>
          <input
            className="u-full-width"
            placeholder="Age"
            type='number'
            name='age'
            value={profileData.age}
            onChange={handleChange}
          >
          </input>
        </div>


        <div className="input-area">
          <label name="exampleRecipientInput" type='text'>Location</label>
          <input
            className="u-full-width"
            placeholder="Location"
            type='text'
            name='location'
            value={profileData.location}
            onChange={handleChange}
          >
          </input>
        </div>


        <div className="input-area">
          <label name="exampleRecipientInput" type='text'>Industry</label>
          <input
            className="u-full-width"
            placeholder="Industry"
            type='text'
            name='industry'
            value={profileData.industry}
            onChange={handleChange}
          >
          </input>
        </div>


        <div className="input-area">
          <label name="exampleRecipientInput">Languages</label>
          <select className="u-full-width" id="exampleRecipientInput" onChange={handleChange} value={profileData.language}>
            <option value="Option 1">Javascript</option>
            <option value="Option 2">C#</option>
            <option value="Option 3">Python</option>
          </select>
        </div>


        <div className="input-area">
          <label name="exampleRecipientInput">Frameworks</label>
          <select className="u-full-width" id="exampleRecipientInput" onChange={handleChange} value={profileData.frameworks}>
            <option value="Option 1">Angular Js</option>
            <option value="Option 2">Django</option>
            <option value="Option 3">Ruby on Rails</option>
          </select>
        </div>


        <div className="input-area">
          <label name="exampleRecipientInput" type='text'>If applicable, enter qualifications</label>
          <input
            className="u-full-width"
            placeholder="qualifications"
            type='text'
            name='qualifications'
            onChange={handleChange}
            value={profileData.qualification}
          >
          </input>
        </div>
      </div>


      <button type='submit' className='center'>Submit</button>

    </form>
  </section>
)

export default ProfileForm