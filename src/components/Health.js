import React from 'react';
import NewsItems from './NewsItems';
import articles from './Json/Health.json';


export default function Health() {
  return (
    <div>
    <div className="container my-3">
    <h2 className="text-center my-5">My News - Health</h2>
        <div className="row">
            {articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                    <NewsItems title={element.title} description={element.description}
                     imageUrl={element.urlToImage} newsUrl={element.url} 
                     author={element.author} source={element.source.name}
                     />
                </div> 
            })}

        </div>
    </div>
</div>
  )
}
