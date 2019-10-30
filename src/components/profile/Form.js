import React from 'react'
import Select from 'react-select'

const Form = ({ handleChange, handleFramework, handleLanguage, handleSubmit, langOptions, avatarOptions, handleAvatar, frameOptions, userProfile }) => {
  
  
  return (
    <div>
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
                value={userProfile.firstName}
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
                value={userProfile.lastName}
                onChange={handleChange}
              >
              </input>
            </div>


            <div className="input-area">
              <label name="exampleRecipientInput" type='text'>Avatar</label>
              <Select
                options={avatarOptions}
                isMulti={false}
                onChange={handleAvatar}
                name='image'
              />
            </div>


            <div className="input-area">
              <label name="exampleRecipientInput" type='number'>Age</label>
              <input
                className="u-full-width"
                placeholder="Age"
                type='number'
                name='age'
                value={userProfile.age}
                onChange={handleChange}
              >
              </input>
            </div>


            <div className="input-area"> 
              <label name="exampleRecipientInput" type='text'>City</label>
              <input
                className="u-full-width"
                placeholder="Location"
                type='text'
                name='location'
                value={userProfile.location}
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
              >
              </input>
            </div>


            <div className="six columns"> 
              <label name="exampleRecipientInput">Languages</label>
              <div className="control">
                <Select
                  options={langOptions}
                  isMulti={true}
                  onChange={handleLanguage}
                  name='languages'
                />
              </div>
            </div>



            <div className="field">
              <label className="label">Framework</label>
              <div className="control">
                <Select
                  options={frameOptions}
                  isMulti={true}
                  onChange={handleFramework}
                  name='frameworks'
                />
              </div>
            </div>


            <div className="input-area">
              <label name="exampleRecipientInput" type='text'>If applicable, enter qualifications</label>
              <input
                className="u-full-width"
                placeholder="qualifications"
                type='text'
                name='qualifications'
              >
              </input>
            </div>
          </div>


          <button type='submit' className='center'>Submit</button>

        </form>
      </section>
    </div>
  )


}



   


export default Form