# React DND
A simple drag and drop package with zero dependencies, implemented using react hooks

## Install
`npm install react-dnd --save`
or
`yarn add react-dnd`

## Requirements

Must have react 16.8+ installed

## Usage

Import ReactDnd, then pass an array to the ReactDnd component using the `items` param

```jsx
import React from 'react';
import ReactDnd from 'react-dnd';

const myNumbers = ["1", "2", "3"]

function App() {
  return (
    <div>
      <ReactDnd
        items={myNumbers}
      />
    </div>
  )
}
```
