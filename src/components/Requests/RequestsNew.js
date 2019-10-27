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
          <option value="Option 4">Java</option>
          <option value="Option 5">Rust</option>
          <option value="Option 6">Go</option>
          <option value="Option 7">Elixr</option>
          <option value="Option 8">Ruby</option>
          <option value="Option 9">Kotlin</option>
          <option value="Option 10">Typescript</option>
          <option value="Option 11">C++</option>
          <option value="Option 12">PHP</option>

        </select>
      </div>

      <div className="six columns">
        <label name="exampleRecipientInput">Frameworks</label>
        <select className="u-full-width" id="exampleRecipientInput">
          <option value="Option 1">Angular Js</option>
          <option value="Option 2">Django</option>
          <option value="Option 3">Ruby on Rails</option>
          <option value="Option 4">ASP.NET</option>
          <option value="Option 5">Meteor</option>
          <option value="Option 6">Flask</option>
          <option value="Option 7">ReactJS</option>
          <option value="Option 8">Pheonix</option>
          <option value="Option 9">Spring</option>
          <option value="Option 10">PLAY</option>
          <option value="Option 11">Express</option>
          <option value="Option 12">Vue.js</option>
          <option value="Option 13">CakePHP</option>

        </select>
      </div>

      <label name="exampleMessage">Description</label>
      <textarea className="u-full-width" placeholder="Description" name="description" id="exampleMessage"></textarea>

    </div>
    <button type='submit'>Send request</button>

  </form>



)

export default RequestNew