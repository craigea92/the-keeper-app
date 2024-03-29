# The Note Keeper App

## Project Description

I have developed a simple and intuitive Note Keeping App that allows users to effortlessly create and delete notes. The app is built using React, it features hooks for state management and reusable components for building an elegant user interface. The design is deliberately minimalist, ensuring that users can concentrate on the content of their notes without any distractions.

I did encounter some difficulties when passing state from child to parent components, and had to refer to documentation to overcome them. Fortunately, the documentation is incredibly comprehensive, and there are numerous valuable resources available on platforms such as YouTube.

In the future, I plan to further enhance the app's functionality by implementing additional features such as an editing function for existing notes, as well as a search function to quickly locate specific notes.

## Tech Stack

<a href="https://www.javascript.com/"> <img src="https://icongr.am/devicon/javascript-original.svg?size=40&color=currentColor" alt="javascript"/> </a>
<a href="https://reactjs.org/"> <img src="https://icongr.am/devicon/react-original.svg?size=40&color=currentColor" alt="react"/> </a>
<a href="https://www.npmjs.com/"> <img src="https://icongr.am/devicon/npm-original-wordmark.svg?size=40&color=currentColor" alt="npm"/> </a>
<a href="https://www.w3schools.com/html/"> <img src="https://icongr.am/devicon/html5-original.svg?size=40&color=8000ff" alt="html5"/> </a>
<a href="https://www.w3schools.com/css/"> <img src="https://icongr.am/devicon/css3-original.svg?size=40&color=8000ff" alt="css3"/> </a>

## How to Install and Run

```
git clone https://github.com/craigea92/the-keeper-app.git
npm install
npm start
```

## Screenshot

<img width="1119" alt="image" src="https://user-images.githubusercontent.com/82875984/233597067-e6ec18f7-23ad-42dd-b807-e1b37e1ec54a.png">

## Can you set State to a Parent Component in React?

Sometimes, we require to set the state from the children component to the parent component in ReactJS. We can create a state handler function in the parent component and pass it as a prop of the child component. After that, we can use the child component function to set the parent component's state.

## What are Props? 

Props are used to store data that can be accessed by the children of a React component. They are part of the concept of reusability. Props take the place of class attributes and allow you to create consistent interfaces across the component hierarchy.
