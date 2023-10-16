import React from 'react';
import classes from './styles/HellowWorld.module.css';

const HelloWorld = () => {
  return (
    <h1 className={`text-3xl font-bold underline ` + classes.hello_world}>
      Hello world!
    </h1>
  );
};

export default HelloWorld;
