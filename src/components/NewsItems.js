import React from 'react';

export default function NewsItems(props) {

  return (
    <>
    <div className="my-3">
      <div className="card">
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: 0
        }}>
          <span className=" badge rounded-pill bg-danger">{props.source}</span>
        </div>

        <img src={!props.imageUrl ? require("./news.jpg") : props.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text "><small className="text">By {!props.author ? "Anonymous" : props.author}  </small></p>

          <a rel='noreferrer' href={props.newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>

    </div>
    </>


  )
}
