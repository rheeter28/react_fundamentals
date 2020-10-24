import React from 'react';

const JSXRules = () => {
  return(
    <div className="main">
      <div className="mainDiv">
        <h1 className="section-title">JSX</h1>
        <dl>
          <dt>Resembles HTML</dt>
          <dd>It's not. It's actuall closer to JavaScript.</dd>
          <dt>React Elements</dt>
          <dd>These are used to construct and update the DOM, or what you see on the screen</dd>
          <dt>Not Required</dt>
          <dd>You can write in vanilla JS, but most sane pepole us JSX</dd>
        </dl>
        <hr />
        <NormalComponent />
        <CreateElementComponent />
      </div>
    </div>
   );
};


export default JSXRules;

const NormalComponent = () => {
  return(
    <div style={{ border: '2px solid black'  }}>
      <h1>Normal Functional Compontents</h1>
      <p>This was construced wit JSX in the return.</p>
      <img src="https://pbs.twimg.com/media/DOzL82mXkAA0zFs.jpg" />
    </div>
  )
}

const CreateElementComponent = () => {
  return  React.createElement(
    "div",
    {
      style: {
        border: "2px solid black"
      }
    },
     React.createElement(
      "h1",
      null,
      "Normal Functional Compontents"
    ),
     React.createElement(
      "p",
      null,
      "This was construced wit JSX in the return."
    ),
     React.createElement("img", {
      src: "https://cdn-images-1.medium.com/max/1200/1*jJZHFQmhkq_7ohn18KrMhA.png"
    })
  );
  };