# Final Project

## Updates
### May 6, 2021
Hello everyone! Apologies for not being able to attend today's session - I unfortunately a lot of work this week but one of my good friends, Aadi, will be teaching today. Next week Aadi will be teaching again and Nicholas should be back as well. I'll be returning for the final session where I'll talk about Machine Learning and deployment but if you have any issues with the project (especially this repo!), feel free to email me at <roblburris@gmail.com>.
\- RB

## Overview
We'll be using Git/Github for version control. The basic idea of Git is that it is a way to track changes and save a cache of our files. Imagine you were working on some code and ended up writing a function that broke the already working file. In attempt to fix it, you change other functions and end up making the problem worse but to your dismay, you've overwritten your code file. With Git, we continually save versions of our codebase to prevent this from happening. If we break something, we will always be able to revert back to a previous version. 

Aadi should have gone over some of the basic Git commands and shown how to fork this repository in the May 6 session. As mentioned in today's class, this will be our workflow for contributing to the codebase:

### Starting Out
1. Create a Github account. (Psst: This is a great place to you showcase projects you've done!)
2. In the homepage of the repository, look for the fork button in the top right of your screen.
3. You should now have a copy of this repository in your account. 
4. Clone the repository to your local machine or <https://repl.it/>
5. Add **this** repsitory as a remote origin. Use the following command:
> `git remote add roblburris git://github.com/roblburris/odle-apc-webapp`

Source: <http://kbroman.org/github_tutorial/pages/fork.html>

### Writing Code
1. **ALWAYS ALWAYS ALWAYS** do a pull from **this** repository to make sure you're up to date with the latest changes. Assuming you used the command above, use this command to pull from this repo (aka the main codebase):
> `git pull roblburris master`
2. Commit and push your code to your repository (**only push working code!!!**). Once done, open a new pull request on GitHub (this is done on your own repository page) and include description of the changes you've made.
3. Continue working and/or wait for Robert, Nicholas, or Aadi to review your pull request.
* If we note any problems, fix the issues and submit another pull request.
* If there are no problems, good work! Edit the tasklist and mark the feature/task as complete (add the date finished next to your name).

### Repo Overview
In this repository, we've divided the frontend and backend into two directories - `frontend` and `backend`. Each directory has a `TASKLIST.MD` file that has all of the tasks you need to do. All of you will be responsible for writing the tasklist together based on the high level description we provide.

Aadi should have gone over the contents of each directory. The frontend was bootstrapped using Create React App while the backend is just a single Node.js file with a `packages.json` file (be sure to run `npm install` to download the latest packages!). Hopefully the size of each directory will grow and by the end of this project we will have a very cool repo to show off!

### Style Guide 
We don't have an official style guide but we ask that you do the following:
* Use descriptive variable names/function names
* Add a comment before each function describing its behavior, arguments it accepts, and what it returns (if anything)
* Comments in any unclear parts of functions

If you need a style guide to reference, we recommend Airbnb's React/JSX style guide (<https://airbnb.io/javascript/react/>) and Google's JavaScript style guide (<https://google.github.io/styleguide/jsguide.html>) but again note that you **do NOT** need to follow either of these.

