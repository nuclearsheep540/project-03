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

          },
          {
            firstName: 'Elienne',
            lastName: 'Yagrite',
            username: 'Eyag1',
            email: 'eyagrite@email',
            password: 'pass',
            passwordConfirmation: 'pass'

          },
          {
            firstName: 'Jack',
            lastName: 'Frost',
            username: 'Frostyj',
            email: 'jfrost@email',
            password: 'pass',
            passwordConfirmation: 'pass'

          },
          {
            firstName: 'Linda',
            lastName: 'Park',
            username: 'lindyp',
            email: 'lindyp@email',
            password: 'pass',
            passwordConfirmation: 'pass'

          },
          {
            firstName: 'Mark',
            lastName: 'Webhurst',
            username: 'webbym',
            email: 'mweb@hurstemail',
            password: 'pass',
            passwordConfirmation: 'pass'

          },
          {
            firstName: 'Suki',
            lastName: 'Cattral',
            username: 'sookee',
            email: 'sookee@email',
            password: 'pass',
            passwordConfirmation: 'pass'

          },
          {
            firstName: 'James',
            lastName: 'Monroe',
            username: 'jmonroe',
            email: 'jmonroe@email',
            password: 'pass',
            passwordConfirmation: 'pass'

          },
          {
            firstName: 'Mary',
            lastName: 'Sawyer',
            username: 'msawyer',
            email: 'msawyer@email',
            password: 'pass',
            passwordConfirmation: 'pass'

          },
          {
            firstName: 'Joseph',
            lastName: 'Smith',
            username: 'jsmithy',
            email: 'jsmithy@email',
            password: 'pass',
            passwordConfirmation: 'pass'

          },
          {
            firstName: 'Daniel',
            lastName: 'Liamson',
            username: 'dliamson',
            email: 'dliamson@email',
            password: 'pass',
            passwordConfirmation: 'pass'

          },
          {
            firstName: 'Clara',
            lastName: 'Jones',
            username: 'clarajones',
            email: 'clarajones@email',
            password: 'pass',
            passwordConfirmation: 'pass'

          },
          {
            firstName: 'Sydney',
            lastName: 'Parks',
            username: 'sydneyparks',
            email: 'sydneyparks@email',
            password: 'pass',
            passwordConfirmation: 'pass'

          },
          {
            firstName: 'Chloe',
            lastName: 'Everton',
            username: 'chloeeverton',
            email: 'chloe@email',
            password: 'pass',
            passwordConfirmation: 'pass'

          },
          {
            firstName: 'Lois',
            lastName: 'Woods',
            username: 'lowoods',
            email: 'loiswoods@email',
            password: 'pass',
            passwordConfirmation: 'pass'

          },
          {
            firstName: 'Lewis',
            lastName: 'Taylor',
            username: 'lewtay',
            email: 'lewtay@email',
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
            frameworks: 'ReactJs',
            languages: 'none',
            description: 'I need to complete a project for class which requires React.  I am having trouble with rendering components to the page.  Can anybody help me?',
            user: users[1]
          },
          {
            title: 'Building a Wordpress website',
            frameworks: 'none',
            languages: 'PHP',
            description: 'I would like to create a Wordpress website for my portfolio which I understand requires knowledge of PHP.  I have never used it before.  I\'d like to request some help with going through the basics and/or recommend any frameworks that work well.  If anyone can help me that would be great!',
            user: users[1]
          },
          {
            title: 'Creating a snake game',
            frameworks: 'none',
            languages: 'Javascript',
            description: 'I have been tasked with creating a snake game which I have a week to complete.  The requirement is that I\'m to only use vanilla Javascript which I don\'t really know much about.  Has anyone done anything similar before and would be able to help me? Thanks in advance',
            user: users[8]
          },
          {
            title: 'Learning ASP.NET',
            frameworks: 'ASP.NET',
            languages: 'none',
            description: 'Help needed!  I have been teaching myself C# over the past couple of months and I have been advised that to progress in an interview for a job that I would like to go for, I need to have a a basic understanding of how ASP.NET works.  Does anyone recommend any tutorials or have a working knowledge to help me out?',
            user: users[9]
          },
          {
            title: 'Has anyone ever used Phoenix?',
            frameworks: 'Pheonix',
            languages: 'none',
            description: 'My upcoming bootcamp includes using Phoenix  and learning about handles multiple users?  Has anyone on here ever used it? Asking for a friend',
            user: users[10]
          },
          {
            title: 'Spring Help',
            frameworks: 'Spring',
            languages: 'none',
            description: 'Hi all, I\'m a junior developer where we use Java as a language.  I  believe that we\'ll be using Spring as opposed to JSF and was wondering if anyone had time to sit down and go through some basics.  Hopefully just one meet up for a couple of hours should get me on track.  Thank you in advance.', user: users[6]
          },
          {
            title: 'CakePHP help',
            frameworks: 'CakePHP',
            languages: 'none',
            description: 'I was wondering if anyone who uses CakePHP could help me out.  I have never used it before and I think it could be super helpful',
            user: users[14]
          },
          { 
            title: 'Help with Flexbox',
            frameworks: 'none',
            languages: 'CSS',
            description: 'I am requesting help on the CSS front.  I have been looking up flexbox but I\'m struggling when it comes to putting it into practice.  Has anyone ever worked with flexbox before?',
            user: users[0]
          },
          {
              
            title: 'Vanilla Javascript',
            frameworks: 'none',
            languages: 'Javascript',
            description: 'Does anyone reccommend a place for tutorials on vanilla Javascript?  I would like to practice array methods in particular, but other basics too. I would like to learn but in a more interactive way as opposed to just reading.  Many thanks ',
            user: users[1]
          },
          {
              
            title: 'Bulma',
            frameworks: 'Bulma',
            languages: 'CSS',
            description: 'I dont know about other people, but I REALLY struggle with CSS.  I\'ve heard about Bulma but I\'m struggling with how to link it to my project.  Does anyone have time to help me out?',
            user: users[2]
          },
          {
              
            title: 'Routing with React',
            frameworks: 'React',
            languages: 'Javascript',
            description: 'Can anybody help me out with Routing with React.  I cannot seem to get the correct pages to render when I try',
            user: users[4]
          },
          {
              
            title: 'Intro to Python',
            frameworks: 'none',
            languages: 'Python',
            description: 'Hello all, I\'m extremely new to coding and I was advised that Python is a \'simple\' language to learn but I believe I would learn better If I was face to face with someone.  Is there anyone studying Python that would like to study together?',
            user: users[5]
          },
          {
              
            title: 'How to populate items to a page like Netflix',
            frameworks: 'none',
            languages: 'none',
            description: 'Hello, I am currently teaching myself how to code and I\'m starting with Javascript.  Is a site like Netflix something that can be achieved with Javascript? Or, would I need to use a framework',
            user: users[6]
          },
          {
              
            title: 'SecureRouting',
            frameworks: 'React',
            languages: 'none',
            description: 'I was wondering if anyone could help me.  I\'m working on a project and I\'m trying to make sure that my secure route is working but I don\'t feel confident in taking this on by myself.  Does anyone have any time spare to help me out?' ,
            user: users[7]
          },
          {
              
            title: 'Passing through objects from state to another form',
            frameworks: 'React',
            languages: 'none',
            description: 'I am requesting some react help.  I am attempting to create a form template in it\'s own component that other components can use.  However I\'m not getting the desired result when I try to pass the info through from the form to the required component.  I could really use some face to face help on this.  Thank you in advance.' ,
            user: users[8]
          },
          {
              
            title: 'Image slider not working in ASP.net MVC',
            frameworks: 'ASP.NET',
            languages: 'C#',
            description: 'Hi all! I am trying to add an image slider in the view of my small ASP.NET MVC web app but it just doesn\'t seem to be working! I mean it\'s showing the image in a frame but when I try to click my back/next button, nothing happens. I\'m using Visual Studio 2017. Can anyone offer a hand?',
            user: users[9]
          },
          {
              
            title: 'How can I ask the user for an input after a conditional?',
            frameworks: 'none',
            languages: 'Python',
            description: 'I\'m making a program to predict the weather, and I need to ask the user a certain question if he said yes to a previous question or another if he said no. How can I execute a imput request only if certain condition is True?',
            user: users[10]
          },
          {
              
            title: 'NullPointerException when trying to access views in a Kotlin fragment',
            frameworks: 'none',
            languages: 'Kotlin',
            description: 'How to use Kotlin Android Extensions with Fragments? If I use them inside onCreateView(), I get this NullPointerException exception: Caused by: java.lang.NullPointerException: Attempt to invoke virtual method \'android.view.View android.view.View.findViewById(int)\' on a null object reference',
            user: users[11]
          },
          {
              
            title: 'Angular click event binding is not working properly',
            frameworks: 'Angular',
            languages: 'none',
            description: 'I want to get relevant selections when radio button clicks. I have some code in an appComonent.html and app.component.ts file.  When I click Agent radio button it displays relevant data for my radio button. I can\'t figure out what is the wrong with code. Any one can help me find my mistakes?',
            user: users[12]
          },
          {
              
            title: 'What are the differences between Rust\'s `String` and `str`?',
            frameworks: 'none',
            languages: 'Rust',
            description: 'Why does Rust have String and str? What are the differences between String and str? When does one use String instead of str and vice versa? Is one of them getting deprecated?',
            user: users[13]
          },
          {
              
            title: 'Best way to create a history',
            frameworks: 'none',
            languages: 'Java',
            description: 'What is the best way to create a "history view" in Android? There is both Gridview and a TableLayout but what is the different between those two? I\'m going to create an app which should hold history but I can\'t really decide which one I should use, tablelayout or gridview? I\'ve started with a tablelayout because I thought that would be the best in my case but I\'m not sure if that\'s correct. Later on in the app I will retrieve data (Which will be different for all users) from a database and insert it into a new tablerow depending on the size. So let\'s say 1 user has 3 history I would like to add 3 tablerows and add the data. And another case if another user has 21 history data, it should add 21 new tablerows but I still wanna use the same design for all of them.  How should I start?',
            user: users[14]
          },
          {
              
            title: 'How to pass a member function to a base class contructor?',
            frameworks: 'none',
            languages: 'C++',
            description: 'I have a class structure that i want to use and i want to use a function of a derived class to be passed as a constructor argument to the base class. I cannot find the right syntax for it (new to C :)).  Googling this issue didn\'t help that much since i probably don\'t use the right search words and don\'t understand enough of c++ (i am a C# guy). Can anyone help?',
            user: users[15]
          },
          {
              
            title: 'Laravel Elixr copy method not working',
            frameworks: 'Laravel',
            languages: 'C++',
            description: ' am trying to copy some js files, using elixr, from my vendor/bower_components folder, but when running gulp they don\'t copy across.',
            user: users[16]
          },
          {
              
            title: 'How to convert a zero-terminated byte array to string?',
            frameworks: 'none',
            languages: 'GO',
            description: 'I need to read [100]byte to transfer a bunch of string data. Because not all of the strings are precisely 100 characters long, the remaining part of the byte array are padded with 0s. If I tansfer [100]byte to string by: string(byteArray[:]), the tailing 0s are displayed as ^@^@s.  In C the string will terminate upon 0, so I wonder what\'s the best way of smartly transfer a byte array to string in Golang.',
            user: users[17]
          },
          {
              
            title: 'RESTful on Play! framework',
            frameworks: 'PLAY',
            languages: 'none',
            description: 'We are planning a project primarily serving content to mobile apps, but need to have a website.  My question is whether is makes sense to use Jersey or Restlet to develop REST APIs for our mobile apps, and then use Play! to serve the website. Or does it make more sense to just use Play! to do it all? If so, how to do REST with Play! framework?',
            user: users[18]
          },
          {
              
            title: 'Can we use Meteor framework with mysql database?',
            frameworks: 'Meteor',
            languages: 'none',
            description: 'I found many refer url for Meteor framework where i found mongodb as database, since i don\'t have much knowledge in mongodb. So is there any way to implement mysql instead of mongodb',
            user: users[19]
          },
          {
              
            title: 'Get the data received in a Flask request',
            frameworks: 'Flask',
            languages: 'none',
            description: 'I want to be able to get the data sent to my app made with Flask. I\'ve tried accessing request.data but it is an empty string. How do you access request data?',
            user: users[20]
          },
          {
              
            title: 'Get the data received in a Flask request',
            frameworks: 'Flask',
            languages: 'none',
            description: 'I want to be able to get the data sent to my app made with Flask. I\'ve tried accessing request.data but it is an empty string. How do you access request data?',
            user: users[20]
          },
          {
              
            title: 'How to make Aysnc annotation work in Spring Boot?',
            frameworks: 'Spring',
            languages: 'none',
            description: 'I created a simple spring boot application with scheduled (@Scheduled) task. In that scheduled task, I would like to call async function with @Async, but I can see it still runs on the scheduling thread without switch to another thread. I also tried to customise executor, but no luck.  I have code that I\'d love to share with whoever can help',
            user: users[21]
          }
           
        ])
      })
      .then(requests => { 
        console.log(`${'👱'.repeat(requests.length)} requests created`)
        return Profile.create([
          {
            firstName: 'Sarah',
            lastName: 'Parker',
            image: 'https://i.ibb.co/746XyPn/girl-1.png',
            age: 28,
            location: 'London',
            fieldIndustry: 'Leisure & Tourism',
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
            fieldIndustry: 'Leisure & Tourism',
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
            fieldIndustry: 'Science',
            languages: ['Elixr', 'Kotlin'],
            frameworks: ['Vue.js'],
            qualifications: ['self taught']
          },
          {
            firstName: 'Harry',
            lastName: 'Smith',
            image: 'https://i.ibb.co/GxCXTkp/man-2.png',
            age: 31,
            location: 'London',
            fieldIndustry: 'Engineering',
            languages: ['Python', 'Kotlin'],
            frameworks: ['Lavarel'],
            qualifications: ['self taught']
          },
          {
            firstName: 'Will',
            lastName: 'McCallum',
            image: 'https://i.ibb.co/YksZLhK/man-1.png',
            age: 31,
            location: 'London',
            fieldIndustry: 'Law',
            languages: ['Go'],
            frameworks: ['Play'],
            qualifications: ['bootcamp']
          },
          {
            firstName: 'Gregory',
            lastName: 'Dodd',
            image: 'https://i.ibb.co/XbLnf5G/man.png',
            age: 27,
            location: 'London',
            fieldIndustry: 'Media',
            languages: ['Go'],
            frameworks: ['Play'],
            qualifications: ['bootcamp']
          },
          {
            firstName: 'Octavia',
            lastName: 'Daly',
            image: 'https://i.ibb.co/JFh9Vmc/girl.png',
            age: 22,
            location: 'London',
            fieldIndustry: 'Media',
            languages: ['Javascript', 'Java'],
            frameworks: ['React'],
            qualifications: ['BA in Software engineering']
          },
          {
            firstName: 'Henry',
            lastName: 'Gateway',
            image: 'https://i.ibb.co/18vGfWw/boy.png',
            age: 28,
            location: 'London',
            fieldIndustry: 'Security',
            languages: ['Python', 'Java'],
            frameworks: ['React'],
            qualifications: ['Web development bootcamp', 'self taught']
          },
          {
            firstName: 'Olly',
            lastName: 'Trant',
            image: 'https://i.ibb.co/XbLnf5G/man.png',
            age: 28,
            location: 'London',
            fieldIndustry: 'Fintech',
            languages: ['Python', 'Java'],
            frameworks: ['Django'],
            qualifications: ['Web development bootcamp']
          },
          {
            firstName: 'Marcus',
            lastName: 'Simpson',
            image: 'https://i.ibb.co/18vGfWw/boy.png',
            age: 23,
            location: 'London',
            fieldIndustry: 'Design',
            languages: ['Ruby', 'Java','Javascript'],
            frameworks: ['React'],
            qualifications: ['Web development bootcamp', 'self taught']
          },
          {
            firstName: 'John',
            lastName: 'Ramsden',
            image: 'https://i.ibb.co/GxCXTkp/man-2.png',
            age: 34,
            location: 'London',
            fieldIndustry: 'Public Services and Administration',
            languages: ['C#','Ruby', 'Java','Javascript'],
            frameworks: ['React','node.js'],
            qualifications: ['Web development bootcamp', 'self taught']
          },
          {
            firstName: 'Sally',
            lastName: 'Johnston',
            image: 'https://i.ibb.co/xhZkJXG/man-3.png',
            age: 26,
            location: 'London',
            fieldIndustry: 'FinTech',
            languages: ['Javascript', 'C#'],
            frameworks: ['Node.js'],
            qualifications: ['BA software engineering']
          },
          {
            firstName: 'Bob',
            lastName: 'Jones',
            image: 'https://i.ibb.co/XbLnf5G/man.png',
            age: 28,
            location: 'London',
            fieldIndustry: 'Education',
            languages: ['C', 'C#'],
            frameworks: ['Phoenix'],
            qualifications: ['BA Software engineering']
          },
          {
            firstName: 'Tony',
            lastName: 'Morris',
            image: 'https://i.ibb.co/XbLnf5G/man.png',
            age: 22,
            location: 'London',
            fieldIndustry: 'Information Technology',
            languages: ['Python'],
            frameworks: ['Spring', 'flask'],
            qualifications: ['bootcamp']
          },
          {
            firstName: 'Rosie',
            lastName: 'Jenkins',
            image: 'https://i.ibb.co/JFh9Vmc/girl.png',
            age: 21,
            location: 'London',
            fieldIndustry: 'Law',
            languages: ['Javascript', 'C'],
            frameworks: ['Meteor'],
            qualifications: ['self taught']
          },
          {
            firstName: 'Elienne',
            lastName: 'Yagrite',
            image: 'https://i.ibb.co/746XyPn/girl-1.png',
            age: 28,
            location: 'London',
            fieldIndustry: 'Design',
            languages: ['Javascript', 'Java'],
            frameworks: ['React'],
            qualifications: ['BA in Software engineering']
          },
          {
            firstName: 'Jack',
            lastName: 'Frost',
            image: 'https://i.ibb.co/n0cy8CT/boy-1.png',
            age: 35,
            location: 'London',
            fieldIndustry: 'FinTech',
            languages: ['Python', 'Java'],
            frameworks: ['React'],
            qualifications: ['Web development bootcamp', 'self taught']
          },
          {
            firstName: 'Linda',
            lastName: 'Park',
            image: 'https://i.ibb.co/746XyPn/girl-1.png',
            age: 28,
            location: 'London',
            fieldIndustry: 'Leisure and Tourism',
            languages: ['Python', 'Java'],
            frameworks: ['React'],
            qualifications: ['self taught']
          },
          {
            firstName: 'Mark',
            lastName: 'Webhurst',
            image: 'https://i.ibb.co/YksZLhK/man-1.png',
            age: 24,
            location: 'London',
            fieldIndustry: 'Leisure and Tourism',
            languages: ['C', 'C#'],
            frameworks: ['ASP.NET'],
            qualifications: ['BA Software engineering']
          },
          {
            firstName: 'Suki',
            lastName: 'Cattral',
            image: 'https://i.ibb.co/CvBLqBn/man-4.png',
            age: 23,
            location: 'London',
            fieldIndustry: 'Marketing, Advertising & PR',
            languages: ['Javascript', 'C#'],
            frameworks: ['React'],
            qualifications: ['BA Software engineering']
          },
          {
            firstName: 'James',
            lastName: 'Monroe',
            image: 'https://i.ibb.co/18vGfWw/boy.png',
            age: 29,
            location: 'London',
            fieldIndustry: 'Marketing, Advertising & PR',
            languages: ['C', 'C#'],
            frameworks: ['ASP.NET'],
            qualifications: ['self taught']
          },
          {
            firstName: 'Mary',
            lastName: 'Sawyer',
            image: 'https://i.ibb.co/746XyPn/girl-1.png',
            age: 29,
            location: 'London',
            fieldIndustry: 'Health',
            languages: ['Java', 'C#', 'Javascript'],
            frameworks: ['React', 'Express'],
            qualifications: ['self taught']
          },
          {
            firstName: 'Joseph',
            lastName: 'Smith',
            image: 'https://i.ibb.co/n0cy8CT/boy-1.png',
            age: 29,
            location: 'London',
            fieldIndustry: 'Information Technology',
            languages: ['C', 'C#'],
            frameworks: ['ASP.NET'],
            qualifications: ['self taught']
          },
          {
            firstName: 'Daniel',
            lastName: 'Liamson',
            image: 'https://i.ibb.co/n0cy8CT/boy-1.png',
            age: 29,
            location: 'London',
            fieldIndustry: 'Transport and Logistics',
            languages: ['C', 'C#'],
            frameworks: ['ASP.NET'],
            qualifications: ['self taught']
          },
          {
            firstName: 'Clara',
            lastName: 'Jones',
            image: 'https://i.ibb.co/JFh9Vmc/girl.png',
            age: 27,
            location: 'London',
            fieldIndustry: 'Finance',
            languages: ['C', 'C#'],
            frameworks: ['ASP.NET'],
            qualifications: ['BA software engineering']
          },
          {
            firstName: 'Sydney',
            lastName: 'Parks',
            image: 'https://i.ibb.co/xhZkJXG/man-3.png',
            age: 31,
            location: 'London',
            fieldIndustry: 'Law',
            languages: ['Javascript', 'C++'],
            frameworks: ['Meteor'],
            qualifications: ['self taught']
          },
          {
            firstName: 'Chloe',
            lastName: 'Everton',
            image: 'https://i.ibb.co/JFh9Vmc/girl.png',
            age: 27,
            location: 'London',
            fieldIndustry: 'Media',
            languages: ['Javascript', 'C#'],
            frameworks: ['Meteor'],
            qualifications: ['self taught']
          },
          {
            firstName: 'Lois',
            lastName: 'Woods',
            image: 'https://i.ibb.co/CvBLqBn/man-4.png',
            age: 23,
            location: 'London',
            fieldIndustry: 'Charity',
            languages: ['Javascript', 'PHP'],
            frameworks: ['React', 'CakePHP'],
            qualifications: ['self taught']
          },
          {
            firstName: 'Lewis',
            lastName: 'Taylor',
            image: 'https://i.ibb.co/n0cy8CT/boy-1.png',
            age: 23,
            location: 'London',
            fieldIndustry: 'Fintech',
            languages: ['Javascript', 'Python'],
            frameworks: ['Django', 'Flask'],
            qualifications: ['self taught']
          },
          {
            firstName: 'William',
            lastName: 'Ritchley',
            image: 'https://image.flaticon.com/icons/svg/236/236831.svg',
            age: 23,
            location: 'London',
            fieldIndustry: 'Media',
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