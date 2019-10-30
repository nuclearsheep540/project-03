import React from 'react'
import Select from 'react-select'


const RequestsForm = ( { languages, frameworks, handleFramework, handleLanguage, handleChange, handleSubmit, data } ) => {
  console.log('dataaaaaaa',data)
  return (
    <form onSubmit={handleSubmit}>

      <div className="row">
        <div className="field six-columns">
          <label name="exampleRecipientInput" type='text'>Title</label>
          <input
            className="u-full-width"
            placeholder="Title"
            name='title'
            value={data.title}
            onChange={handleChange}
          >
          </input>
        </div>
      </div>     


      <label name="exampleMessage">Description</label>
      <textarea 
        className="u-full-width" 
        placeholder="Description" 
        name="description"
        value={data.description} 
        onChange={handleChange}>
      </textarea>
      
      <div className="field">
        <label className="label">Framework</label>
        <div className="control">
          <Select
            name="frameworks"
            options={frameworks}
            isMulti={false}
            onChange={handleFramework}
            value={data.frameworks}
          />
        </div>
      </div>
    
      <div className="six columns">
        <label name="exampleRecipientInput">Languages</label>
        <div className="control">
          <Select
            name="languages"
            options={languages}
            isMulti={false}
            onChange={handleLanguage}
            value={data.languages}
          />
        </div>
        <button type="submit">poop</button>
      </div>
    
    </form>  
  )
}
export default RequestsForm