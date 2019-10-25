import React from 'react'


const RequestNew = () => (

  <form>
    <div className="row">
      <div className="six columns">
        <label name="exampleRecipientInput" type='text'>Title</label>
        <input
          className="u-full-width"
          placeholder="Title"
          type='text'
          name='title'
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

      <label name="exampleMessage">Description</label>
      <textarea className="u-full-width" placeholder="Description" name="description" id="exampleMessage"></textarea>

    </div>
    <button type='submit'>Send request</button>

  </form>



)

export default RequestNew