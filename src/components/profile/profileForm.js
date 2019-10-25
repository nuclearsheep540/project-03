import React from 'react'

const ProfileForm = () => (
  <form>
    <div className="row">
      <div className="six columns">
        <label name="exampleRecipientInput" type='text'>First name</label>
        <input
          className="u-full-width"
          placeholder="First name"
          type='text'
          name='firstName'
        >
        </input>
      </div>
      <div className="six columns">
        <label name="exampleRecipientInput" type='text'>Last name</label>
        <input
          className="u-full-width"
          placeholder="Last name"
          type='text'
          name='lastName'
        >
        </input>
      </div>

      <div className="six columns">
        <label name="exampleRecipientInput" type='text'>Image</label>
        <input
          className="u-full-width"
          placeholder="Image"
          type='text'
          name='Image'
        >
        </input>
      </div>

      <div className="six columns">
        <label name="exampleRecipientInput" type='number'>Age</label>
        <input
          className="u-full-width"
          placeholder="Age"
          type='number'
          name='Age'
        >
        </input>
      </div>

      <div className="six columns">
        <label name="exampleRecipientInput" type='text'>Location</label>
        <input
          className="u-full-width"
          placeholder="Location"
          type='text'
          name='Location'
        >
        </input>
      </div>

      <div className="six columns">
        <label name="exampleRecipientInput" type='text'>Industry</label>
        <input
          className="u-full-width"
          placeholder="Industry"
          type='text'
          name='Industry'
        >
        </input>
      </div>


      <div className="six columns">
        <label name="exampleRecipientInput">Languages</label>
        <select className="u-full-width" id="exampleRecipientInput">
          <option value="Option 1">Javascript</option>
          <option value="Option 2">C#</option>
          <option value="Option 3">Python</option>
        </select>
      </div>

      <div className="six columns">
        <label name="exampleRecipientInput">Frameworks</label>
        <select className="u-full-width" id="exampleRecipientInput">
          <option value="Option 1">Angular Js</option>
          <option value="Option 2">Django</option>
          <option value="Option 3">Ruby on Rails</option>
        </select>
      </div>

      <div className="six columns">
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
    <button type='submit'>Submit</button>
  </form> // End of form




)

export default ProfileForm