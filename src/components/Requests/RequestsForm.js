import React from 'react'
import Select from 'react-select'


class RequestsForm extends React.Component {
  constructor() {
    super()

    this.languages = [
      { name: 'languages', value: 'javascript', label: 'Javascript' },
      { name: 'languages', value: 'C#', label: 'C#' },
      { name: 'languages', value: 'python', label: 'Python' },
      { name: 'languages', value: 'java', label: 'Java' },
      { name: 'languages', value: 'rust', label: 'Rust' },
      { name: 'languages', value: 'go', label: 'Go' },
      { name: 'languages', value: 'elixr', label: 'Elixr' },
      { name: 'languages', value: 'ruby', label: 'Ruby' },
      { name: 'languages', value: 'kotlin', label: 'Kotlin' },
      { name: 'languages', value: 'typescript', label: 'Typescript' },
      { name: 'languages', value: 'C++', label: 'C++' },
      { name: 'languages', value: 'php', label: 'PHP' },
      { name: 'languages', value: 'css', label: 'CSS' }
    ],
    this.frameworks = [
      { name: 'frameworks', value: 'angular', label: 'Angular' },
      { name: 'frameworks', value: 'django', label: 'Django' },
      { name: 'frameworks', value: 'ruby on rails', label: 'Ruby On Rails' },
      { name: 'frameworks', value: 'asp.net', label: 'ASP.net' },
      { name: 'frameworks', value: 'meteor', label: 'Meteor' },
      { name: 'frameworks', value: 'flask', label: 'Flask' },
      { name: 'frameworks', value: 'reactjs', label: 'ReactJS' },
      { name: 'frameworks', value: 'phoenix', label: 'Phoenix' },
      { name: 'frameworks', value: 'spring', label: 'Spring' },
      { name: 'frameworks', value: 'play', label: 'Play' },
      { name: 'frameworks', value: 'express', label: 'Express' },
      { name: 'frameworks', value: 'vuejs', label: 'Vue.js' },
      { name: 'frameworks', value: 'cakephp', label: 'CakePHP' },
      { name: 'frameworks', value: 'bootstrap', label: 'Bootstrap' },
      { name: 'frameworks', value: 'bulma', label: 'Bulma' }
    ]
  }



  render () {
    console.log(this.props)
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <div className="row">
            <div className="field six-columns">
              <label name="exampleRecipientInput" type='text'>Title</label>
              <input
                className="u-full-width"
                placeholder="Title"
                name='title'
                value={this.props.data.title}
                onChange={this.props.handleChange}
              >
              </input>
            </div>
            

            <div className="field">
              <label className="label">Framework</label>
              <div className="control">
                <Select
                  key={this.props.data.id}
                  options={this.frameworks}
                  isMulti={true}
                  onChange={this.props.handleFramework}
                  

                />
              </div>
            </div>


            <div className="six columns">
              <label name="exampleRecipientInput">Languages</label>
              <div className="control">
                <Select
                  key={this.props.data.id}
                  options={this.languages}
                  isMulti={true}
                  onChange={this.props.handleLanguage}
                />
              </div>
            </div>
          
            <label name="exampleMessage">Description</label>
            <textarea 
              className="u-full-width" 
              placeholder="Description" 
              name="description"
              value={this.props.data.description} 
              onChange={this.props.handleChange}>
            </textarea>
          </div>
          <button type='submit'>Send request</button>
        </form>
      </div> 

    )
  }
 
}
  

export default RequestsForm
