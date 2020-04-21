import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'

function Blog(props) {
    const sidebar = (
    <ul>
        {props.posts.map((post)=> <li key= { post.id }> { post.title} </li>)}
    </ul>
    )
    
    const content = (props.posts.map((post)=>
         <div key= {post.id}>
            <h2> {post.title} </h2>
            <p> { post.content } </p>
        </div>
        )
        
    )
    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    )
}

const posts = [
    {id: 1, title: "react", content: "React is the fronend library"},
    {id: 2, title: "Angular", content: "React is the fronend library"}
];

ReactDOM.render(<Blog posts= {posts} />, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
