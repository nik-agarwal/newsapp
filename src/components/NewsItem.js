import React from "react";

const NewsItem = (props) =>{
    let { title, description, ImageUrl, url, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{
            display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0'
          }}>
        <span className=" badge rounded-pill bg-danger" >
            {source}
          </span>
          </div>
          <img src={!ImageUrl ? "https://images.moneycontrol.com/static-mcnews/2023/06/screenshot_2023-06-16_124824-sixteen_nine.png" : ImageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className=" text-danger">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>

            <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm  btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;