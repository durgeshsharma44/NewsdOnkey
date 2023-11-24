import React, { Component } from 'react'
import Newsitem from './newsitem'
import Spinner from './spinner';
import propTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


export class news extends Component {
 
  static defaultProps = {
    country: 'in',
    category: 'science'

  }
  static propTypes = {
    country: propTypes.string,
    category: propTypes.string
  }
  constructor(props) {
    super(props);

    this.state = {
      // article: this.articles, ye tb use karte jb uper vala dataset usee karte
      article: [],
      loading: false,
      page: 1,
      totalResult:0
    }
    document.title = `${this.props.category}-NewsdOnkey`;
  }
  fetchMoreData=async()=>{
    
    this.setState({page:this.state.page+1})
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=in&apiKey=a1d6aabb20f14995b3da0cc890c55452&pagesize=6&page=${this.state.page }`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      article: this.state.article.concat(parsedata.articles),
      page: this.state.page + 1,
      loading: false,
      totalResult:parsedata.totalResult
    })
  }
  // nextpages = async () => {
  //   console.log("next");

  //   let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=us&apiKey=a1d6aabb20f14995b3da0cc890c55452&pagesize=6&page=${this.state.page + 1}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedata = await data.json();
  //   console.log(parsedata);
  //   this.setState({
  //     article: parsedata.articles,
  //     page: this.state.page + 1,
  //     loading: false,
  //     totalResult:parsedata.totalResult
  //   })

  //}
  // prevpages = async () => {
  //   console.log("prv");

  //   let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=us&apiKey=a1d6aabb20f14995b3da0cc890c55452&pagesize=6&page=${this.state.page - 1}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedata = await data.json();
  //   console.log(parsedata);
  //   this.setState({
  //     article: parsedata.articles,
  //     page: this.state.page - 1,
  //     totalresult: parsedata.totalResult,
  //     loading: false

  //   })

  //}

  async componentDidMount() {

   this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=in&apiKey=a1d6aabb20f14995b3da0cc890c55452&pagesize=6`;

    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);

    let parsedata = await data.json();
    this.props.setProgress(50);

    console.log(parsedata);
    this.setState({
      article: parsedata.articles,
      loading: false,
      totalresult: parsedata.totalResult
    });  
     this.props.setProgress(100);


  }
  render() {
    return (
      <div className='container my-3'>
        <h3 className='text-center'>News_Headlines</h3>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.article.length}    
          next={this.fetchMoreData}
          hasMore={this.state.article.length!==this.state.totalResult}
          loader={<Spinner />}
        >
          {/* as the name indicates this is infinite scroll bcz in today world we domt use next or preveios button to load new news */}
        <div className="row">

          {this.state.article.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url}>
                <Newsitem title={element.title ? element.title.slice(0, 70) : " "} description={element.description ? element.description.slice(0, 80) : " "} imageurl={element.urlToImage} author={element.author} date={element.publishedAt} newsurl={element.url} />
              </div>
            )
          })}

        </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between" >
          <button disabled={this.state.page <= 1} onClick={this.prevpages} className="btn-primary">previous</button>
          <button disabled={this.state.page + 1 >= Math.ceil(this.state.totalResult / 4)} onClick={this.nextpages} className="btn-primary">next</button>
        </div> */}
        {/* we r not using this any more */}
 
      </div>
    )
  }
}

export default news
