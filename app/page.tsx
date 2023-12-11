'use client'
// import React from 'react'
// import { render } from 'react-dom'
// import Highlight from 'react-highlight'

import { toast } from "react-toastify";
import { useRef } from "react";
import copy from "copy-to-clipboard";

import './Home.css'

// import hljs from "highlight.js";
// // import hljs from 'highlight.js/lib/core';
// import javascript from 'highlight.js/lib/languages/javascript';
// import 'highlight.js/styles/github.css';
// hljs.registerLanguage('javascript', javascript);

// hljs = require('highlight.js');

// import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
// import typescript from "react-syntax-highlighter/dist/esm/languages/hljs/typescript";
// import a11yDark from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";


// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';

// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';

import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";




import Clipboard from "./components/Clipboard";
 

export default function Home() {


// SyntaxHighlighter.registerLanguage('javascript', js);
// SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);



  // const codeString = '(num) => num + 1';
  const codeString = 
  `
  <h4 style={{color:'green', fontSize:'30px'}} className="title">리액트 포트폴리오 {ver}</h4>
  <p className="title-sub">by dev {name}</p>
  <p>
    <a href={link}>port1.sodi9.store</a>
    {/* <a href="https://sodi9.store">port1.sodi9.store</a> */}
  </p>
  `

  const code = `
  console.log("hello world");
  `;





  const textRef = useRef();

  
  let name = 'sangbin'
  let ver = 1
  let style = "color:'green'"
  // let link = 'https://sodi9.store'
  let link = 'https://google.com'

  const copyToClipboard = () => {
    let copyText = textRef.current.value;
    let isCopy = copy(copyText);
    if (isCopy) {
      toast.success("Copied to Clipboard");
    }
  };

  // load the library and ALL languages
  // let html = hljs.highlightAuto('<h1>Hello World!</h1>').value

  // html = hljs.highlight('<h1>Hello World!</h1>', {language: 'xml'}).value

  // const highlightedCode = hljs.highlight(
  //   '<span>Hello World!</span>',
  //   { language: 'xml' }
  // ).value

  return (
    <div>



      <h4 style={{color:'green', fontSize:'30px'}} className="title">리액트 포트폴리오 {ver}</h4>

 

      <input value={codeString} disabled type="text" ref={textRef} />
 
      <button onClick={copyToClipboard}>Copy</button>
      <SyntaxHighlighter language="javascript" style={docco} showLineNumbers={true}>
        {/* <div ref={textRef} onClick={copyToClipboard}> */}
          {codeString}
        {/* </div> */}
      </SyntaxHighlighter>


      <Clipboard />
      <SyntaxHighlighter language="javascript" style={dark} showLineNumbers={true}>
        {codeString}
      </SyntaxHighlighter>

      <SyntaxHighlighter language="javascript" style={prism} showLineNumbers={true}>
        {codeString}
      </SyntaxHighlighter>



      {/* <Highlight innerHTML={true}>{'<p>Hello world</p>'}</Highlight>
      <Highlight language="javascript">
        {`function foo() { return 'bar' }`}
      </Highlight> */}


      <SyntaxHighlighter children={code} language="javascript" style={dracula} showLineNumbers={true} />



    </div>
  )
}
