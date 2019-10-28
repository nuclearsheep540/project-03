import React from 'react'
import Select from 'react-select'


class RequestForm extends React.component {
  constructor() {
    super()

    this.state = {

      formData: {
        frameworks: [''],
        languages: ['']
      },

    
      languages: [
        { value: 'javascript', label: 'Javascript' },
        { value: 'C#', label: 'C#' },
        { value: 'python', label: 'Python' },
        { value: 'java', label: 'Java' },
        { value: 'rust', label: 'Rust' },
        { value: 'go', label: 'Go' },
        { value: 'elixr', label: 'Elixr' },
        { value: 'ruby', label: 'Ruby' },
        { value: 'kotlin', label: 'Kotlin' },
        { value: 'typescript', label: 'Typescript' },
        { value: 'C++', label: 'C++' },
        { value: 'php', label: 'PHP' },
        { value: 'css', label: 'CSS' }
      ],
      frameworks: [
        { value: 'angular', label: 'Angular' },
        { value: 'django', label: 'Django' },
        { value: 'ruby on rails', label: 'Ruby On Rails' },
        { value: 'asp.net', label: 'ASP.net' },
        { value: 'meteor', label: 'Meteor' },
        { value: 'flask', label: 'Flask' },
        { value: 'reactjs', label: 'ReactJS' },
        { value: 'phoenix', label: 'Phoenix' },
        { value: 'spring', label: 'Spring' },
        { value: 'play', label: 'Play' },
        { value: 'express', label: 'Express' },
        { value: 'vuejs', label: 'Vue.js' },
        { value: 'cakephp', label: 'CakePHP' },
        { value: 'bootstrap', label: 'Bootstrap' },
        { value: 'bulma', label: 'Bulma' }
      ]
    }
    this.handleMultiSelect = this.handleMultiSelect.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }


  handleMultiSelect(selected) {
  
    if (!selected) {
      return this.setState({ formData: { ...this.state.formData, languages: [], frameworks: [] } })
    }
    console.log('what the item input kicks out', selected)
    const frameWorkSelect = selected.map(item => item.value)
    const languagesSelect = selected.map(item => item.value)
    console.log('what i wnat to put in state', languagesSelect)
    console.log('what i wnat to put in state', frameWorkSelect)
    
    const formData = { ...this.state.formData, frameWorkSelect, languagesSelect }
    this.setState({ formData })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('submitting this form')
    console.table(this.state)
  }


  render () {
    console.log(this.state.formData)
    return (
      <div>
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
            

            <div className="field">
              <label className="label">Framework</label>
              <div className="control">
                <Select 
                  options={this.frameworks}
                  isMulti
                  onChange={this.handleMultiSelect}
                />
              </div>
            </div>


            <div className="six columns">
              <label name="exampleRecipientInput">Languages</label>
              <div className="control">
                <Select 
                  options={this.languages}
                  isMulti
                  onChange={this.handleMultiSelect}
                />
              </div>
            </div>
          
            <label name="exampleMessage">Description</label>
            <textarea className="u-full-width" placeholder="Description" name="description" id="exampleMessage"></textarea>
          </div>
          <button type='submit'>Send request</button>
        </form>
      </div> 

    )
  }
 
}
  

export default RequestForm
