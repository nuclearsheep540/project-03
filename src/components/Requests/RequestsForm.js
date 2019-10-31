import React from 'react'
import Select from 'react-select'


const RequestsForm = ({ languages, frameworks, handleFramework, handleLanguage, handleChange, handleSubmit, data }) => {
  console.log('dataaaaaaa', data)
  return (
    <div className=''>
      <section className='section'>
        <form onSubmit={handleSubmit}>
          <div className='content'>

            
            <div className="u-full-width">
              <label name="exampleRecipientInput" type='text'>Title</label>
              <input
                className="input-area"
                placeholder="Title"
                name='title'
                value={data.title}
                onChange={handleChange}
              >
              </input>
            </div>


            <div className="u-full-width">
              <label name="exampleMessage">Description</label>
              <textarea
                className="input-area"
                placeholder="Description"
                name="description"
                value={data.description}
                onChange={handleChange}>
              </textarea>
            </div>


            <div className="input-area">
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


            <div className="input-area">
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
            </div>
            
            
            <button type="submit" className=''>Submit</button>

          </div>
        </form>
      </section>
    </div>
  )
}
export default RequestsForm