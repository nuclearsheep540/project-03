import React from 'react'
import Select from 'react-select'

const Form = ({ update, handleChange, handleFramework, handleLanguage, handleSubmit, handleIndustry, cityOptions, langOptions, avatarOptions, indieOptions, handleAvatar, handleCity, frameOptions, userProfile }) => {


  return (
    <div>
      <section className="section">
        <form onSubmit={update}>
          <div className="wrapper-two">

            <div className="input-area">
              <label name="exampleRecipientInput" type='text'>First name</label>
              <input
                className="u-full-width"
                placeholder="First name"
                type='text'
                name='firstName'
                value={userProfile.firstName || ''}
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
                value={userProfile.lastName || ''}
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
                value={userProfile.image[0]}
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
              <Select
                options={cityOptions}
                isMulti={false}
                onChange={handleCity}
                name='location'
                value={userProfile.location}
                
              />
            </div>

            <div className="input-area">
              <label name="exampleRecipientInput" type='text'>Industry</label>
              <Select
                options={indieOptions}
                isMulti={false}
                onChange={handleIndustry}
                name='fieldIndustry'
                value={userProfile.fieldIndustry}
              />
            </div>

            <div className="input-area"> 
              <label name="exampleRecipientInput">Languages</label>
              <div className="control">
                <Select
                  options={langOptions}
                  isMulti={true}
                  onChange={handleLanguage}
                  name='languages'
                  value={userProfile.languages}
                />
              </div>
            </div>

            <div className="input-area">
              <label className="label">Framework</label>
              <div className="control">
                <Select
                  options={frameOptions}
                  isMulti={true}
                  onChange={handleFramework}
                  name='frameworks'
                  value={userProfile.frameworks}
                />
              </div>
            </div>

            <div className="input-area">
              <label name="exampleRecipientInput" type='text'>Qualifications</label>
              <input
                className="u-full-width"
                placeholder="qualifications"
                type='text'
                name='qualifications'
                onChange={handleChange}
                value={userProfile.qualifications}
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