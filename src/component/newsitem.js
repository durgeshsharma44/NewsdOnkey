import React, { Component } from 'react'

export class newsitem extends Component {
    
  render() {
      let {title,author, date , description, imageurl,newsurl} = this.props ;
    return (
      <div >
        
        {/* making style as java script object */}
        {/* a card from bootstap */}
        <div className="card " > 
      <img src={imageurl} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className='card-text'><small className='text-muted'> By {author} on {date}</small></p>
    <a href={newsurl} target="_blank" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    )
  }
}

export default newsitem
 