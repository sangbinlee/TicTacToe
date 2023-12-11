/* eslint-disable */    // 워닝 제거 문법
"use client"

import MyButton from "./MyButton";




import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";


import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';



import { useState } from "react";


export default function product() {


    let [logo, setLogo] = useState('product');// 변경이 안된다면 비추.

    const codeString = 
    `
    /* eslint-disable */    // 워닝 제거 문법
    "use client"
    import MyButton from "./MyButton";
    export default function product() {
    
        // ############################### data
        const products = [
            { title: 'Cabbage', isFruit: false, id: 1 },
            { title: 'Garlic', isFruit: false, id: 2 },
            { title: 'Apple', isFruit: true, id: 3 },
        ];
    
        // ############################### html with data
        const listItems = products.map(product =>
            <MyButton title={product.title} isFruit={product.isFruit} id={product.id }  key={product.id} />
        );
    
        // ############################### return
        return (
            <div>
                {listItems}
            </div>
        )
    }
    `

    // ############################### data
    const products = [
        { title: 'Cabbage', isFruit: false, id: 1 },
        { title: 'Garlic', isFruit: false, id: 2 },
        { title: 'Apple', isFruit: true, id: 3 },
    ];

    // ############################### html with data
    const listItems = products.map(product =>
        <MyButton title={product.title} isFruit={product.isFruit} id={product.id }  key={product.id} />
    );

    // ############################### return
    return (
        <div> 
            {listItems}

            <SyntaxHighlighter language="javascript" style={dark} showLineNumbers={true}>
                {codeString}
            </SyntaxHighlighter>








        </div>
    )
}



