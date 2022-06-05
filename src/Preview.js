import React from "react";
import Prism from "prismjs";
import {marked} from 'marked';

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
};

// imported
marked.setOptions({
    renderer: renderer,
    breaks: true,
    highlight: function (code) {
        return Prism.highlight(code, Prism.languages.javascript, 'javascript');
    }
});


const Preview = (props) => {
    const text = marked.parse(props.myinput);
    console.log(text);

    return (
        <div className='container prev'>
            <h3 className='title'>Preview</h3>
            <div
                dangerouslySetInnerHTML={{
                    __html: text
                }}
                id="preview"
            />
        </div>
    );
};

export default Preview;