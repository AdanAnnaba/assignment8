import React from 'react';

const Blogs = () => {
    return (
       <div>
            <div className='m-8'>
            <p className='bg-sky-500'>Question: What is context API.</p>
            <p>Ans: The Context API can be used to share data with multiple components, without having to pass data through props manually. For example, some use cases the Context API is ideal for: theming, user language, authentication, etc.</p>
        </div>
        <div>
            <p className='bg-sky-500'>Question: What is semantic tag.</p>
            <p>Ans: Semantic HTML tags allow you to add meaning to your markup so that search engines, screen readers, and web browsers can make sense of it.Although semantic tags existed in earlier HTML versions, the HTML5 specifications added several new semantic elements to the syntax—both on the block and inline levels. In this article, we’ll look into how HTML semantics work and also give you some tips about how to get the most out of the feature...</p>
        </div>
       </div>
    );
};

export default Blogs;