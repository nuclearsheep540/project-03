# Skill Swap #

![screenshot](https://i.imgur.com/6j1Seio.png)

Members
- [Matt Davey](https://github.com/nuclearsheep540)
- [Lydia Dalrymple](https://github.com/ldalrymple1)
- [Shani McDonald](https://github.com/SHANIMCD)

# Built With: #
* HTML 5
* SCSS / Skeleton
* JavaScript
  - ECMAScript 6
  - React.js
  - Node.js
  - MongoDB
  - Express
* Github
* Mocha, Chai, Babel
* npm

# Deployment #

Our app was deployed using Heroku and can be found <a href="/">here</a>
<br />
<br />
# Installation #
To install all the packages listed in the package.json:
 * $ npm i
To run MongoDb:
 * $ mongod
Run the app in your localhost: →
 * $ npm run serve:back
 * $ npm run serve:front
Check the console for any issues and if there are check the package.json for any dependencies missing
<br />
<br />
# The Project #
Skillswap enables users to build a community driven platform, where people can share knowledge, ask for help, deliver support, create meetups and more.

![screenshot](https://i.imgur.com/5pKDbvcl.png)

As junior developers ourselves, we wanted to create a platform that was easy to use and could lead to face to face meet ups with more experienced developers. We thought there was a gap in the market for a platform like this and wanted to build a better alternative to resources like Stack Overflow which can be very overwhelming for code newbies. 
The power of our app will be within the tool's we build for the end user, a powerful profile tool, search filters and ability to communicate effectively. As a Requestor, you're using the platform to gain new knowledge. Those requesting assistance can make requests for help OR browse contributors to determine if someone's profile matches their requirements, and may be able to help them prior to making a detailed post for help. 

![screenshot](https://i.imgur.com/kAkId5bl.png)

Requestors will be able to post their concern, and immediately after, if any Contributors currently match any of the details made by the Requestor, these Contributors can be recommended to the Requestor to as contact directly, ultimately their post will be visible on the index for all to make a helpful attempt.

# Wins #
A part of the project that we feel proud to have accomplished is setting up the comments section  with CRUD functionality since we were working with both the user and the profile model for the first time. Clicking on the username linked to the comment directs to the profile page.

![screenshot](https://i.imgur.com/ifzFl1Zl.png)

```javascript
function commentCreate(req, res) {
  req.body.user = req.currentUser
  Request
    .findById(req.params.id)
    .populate('userProfile')
    .populate('user')
    .populate('Profile')
    .populate('comments.user')
    .populate('comments.user.userProfile')
    .then(request => {
      if (!request) return res.status(404).json({ message: 'Not Found' })
      request.comments.push(req.body)
      return request.save()
    })
    .then(request => res.status(200).json(request))
    .catch(err => res.json(err))
} 
```

```javascript
function commentDelete(req, res) {
  req.body.user = req.currentUser 
  Request.findById(req.params.id)
    .then(request => {
      if (!request) return res.status(404).json({ message: 'Not found' })
      const comment = request.comments.id(req.params.commentId)
      if (!comment.user.equals(req.currentUser._id)) return res.status(401).json({ message: 'You didnt make this comment' })
      comment.remove()
      return request.save()
    })
    .then(request => res.status(202).json(request))
    .catch(err => console.log(err))
}
```

 ## Planning

The team worked well with planning how the project duration was going to go.  The first day of the project was spent using the whiteboard to discuss our MVC.  We also created docs to allocate tasks and track progress.  These combined steps helped us by the time we were a few days in to keep us on track individually as well as together.
Below are some images of the user journey and notes taken:

![flowchart](https://i.imgur.com/PYUkwrYl.png)

![flowchart2](https://i.imgur.com/e5Fpm6Bl.png)

# Challenges #
This was the first time we had done a collaborative group project using GitHub. At first, we struggled with some merge conflicts but then we got used to it as time went on.
Adding a profile was also something that we hadn't covered before. We weren't sure whether to create a separate profile model in the back-end however we quickly came to the conclusion that it was best to nest the profile model in the user model.

Finally, the dropdowns and multi-selects in React proved to be much more complicated than we had expected. This was because React select takes an array of objects and MongoDB doesn't accept objects, it only accepts schemas. 

# Future Improvements #
We planned to have a live chat for users on the site to communicate however sadly we ran out of time. 

In future, we would like to have two user types. The 'requestor' as well as a 'contributor'. The contributor would typically be offering their time and ability as an experienced developer in either certain fields or development frameworks. These users would have in-depth profiles with keys that hold metadata to which can be filtered by in search by Requestors who are in need of help, and as a Contributor, you can either set up Meetups or maybe even offer some time face to face in exchange for a coffee!