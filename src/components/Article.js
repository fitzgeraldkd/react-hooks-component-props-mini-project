import React from "react";

function Article({id, title, date="January 1, 1970", preview, minutes}) {
    let readtime;
    if (minutes >= 30) {
        readtime = "🍱".repeat(Math.ceil(minutes/10));
    } else {
        readtime = "☕️".repeat(Math.ceil(minutes/10));
    }
    readtime += ` ${minutes} min read`;

    return (
        <article key={id}>
            <h3>{title}</h3>
            <small>{date} - {readtime}</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;