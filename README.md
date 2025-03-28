## YouTube Demo

https://www.youtube.com/watch?v=kcsO_Uw4pE4

## Overview

WibeCheck is a music recommendation app that analyzes facial expressions using an emotion-detector API called Luxand to detect emotions and generate a personalized playlist based on the detected mood. Each curated dataset suggests songs that match various emotions such as happy, sad, angry, neutral, and sleepy.

## Tech Stack

Frontend: React(Vite), JavaScript, CSS, HTML

API & Tools: Spotify API, Luxand (AI Emotion detection API)

## Features

Facial Emotion Detection: Uses Luxand to analyze expressions from an image and give a overall "mood".

Mood-Based Playlist Generation: Matches detected emotions with appropriate songs and displays in a grid structure.

Fast & INteractive UI: Built with React and optimizes for performance.

## Instructions

To initialize on your individual VS Code, insert the following commands in your terminal:

```
$ git clone https://github.com/isaiaspavon/ugahacks-frontend.git
```

```
$ git init
```

```
$ git remote add origin git@github.com:isaiaspavon/ugahacks-frontend.git
```
<!--
```
$ npm install
```

```
$ npm install react@18.2.0 react-dom@18.2.0
```

```
$ npm install react-router-dom@6.27.0
```

```
npm i bcryptjs
```

```
npx auth secret
```
-->

```
npm install mongodb
```

```
npm install mongoose
```

```
npm install next
```

```
npm install react-router-dom 
```

```
npm install next-auth axios
```

```
npm install qs
```

## Coding Workflow

To begin coding and make changes onto the project:

1. **Move task to "In Progress on Miro**
Go to Miro and mark your task/feature into the "In progress" section. Be as specific as possible as to prevent future merge conflicts.

2. **Create a new branch**
In your terminal run the following command:

```
$ git checkout -b <name-of-branch> 
```

You will make your changes in this branch and eventually merge back into the main branch.

3. **Verify and stage branch**

Once you are finished with your feature: MAKE SURE TO SAVE (Command+S). To clarify your changes, perform: 
```
$ git status
```

 in your terminal to double check that your changes are ready to be staged and committed. 

4. **Merging your branch**

After verifying, return to the main branch:

```
$ git checkout main
```

Merge your branch into the main branch:

```
$ git merge <name-of-branch>
```

Pull the latest changes from the main branch:
 
 ```
 $ git pull origin main
 ```
 
Finally push your changes:

```  
$ git push origin main
```

Fixed my "Isaias authored Isaias" commit error so now my commits show properly




<!--
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
-->