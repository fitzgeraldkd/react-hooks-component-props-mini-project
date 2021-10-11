import React from "react";
import Article from "./Article.js";

function ArticleList({posts}) {
    const postsJsx = posts.map(Article)
    return (
        <main>
            {postsJsx}
        </main>
    );
}

export default ArticleList;