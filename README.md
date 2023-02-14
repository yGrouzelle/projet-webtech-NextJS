# Blogging application - ECE Webtech project

_presentation, introduction, ..._

## Production

- Vercel URL: https://vercel.com/gr3g0ry552/ece-webtech-grouzelle-monsoro-i76x
- Supabase project URL: https://app.supabase.com/project/kumngtmxbqawskffdsnj

## Usage

_how to start and use the application, run the tests, ..._

- Clone this repository, from your local machine:
  ```
  git clone https://github.com/gr3g0ry552/ece-webtech-grouzelle-monsoro.git
  cd ece-webtech-grouzelle-monsoro
  ```
- Start the the application

  ```bash
  cd app
  # Install dependencies (use yarn or npm)
  npm install

  npm run build
  npm start
  ```

## Authors

[Grégory MONSORO](https://github.com/gr3g0ry552)

[Yan Grouzelle](https://github.com/yGrouzelle)

## Programming languages used

* [VSCode](https://code.visualstudio.com/)

* [Java Script](https://developer.mozilla.org/fr/docs/Web/JavaScript)

* [Node js](https://nodejs.org/en/) 

* [Next js](https://nextjs.org/) 

## Tasks

**Project management:**

- Naming convention  
  _place your graduation and comments_
- Project structure  
  _place your graduation and comments_
- Git  
  _place your graduation and comments_
- Code quality  
  _place your graduation and comments_
- Design, UX, and content  
  _place your graduation and comments_

**Application development:**

- Home page  
  Welcome page
- Login and profile page  
  profile creation and modification
- New articles creation  
  add new article to supabase with a button and a form
- New comment creation  
  add new comment from an article page with autofilled date, username and article id
- Resource access control  
  you can only modify/delete your comments/articles (with the same userId as the connected user)
- Article modification  
  After filling the "Edit description" user input field in the user page, with a click on the "Modifier la publication", you can edit the content of a post
- Article removal  
  With a click on "supprimer la publication", you can delete a post
- Comment modification  
  After filling the "Edit" user input field, with a click on the **pen icon**, you can edit the content of a comment (only if it's yours)
- Comment removal  
  With a click on the **trashcan icon**, you can delete a comment (only if it's yours)
- Account settings  
  You can access your accout settings by clicking on your name on the header
- WYSIWYG integration  
  **none yet**
- Gravatar integration  
  Whenever you sing in/sign up with an email linked with a gravatar account, your profile picture will be the Gravatar profile image linked with this email on [Garvatar](https://fr.gravatar.com/). Also when you send a comment to a publication you can see your gravatar
- Light/dark theme  
  The page will automatically be defined as dark or light according to the theme of your browser. You can also manually enable this option via a Moon (dark) and Sun (light) icon.
- Accent color selection  
  **none yet**
