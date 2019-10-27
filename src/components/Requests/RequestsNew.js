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
          <option value="Option 1">none</option>
          <option value="Option 2">Javascript</option>
          <option value="Option 3">C#</option>
          <option value="Option 4">Python</option>
          <option value="Option 5">Java</option>
          <option value="Option 6">Rust</option>
          <option value="Option 7">Go</option>
          <option value="Option 8">Elixr</option>
          <option value="Option 9">Ruby</option>
          <option value="Option 10">Kotlin</option>
          <option value="Option 11">Typescript</option>
          <option value="Option 12">C++</option>
          <option value="Option 13">PHP</option>

        </select>
      </div>

      <div className="six columns">
        <label name="exampleRecipientInput">Frameworks</label>
        <select className="u-full-width" id="exampleRecipientInput">
          <option value="Option 1">none</option>
          <option value="Option 2">Angular Js</option>
          <option value="Option 3">Django</option>
          <option value="Option 4">Ruby on Rails</option>
          <option value="Option 5">ASP.NET</option>
          <option value="Option 6">Meteor</option>
          <option value="Option 7">Flask</option>
          <option value="Option 8">ReactJS</option>
          <option value="Option 9">Pheonix</option>
          <option value="Option 10">Spring</option>
          <option value="Option 11">PLAY</option>
          <option value="Option 12">Express</option>
          <option value="Option 13">Vue.js</option>
          <option value="Option 14">CakePHP</option>

        </select>
      </div>

      <label name="exampleMessage">Description</label>
      <textarea className="u-full-width" placeholder="Description" name="description" id="exampleMessage"></textarea>

    </div>
    <button type='submit'>Send request</button>

  </form>



)

export default RequestNew