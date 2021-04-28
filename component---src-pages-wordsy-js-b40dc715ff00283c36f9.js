(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"4pj/":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),r=a("yBb5"),i=a("vrFN"),l=a("cPBk"),s=a("Xot2"),d=a("bzcv"),c=a.n(d);t.default=function(){return o.a.createElement(r.a,null,o.a.createElement(i.a,{title:"Wordsy"}),o.a.createElement("div",{className:c.a.page},o.a.createElement(s.c,{title:"Wordsy",src:"wordsy.png",alt:"Wordsy",x:-9},o.a.createElement(s.a,null,o.a.createElement("p",null,"Your personal word bank."),o.a.createElement("p",null,"A web application built with ",o.a.createElement(l.b,null,"React")," and ",o.a.createElement(l.b,null,"MongoDB"),".")),o.a.createElement(s.b,{demoURL:"https://wordsy-jc.herokuapp.com/",githubURL:"https://github.com/Jefflol/wordsy"})),o.a.createElement("div",{className:c.a.project__detail},o.a.createElement("div",{className:c.a.project__section},o.a.createElement("h3",null,"Tools Used"),o.a.createElement("p",null,"MongoDB, Express, React, NodeJS, Redux, Axios, JWT, Bcrypt, Mongoose.")),o.a.createElement("div",{className:c.a.project__section},o.a.createElement("h3",null,"Project Description"),o.a.createElement("p",null,"Your personal word bank built with the MERN stack! Saw a new word that you read somewhere? Look up the definition and add it to Wordsy. Keep track of all your past learnt words, review them, and expand your vocabulary!")),o.a.createElement("div",{className:c.a.project__section},o.a.createElement("h3",null,"My Role In Wordsy"),o.a.createElement("p",null,"This was a side project where I wanted to learn React. I also wanted to make the application more complete by providing a presentable front end and add some verification and authentication so that users can have their own accounts when using this application. Some of the features I implemented include:"),o.a.createElement("ul",null,o.a.createElement("li",null,"Developing a registration and login system that utilizes bcrypt for password hashing"),o.a.createElement("li",null,"Authenticating with JWT to ensure that users weren’t accessing another user’s data and only makes changes to their own"),o.a.createElement("li",null,"Validating user’s input and the front end so that the application can provide feedback if the form wasn’t filled correctly"),o.a.createElement("li",null,"Validating the back end to ensure that the data going into the database was properly sanitized"),o.a.createElement("li",null,"Accessing the MongoDB database to display words that a user adds to their word bank"),o.a.createElement("li",null,"Deploying Wordsy on Heroku")),o.a.createElement("p",null,"However, something for me to work on for next time would be to improve application’s feedback with loading indicators. At the moment, the user doesn’t really know if the data is in the process of being sent and only knows what’s happening until the effects are made or if there was an error.")),o.a.createElement("div",{className:c.a.project__section},o.a.createElement("h3",null,"Problem of Resizing and the Use of Debounce"),o.a.createElement("p",null,"Originally, I designed the word lexeme icons to be evenly spaced apart. However, this took a lot of space and so I decided to make this design more compact. In addition, I wanted to ensure that the icons would display an ellipsis if the screen cannot add any more icons to prevent overflow."),o.a.createElement("p",null,"Therefore to make this more responsive, I added an event listener that would rerender the icons if the user was resizing their browser. This way, the icons would display the ellipsis if needed. After implementing this, I realized that there could be some performance issues since the functions that rerendered the icons were essentially being called every time the user resized their browser. This meant that a change in a pixel would require another  check to see if the icons needed rerendering."),o.a.createElement("p",null,"To deal with this potential problem, I implemented a debounce/throttling function that would wrap the re render function to delay the function being called repeatedly. So what’s the difference between debounce and throttle? Debounce will bunch a series of executions into a single call that happens at the end or at the start of a bunch of events whereas throttle will delay executing a function by reducing the amount of times it’s being called. You can see the ",o.a.createElement("a",{href:"http://demo.nimius.net/debounce_throttle/"},"difference visually here"),"."),o.a.createElement("p",null,"In the end, I didn’t end up using either of them because I realized that I wasn’t really rendering a big part of the UI (Although, I could imagine this becoming an issue if a lot of word entries were added). I figured that many words wouldn’t have more than 3 different parts of speech (In this case, it needed at least 3 to triggle the ellipsis icon) and that the user wouldn’t be continuously resizing the browser. That being said, the code still exists as a comment in the case that this feature is needed in the future. I think that a debounce method would be more useful here since the user probably won’t continuously resize the browser screen; it’s more of a “resize once”; therefore, the user really only needs to see the results and not the changes in between. I can also see how these functions would be useful for other projects in the future.")),o.a.createElement("div",{className:c.a.project__section},o.a.createElement("h3",null,"Problem of Adding Controlled Components Dynamically"),o.a.createElement("p",null,"When a user adds a word, they may want to add more than one definition/example. They may also want to add different parts of speech to the word as well. To support this, I had to make sure that textareas could be added and rendered dynamically. In other words, the users should be able to add or delete the textareas whenever they want."),o.a.createElement("p",null,"This posed a bit of an issue because normally in a form, you would have states (already defined) for each input/fields of the form. I also wanted to link the definitions to its example so that whenever you added a definition, you could also add an example that ties to that definition. This was important so that when a user adds a definition, they can ensure that there is a matching example or the example isn’t referencing another definition of the word."),o.a.createElement("p",null,"So the simple solution to this was to add the same ID to both definitions and examples. This ensured that the definitions and examples were linked to each other. This also meant that you could edit or delete each definition individually without accidentally editing/deleting another one. Unfortunately, I couldn’t use the standard setState([e.target.name]: [e.target.value]) and I had to write a custom handleChange function to support setting the states properly because the id would be introduced dynamically, and to reduce redundancy I had to nest the states which is a tradeoff I was willing to make."),o.a.createElement("p",null,"However, introducing an ID would often mean that the orders were not maintained. I didn’t think it was necessary to maintain orders of definition since the first one the user enters is likely the most important/recent ones they learned. In addition, the changes are only saved after all definitions and examples are configured rather than after each definition or example so the order wouldn’t really be affected. That being said, you can always maintain the order by keeping the ids in an array.")),o.a.createElement("div",{className:c.a.project__section},o.a.createElement("h3",null,"Learning About Technical Debt"),o.a.createElement("p",null,"As you work on your application, bugs begin to pile up if they’re not squashed. Code begins to look messier if they’re not refactored. This grows the technical debt especially if other people are working with your code. Fortunately, I was working alone on this but I had to maintain a habit of dealing with bugs and refactoring my code frequently instead of doing them all once I had finished the app."),o.a.createElement("p",null,"I was glad that I refactored frequently (that is…more frequently than before) because it made development easier to handle, or at the very least, sustainable. Leaving these issues towards the end can create a burnout situation where you no longer not want to solve the issue but just want to release the app as is. The polishing of the app would be lacking and therefore not as successful as it could have been if refactoring had been done frequently."),o.a.createElement("p",null,"I also kept track of the bugs throughout the development. There are bug tracking systems to help you with this but I just used an excel sheet and kept it simple. I was able to categorize issues into UI enhancement, cleanup, bugs, and features so that I can prioritize the issues. In addition, it was nice to be able to mark off the ones you completed and track your progress. Overall this aided the project’s organization.")),o.a.createElement("div",null,o.a.createElement("h3",null,'Learning to "Break It Up"'),o.a.createElement("p",null,"This one is probably a given but I always felt comfortable tackling a challenge presented to me. Most of the libraries and dependencies I used in this project were a first time for me. Whenever I felt that I didn’t understand something, I broke down the tasks and tackled them individually. Learning something new can be overwhelming at first so it’s important to break them down and pace yourself."),o.a.createElement("p",null,"I kept a written todo list by my side and constantly kept writing new ones. I broke the task down into manageable tasks and this kept me motivated and working, knowing what I can work on for the day."),o.a.createElement("p",null,"Breaking up tasks also made it possible for me to find solutions and continue to work on the project all the way to the end. It kept me accountable and motivated especially when I don’t have any other external factors to force me to complete this project (unlike a school project or work deadline).")))))}},Xot2:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return h}));var n=a("q1tI"),o=a.n(n),r=a("5Epl"),i=a("vPBx"),l=a("cPBk"),s=a("xzG+"),d=a.n(s),c=function(e){var t=e.children;return o.a.createElement(o.a.Fragment,null,t)},h=function(e){var t=e.projectURL,a=e.projectsURL,n=e.demoURL,r=e.githubURL;return o.a.createElement("div",{className:d.a.projects__links},t&&o.a.createElement(l.a,{className:d.a.link,to:t},"View Project"),a&&o.a.createElement(l.a,{className:d.a.link,to:a},"View Projects"),n&&o.a.createElement(l.a,{className:d.a.link,href:n},"Try Demo"),r&&o.a.createElement(l.a,{className:d.a.link,href:r},"View Github"))};t.c=function(e){var t=e.title,a=e.src,n=e.alt,l=e.children,s=e.x,c=void 0===s?0:s,h=e.y,u=void 0===h?0:h;return o.a.createElement("div",{className:d.a.project_layout,"data-sal":"fade","data-sal-delay":"100","data-sal-duration":"500","data-sal-easing":"ease-in-out-cubic"},o.a.createElement(r.a,{className:d.a.project__image,src:a,alt:n}),o.a.createElement("div",{className:d.a.project__detail},o.a.createElement(i.a,{x:c,y:u},o.a.createElement("h2",null,t)),l))}},bzcv:function(e,t,a){e.exports={page:"project-module--page--9whcw",project__detail:"project-module--project__detail--1wSVR",project__section:"project-module--project__section--3gyOb",archive__detail:"project-module--archive__detail--PVkhU"}},"xzG+":function(e,t,a){e.exports={project_layout:"ProjectJumbotron-module--project_layout--3lVhe",project__image:"ProjectJumbotron-module--project__image--1Z00z",project__detail:"ProjectJumbotron-module--project__detail--1EAfP",projects__links:"ProjectJumbotron-module--projects__links--25cp9",link:"ProjectJumbotron-module--link--2vL6p",archive__section:"ProjectJumbotron-module--archive__section--1pl1P"}}}]);
//# sourceMappingURL=component---src-pages-wordsy-js-b40dc715ff00283c36f9.js.map