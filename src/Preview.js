import React from "react";
import Prism from "prism-react-renderer";
import {marked} from 'marked-react';

// imported
marked.setOptions({
    breaks: true,
    highlight: function (code) {
        return Prism.highlight(code, Prism.languages.javascript, 'javascript');
    }
});
//imported
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
};


const Preview = (props) => {
    return (
        <div className='container prev'>
            <h3 className='title'>Preview</h3>
            <div
                dangerouslySetInnerHTML={{
                    __html: marked(props.myinput, { renderer: renderer })
                }}
                id="preview"
            />
        </div>
    );
};

export default Preview;