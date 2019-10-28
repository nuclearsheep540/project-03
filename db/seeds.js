const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const User = require('../models/User')
const Request = require('../models/Request')
const Profile = require('../models/Profile')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, db) => {
    if (err) return console.log(err)
    db.dropDatabase()
      .then(() => {
        return User.create([
          {
            firstName: 'Sarah',
            lastName: 'Parker',
            username: 'sarah125',
            email: 'sarah@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            firstName: 'Mary',
            lastName: 'Miller',
            username: 'mm2018',
            email: 'mary@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            firstName: 'Joseph',
            lastName: 'Tennant',
            username: 'jo_tennant',
            email: 'jo@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            firstName: 'Harry',
            lastName: 'Smith',
            username: 'harrys101',
            email: 'harry@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            firstName: 'Will',
            lastName: 'McCallum',
            username: 'will_is_great',
            email: 'will@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            firstName: 'Gregory',
            lastName: 'Dodd',
            username: 'greggs_pastry',
            email: 'greg@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            firstName: 'Octavia',
            lastName: 'Daly',
            username: 'taves99',
            email: 'octavia@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            firstName: 'Henry',
            lastName: 'Gateway',
            username: 'henners95',
            email: 'henry@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            firstName: 'Olly',
            lastName: 'Trant',
            username: 'ol_dawg',
            email: 'olly@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            firstName: 'Marcus',
            lastName: 'Simpson',
            username: 'msimpson54',
            email: 'marcus@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            firstName: 'John',
            lastName: 'Ramsden',
            username: 'jonorambo',
            email: 'john@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            firstName: 'Sally',
            lastName: 'Johnston',
            username: 'sal101',
            email: 'sally@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            firstName: 'Bob',
            lastName: 'Jones',
            username: 'bobby_be_back',
            email: 'bob@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            firstName: 'Tony',
            lastName: 'Morris',
            username: 'toni-italiano',
            email: 'toni@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            firstName: 'Rosie',
            lastName: 'Jenkins',
            username: 'rosie_cheeks',
            email: 'rosie@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          }

        ])
      })
      .then(users => {
        console.log(`${'users'.repeat(users.length)} created`)
        return Request.create([
          {
            title: 'React Help needed',
            framework: 'ReactJs',
            language: 'none',
            description: 'I need to complete a project for class which requires React.  I am having trouble with rendering components to the page.  Can anybody help me?',
            user: users[3]
          },
          {
            title: 'Building a Wordpress website',
            framework: 'none',
            language: 'PHP',
            description: 'I would like to create a Wordpress website for my portfolio which I understand requires knowledge of PHP.  I have never used it before.  I’d like to request some help with going through the basics and/or recommend any frameworks that work well.  If anyone can help me that would be great!',
            user: users[1]
          },
          {
            title: 'Creating a snake game',
            framework: 'none',
            language: 'Javascript',
            description: 'I have been tasked with creating a snake game which I have a week to complete.  The requirement is that I’m to only use vanilla Javascript which I don’t really know much about.  Has anyone done anything similar before and would be able to help me? Thanks in advance',
            user: users[8]
          },
          {
            title: 'Learning ASP.NET',
            framework: 'ASP.NET',
            language: 'none',
            description: 'Help needed!  I have been teaching myself C# over the past couple of months and I have been advised that to progress in an interview for a job that I would like to go for, I need to have a a basic understanding of how ASP.NET works.  Does anyone recommend any tutorials or have a working knowledge to help me out?',
            user: users[9]
          },
          {
            title: 'Has anyone ever used Phoenix?',
            framework: 'Pheonix',
            language: 'none',
            description: 'My upcoming bootcamp includes using Phoenix  and learning about handles multiple users?  Has anyone on here ever used it? Asking for a friend',
            user: users[10]
          },
          {
            title: 'Spring Help',
            framework: 'Spring',
            language: 'none',
            description: 'Hi all, I’m a junior developer where we use Java as a language.  I  believe that we’ll be using Spring as opposed to JSF and was wondering if anyone had time to sit down and go through some basics.  Hopefully just one meet up for a couple of hours should get me on track.  Thank you in advance.',user: users[6]
          },
          {
              
            title: 'CakePHP help',
            framework: 'CakePHP',
            language: 'none',
            description: 'I was wondering if anyone who uses CakePHP could help me out.  I have never used it before and I think it could be super helpful',
            user: users[14]
          },
          {
              
            title: 'Help with Flexbox',
            framework: 'none',
            language: 'CSS',
            description: 'I am requesting help on the CSS front.  I have been looking up flexbox but I\'m struggling when it comes to putting it into practice.  Has anyone ever worked with flexbox before?',
            user: users[0]
          },
          {
              
            title: 'Vanilla Javascript',
            framework: 'none',
            language: 'Javascript',
            description: 'Does anyone reccommend a place for tutorials on vanilla Javascript?  I would like to practice array methods in particular, but other basics too. I would like to learn but in a more interactive way as opposed to just reading.  Many thanks ',
            user: users[1]
          },
          {
              
            title: 'Bulma',
            framework: 'Bulma',
            language: 'CSS',
            description: 'I dont know about other people, but I REALLY struggle with CSS.  I\'ve heard about Bulma but I\'m struggling with how to link it to my project.  Does anyone have time to help me out?',
            user: users[2]
          },
          {
              
            title: 'Routing with React',
            framework: 'React',
            language: 'Javascript',
            description: 'Can anybody help me out with Routing with React.  I cannot seem to get the correct pages to render when I try',
            user: users[4]
          },
          {
              
            title: 'Intro to Python',
            framework: 'none',
            language: 'Python',
            description: 'Hello all, I\'m extremely new to coding and I was advised that Python is a \'simple\' language to learn but I believe I would learn better If I was face to face with someone.  Is there anyone studying Python that would like to study together?',
            user: users[5]
          },
          {
              
            title: 'How to populate items to a page like Netflix',
            framework: 'none',
            language: 'none',
            description: 'Hello, I am currently teaching myself how to code and I\'m starting with Javascript.  Is a site like Netflix something that can be achieved with Javascript? Or, would I need to use a framework',
            user: users[6]
          },
          {
              
            title: 'SecureRouting',
            framework: 'react',
            language: 'none',
            description: 'I was wondering if anyone could help me.  I\'m working on a project and I\'m trying to make sure that my secure route is working but I don\'t feel confident in taking this on by myself.  Does anyone have any time spare to help me out?' ,
            user: users[7]
          }
            
        ])
      })
      .then(requests => { 
        console.log(`${'👱'.repeat(requests.length)} requests created`)
        return Profile.create([
          {
            firstName: 'Sarah',
            lastName: 'Parker',
            image: 'https://image.flaticon.com/icons/svg/201/201634.svg',
            age: 28,
            location: 'London',
            fieldIndustry: 'travel',
            skills: ['Full stack development'],
            languages: ['Javascript', 'Java'],
            frameworks: ['Node.js'],
            qualifications: ['BA in Software engineering']
          },
          {
            firstName: 'Mary',
            lastName: 'Miller',
            image: 'https://image.flaticon.com/icons/svg/201/201634.svg',
            age: 25,
            location: 'London',
            fieldIndustry: 'leisure',
            skills: ['Front end development'],
            languages: ['Javascript'],
            frameworks: ['Node.js'],
            qualifications: ['BA software engineering']
          },
          {
            firstName: 'Joseph',
            lastName: 'Tennant',
            image: 'https://image.flaticon.com/icons/svg/236/236831.svg',
            age: 30,
            location: 'London',
            fieldIndustry: 'retail',
            skills: ['full stack development'],
            languages: ['Elixr', 'Kotlin'],
            frameworks: ['Vue.js'],
            qualifications: ['self taught']
          },
          {
            firstName: 'Harry',
            lastName: 'Smith',
            image: 'https://image.flaticon.com/icons/svg/236/236831.svg',
            age: 31,
            location: 'London',
            fieldIndustry: 'health',
            skills: ['full stack development'],
            languages: ['Python', 'Kotlin'],
            frameworks: ['Lavarel'],
            qualifications: ['self taught']
          },
          {
            firstName: 'Will',
            lastName: 'McCallum',
            image: 'https://image.flaticon.com/icons/svg/236/236831.svg',
            age: 31,
            location: 'London',
            fieldIndustry: 'law',
            skills: ['full stack development'],
            languages: ['Go'],
            frameworks: ['Play'],
            qualifications: ['bootcamp']
          },
          {
            firstName: 'Gregory',
            lastName: 'Dodd',
            image: 'https://image.flaticon.com/icons/svg/236/236831.svg',
            age: 27,
            location: 'London',
            fieldIndustry: 'media',
            skills: ['full stack development'],
            languages: ['Go'],
            frameworks: ['Play'],
            qualifications: ['bootcamp']
          },
          {
            firstName: 'Octavia',
            lastName: 'Daly',
            image: 'https://image.flaticon.com/icons/svg/201/201634.svg',
            age: 22,
            location: 'London',
            fieldIndustry: 'media',
            skills: ['Full stack development'],
            languages: ['Javascript', 'Java'],
            frameworks: ['React'],
            qualifications: ['BA in Software engineering']
          },
          {
            firstName: 'Henry',
            lastName: 'Gateway',
            image: 'https://image.flaticon.com/icons/svg/236/236831.svg',
            age: 28,
            location: 'London',
            fieldIndustry: 'wellness',
            skills: ['Back end development'],
            languages: ['Python', 'Java'],
            frameworks: ['React'],
            qualifications: ['Web development bootcamp', 'self taught']
          },
          {
            firstName: 'Olly',
            lastName: 'Trant',
            image: 'https://image.flaticon.com/icons/svg/236/236831.svg',
            age: 28,
            location: 'London',
            fieldIndustry: 'Finance',
            skills: ['Back end development'],
            languages: ['Python', 'Java'],
            frameworks: ['Django'],
            qualifications: ['Web development bootcamp', 'self taught']
          },
          {
            firstName: 'Marcus',
            lastName: 'Simpson',
            image: 'https://image.flaticon.com/icons/svg/236/236831.svg',
            age: 23,
            location: 'London',
            fieldIndustry: 'hospitality',
            skills: ['full stack development'],
            languages: ['Ruby', 'Java','Javascript'],
            frameworks: ['React'],
            qualifications: ['Web development bootcamp', 'self taught']
          },
          {
            firstName: 'John',
            lastName: 'Ramsden',
            image: 'https://image.flaticon.com/icons/svg/236/236831.svg',
            age: 34,
            location: 'London',
            fieldIndustry: 'education',
            skills: ['full stack development'],
            languages: ['C#','Ruby', 'Java','Javascript'],
            frameworks: ['React','node.js'],
            qualifications: ['Web development bootcamp', 'self taught']
          },
          {
            firstName: 'Sally',
            lastName: 'Johnston',
            image: 'https://image.flaticon.com/icons/svg/201/201634.svg',
            age: 26,
            location: 'London',
            fieldIndustry: 'finance',
            skills: ['full stack development'],
            languages: ['Javascript', 'C#'],
            frameworks: ['Node.js'],
            qualifications: ['BA software engineering']
          },
          {
            firstName: 'Bob',
            lastName: 'Jones',
            image: 'https://image.flaticon.com/icons/svg/236/236831.svg',
            age: 28,
            location: 'London',
            fieldIndustry: 'retail',
            skills: ['Back end development'],
            languages: ['C', 'C#'],
            frameworks: ['Phoenix'],
            qualifications: ['BA Software engineering']
          },
          {
            firstName: 'Tony',
            lastName: 'Morris',
            image: 'https://image.flaticon.com/icons/svg/236/236831.svg',
            age: 22,
            location: 'London',
            fieldIndustry: 'broadcast',
            skills: ['back end development'],
            languages: ['Python'],
            frameworks: ['Spring', 'flask'],
            qualifications: ['bootcamp']
          },
          {
            firstName: 'Rosie',
            lastName: 'Jenkins',
            image: 'https://image.flaticon.com/icons/svg/201/201634.svg',
            age: 21,
            location: 'London',
            fieldIndustry: 'media',
            skills: ['Back end development'],
            languages: ['Javascript', 'C'],
            frameworks: ['Meteor'],
            qualifications: ['self taught']
          },
          {
            firstName: 'Elienne',
            lastName: 'Yagrite',
            image: 'https://image.flaticon.com/icons/svg/201/201634.svg',
            age: 28,
            location: 'London',
            fieldIndustry: 'Retail',
            skills: ['Full stack development'],
            languages: ['Javascript', 'Java'],
            frameworks: ['React'],
            qualifications: ['BA in Software engineering']
          },
          {
            firstName: 'Jack',
            lastName: 'Frost',
            image: 'https://image.flaticon.com/icons/svg/236/236831.svg',
            age: 35,
            location: 'London',
            fieldIndustry: 'FinTech',
            skills: ['Back end development'],
            languages: ['Python', 'Java'],
            frameworks: ['React'],
            qualifications: ['Web development bootcamp', 'self taught']
          },
          {
            firstName: 'Linda',
            lastName: 'Park',
            image: 'https://image.flaticon.com/icons/svg/201/201634.svg',
            age: 28,
            location: 'London',
            fieldIndustry: 'Travel',
            skills: ['Back end development'],
            languages: ['Python', 'Java'],
            frameworks: ['React'],
            qualifications: ['self taught']
          },
          {
            firstName: 'Mark',
            lastName: 'Webhurst',
            image: 'https://image.flaticon.com/icons/svg/236/236831.svg',
            age: 24,
            location: 'London',
            fieldIndustry: 'Travel',
            skills: ['Back end development'],
            languages: ['C', 'C#'],
            frameworks: ['ASP.NET'],
            qualifications: ['BA Software engineering']
          },
          {
            firstName: 'Suki',
            lastName: 'Cattral',
            image: 'https://image.flaticon.com/icons/svg/201/201634.svg',
            age: 23,
            location: 'London',
            fieldIndustry: 'Fashion',
            skills: ['Front end development'],
            languages: ['Javascript', 'C#'],
            frameworks: ['React'],
            qualifications: ['BA Software engineering']
          },
          {
            firstName: 'James',
            lastName: 'Monroe',
            image: 'https://image.flaticon.com/icons/svg/236/236831.svg',
            age: 29,
            location: 'London',
            fieldIndustry: 'Automotive',
            skills: ['Back end development'],
            languages: ['C', 'C#'],
            frameworks: ['ASP.NET'],
            qualifications: ['self taught']
          },
          {
            firstName: 'Mary',
            lastName: 'Sawyer',
            image: 'https://image.flaticon.com/icons/svg/201/201634.svg',
            age: 29,
            location: 'London',
            fieldIndustry: 'Hospitality',
            skills: ['full stack development'],
            languages: ['Java', 'C#', 'Javascript'],
            frameworks: ['React', 'Express'],
            qualifications: ['self taught']
          },
          {
            firstName: 'Joseph',
            lastName: 'Smith',
            image: 'https://image.flaticon.com/icons/svg/236/236831.svg',
            age: 29,
            location: 'London',
            fieldIndustry: 'Automotive',
            skills: ['Back end development'],
            languages: ['C', 'C#'],
            frameworks: ['ASP.NET'],
            qualifications: ['self taught']
          },
          {
            firstName: 'Daniel',
            lastName: 'Liamson',
            image: 'https://image.flaticon.com/icons/svg/236/236831.svg',
            age: 29,
            location: 'London',
            fieldIndustry: 'Education',
            skills: ['Back end development'],
            languages: ['C', 'C#'],
            frameworks: ['ASP.NET'],
            qualifications: ['self taught']
          },
          {
            firstName: 'Clara',
            lastName: 'Jones',
            image: 'https://image.flaticon.com/icons/svg/201/201634.svg',
            age: 27,
            location: 'London',
            fieldIndustry: 'Finance',
            skills: ['Back end development'],
            languages: ['C', 'C#'],
            frameworks: ['ASP.NET'],
            qualifications: ['BA software engineering']
          },
          {
            firstName: 'Sydney',
            lastName: 'Parks',
            image: 'https://image.flaticon.com/icons/svg/201/201634.svg',
            age: 31,
            location: 'London',
            fieldIndustry: 'Law',
            skills: ['Back end development'],
            languages: ['Javascript', 'C'],
            frameworks: ['Meteor'],
            qualifications: ['self taught']
          },
          {
            firstName: 'Chloe',
            lastName: 'Everton',
            image: 'https://image.flaticon.com/icons/svg/201/201634.svg',
            age: 27,
            location: 'London',
            fieldIndustry: 'Media',
            skills: ['full stack development'],
            languages: ['Javascript', 'C'],
            frameworks: ['Meteor'],
            qualifications: ['self taught']
          },
          {
            firstName: 'Lois',
            lastName: 'Woods',
            image: 'https://image.flaticon.com/icons/svg/201/201634.svg',
            age: 23,
            location: 'London',
            fieldIndustry: 'wellness',
            skills: ['front end development'],
            languages: ['Javascript', 'PHP'],
            frameworks: ['React', 'CakePHP'],
            qualifications: ['self taught']
          },
          {
            firstName: 'Lewis',
            lastName: 'Taylor',
            image: 'https://image.flaticon.com/icons/svg/236/236831.svg',
            age: 23,
            location: 'London',
            fieldIndustry: 'Fintech',
            skills: ['full stack development'],
            languages: ['Javascript', 'Python'],
            frameworks: ['django', 'flask'],
            qualifications: ['self taught']
          },
          {
            firstName: 'William',
            lastName: 'Ritchley',
            image: 'https://image.flaticon.com/icons/svg/236/236831.svg',
            age: 23,
            location: 'London',
            fieldIndustry: 'Media',
            skills: ['full stack development'],
            languages: ['Python'],
            frameworks: ['Spring', 'flask'],
            qualifications: ['bootcamp']
          },
          {
            firstName: 'Kenneth',
            lastName: 'Smith',
            image: 'https://image.flaticon.com/icons/svg/236/236831.svg',
            age: 23,
            location: 'London',
            fieldIndustry: 'Hospitality',
            skills: ['back end development'],
            languages: ['Go'],
            frameworks: ['Spring', 'flask'],
            qualifications: ['bootcamp']
          },
          {
            firstName: 'Adam',
            lastName: 'Heyworth',
            image: 'https://image.flaticon.com/icons/svg/236/236831.svg',
            age: 26,
            location: 'London',
            fieldIndustry: 'Hospitality',
            skills: ['full stack development'],
            languages: ['javascript','python'],
            frameworks: ['Spring', 'flask'],
            qualifications: ['self taught']
          },
          {
            firstName: 'Ethan',
            lastName: 'Nix',
            image: 'https://image.flaticon.com/icons/svg/236/236831.svg',
            age: 24,
            location: 'London',
            fieldIndustry: 'retail',
            skills: ['back end development'],
            languages: ['python'],
            frameworks: ['Spring', 'flask'],
            qualifications: ['BA software engineering']
          },
          {
            firstName: 'Raphael',
            lastName: 'Cortez',
            image: 'https://image.flaticon.com/icons/svg/236/236831.svg',
            age: 30,
            location: 'London',
            fieldIndustry: 'travel',
            skills: ['front end development'],
            languages: ['Kotlin'],
            frameworks: ['flask'],
            qualifications: ['BA software engineering']
          },
          {
            firstName: 'Tony',
            lastName: 'Sharp',
            image: 'https://image.flaticon.com/icons/svg/236/236831.svg',
            age: 31,
            location: 'London',
            fieldIndustry: 'wellness',
            skills: ['full stack development'],
            languages: ['Rust'],
            frameworks: ['Phoenix'],
            qualifications: ['BA software engineering']
          },
          {
            firstName: 'Phil',
            lastName: 'Mathers',
            image: 'https://image.flaticon.com/icons/svg/236/236831.svg',
            age: 32,
            location: 'London',
            fieldIndustry: 'health',
            skills: ['back end development'],
            languages: ['C#'],
            frameworks: ['Express'],
            qualifications: ['self taught']
          },
          {
            firstName: 'Bill',
            lastName: 'Weatherly',
            image: 'https://image.flaticon.com/icons/svg/236/236831.svg',
            age: 29,
            location: 'London',
            fieldIndustry: 'finance',
            skills: ['front end development'],
            languages: ['javascript'],
            frameworks: ['React', 'node'],
            qualifications: ['BA software engineering']
          },
          {
            firstName: 'Michael',
            lastName: 'Rhodes',
            image: 'https://image.flaticon.com/icons/svg/236/236831.svg',
            age: 28,
            location: 'London',
            fieldIndustry: 'media',
            skills: ['front end development'],
            languages: ['javascript'],
            frameworks: ['React', 'node'],
            qualifications: ['BA software engineering']
          },
          {
            firstName: 'Mitchell',
            lastName: 'Sanders',
            image: 'https://image.flaticon.com/icons/svg/236/236831.svg',
            age: 21,
            location: 'London',
            fieldIndustry: 'education',
            skills: ['front end development'],
            languages: ['javascript'],
            frameworks: ['React', 'node'],
            qualifications: ['self taught']
          }
        ])
      })
      .then(profiles => console.log(`${'profiles'.repeat(profiles.length)} created`))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  }
)