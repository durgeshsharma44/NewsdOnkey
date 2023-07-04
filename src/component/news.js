import React, { Component } from 'react'
import Newsitem from './newsitem'
import Spinner from './spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


export class news extends Component {
  // articles =[
  //     {
  //         "source": {
  //             "id": "cnn",
  //             "name": "CNN"
  //         },
  //         "author": "From CNN's Lucy Bayly, Krystal Hur, Nicole Goodkind and Alicia Wallace",
  //         "title": "Countdown to a critical Fed decision: Live updates - CNN",
  //         "description": "The Fed concludes its two-day meeting on Wednesday and investors expect the central bank to approve a quarter-point interest rate hike. Follow here for live updates.",
  //         "url": "https://www.cnn.com/business/live-news/stock-market-bank-crisis-fed-rate-news-03-22-23/index.html",
  //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/230321170936-federal-reserve-0321-super-tease.jpg",
  //         "publishedAt": "2023-03-22T12:35:09Z",
  //         "content": "UK consumer prices jumped by 10.4% in February compared with a year ago, as food inflation hit its highest level in more than 45 years, and as the cost of visiting restaurants and hotels increased, o… [+2000 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "the-washington-post",
  //             "name": "The Washington Post"
  //         },
  //         "author": "Ellen Francis, Claire Parker",
  //         "title": "Macron gives interview after pushing through pension plan amid protests - The Washington Post",
  //         "description": "Macron spoke on TF1 and France2 TV after using executive powers to push through a pension plan that triggered protests and strikes across France.",
  //         "url": "https://www.washingtonpost.com/world/2023/03/22/france-macron-interview-retirement-strikes/",
  //         "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/6CHGTZP2VWXIDZD45W5B3BLASY_size-normalized.jpg&w=1440",
  //         "publishedAt": "2023-03-22T12:13:09Z",
  //         "content": "Comment on this story\r\nFrench President Emmanuel Macron forcibly defended Wednesday his move to force through legislation raising the retirement age, which has ignited angry protests and strikes arou… [+3768 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "independent",
  //             "name": "Independent"
  //         },
  //         "author": "Andrea Blanco",
  //         "title": "Gwyneth Paltrow trial – live: Star may testify today about ski collision as she claims video ‘disappeared’ - The Independent",
  //         "description": "Goop founder faces civil lawsuit regarding 2016 skiing accident involving retired optometrist Terry Sanderson at Deer Valley resort",
  //         "url": "https://www.independent.co.uk/news/world/americas/gwyneth-paltrow-ski-trial-kids-brad-b2305628.html",
  //         "urlToImage": "https://static.independent.co.uk/2023/03/21/15/terry%20sanderson%20gwyneth%20paltrow.jpg?quality=75&width=1200&auto=webp",
  //         "publishedAt": "2023-03-22T12:00:00Z",
  //         "content": "Sign up to our Evening Headlines email for your daily guide to the latest news\r\nSign up to our free US Evening Headlines email\r\nActor Gwyneth Paltrow could take the stand today to testify in her civi… [+7039 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "axios",
  //             "name": "Axios"
  //         },
  //         "author": "Mike Allen",
  //         "title": "DeSantis takes direct shot at Trump ahead of potential indictment - Axios",
  //         "description": "\"It's not important for me to be fighting with people on social media.\"",
  //         "url": "https://www.axios.com/2023/03/22/desantis-trump-piers-morgan-interview",
  //         "urlToImage": "https://images.axios.com/28VDm7IcLX_nkyhvkG1EaL2tCrY=/0x0:1920x1080/1366x768/2023/03/22/1679484405455.png",
  //         "publishedAt": "2023-03-22T11:26:41Z",
  //         "content": "Florida Gov. Ron DeSantis took direct shots at the competence and character of Donald Trump his likely rival for the '24 GOP nomination after months of brushing off the former president's taunts.\r\nDr… [+2146 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "the-wall-street-journal",
  //             "name": "The Wall Street Journal"
  //         },
  //         "author": "Jared Malsin",
  //         "title": "Russia Launches Attacks Across Ukraine, Killing Four in School Dormitory - The Wall Street Journal",
  //         "description": "Kyiv says most of the Iranian-made drones were shot down by its air defenses",
  //         "url": "https://www.wsj.com/articles/russia-fires-armed-drones-across-ukraine-killing-three-in-school-dormitory-aae731d6",
  //         "urlToImage": "https://images.wsj.net/im-748484/social",
  //         "publishedAt": "2023-03-22T11:26:00Z",
  //         "content": null
  //     },
  //     {
  //         "source": {
  //             "id": "cnn",
  //             "name": "CNN"
  //         },
  //         "author": "Randi Kaye, Christina Maxouris",
  //         "title": "Stephen Smith's case is now being investigated as a homicide, South Carolina law enforcement says - CNN",
  //         "description": "The South Carolina Law Enforcement Division is investigating the death of Stephen Smith, a 19-year-old nursing student whose body was found in the middle of a South Carolina road in 2015, as a homicide, an agency spokesperson told CNN.",
  //         "url": "https://www.cnn.com/2023/03/21/us/stephen-smith-death-homicide-south-carolina/index.html",
  //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230320172903-04-stephen-smith-cold-case.jpg?c=16x9&q=w_800,c_fill",
  //         "publishedAt": "2023-03-22T11:11:00Z",
  //         "content": "The South Carolina Law Enforcement Division is investigating the death of Stephen Smith, a 19-year-old nursing student whose body was found in the middle of a South Carolina road in 2015, as a homici… [+3938 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "Greenville News"
  //         },
  //         "author": "Michael M. DeWitt, Jr.",
  //         "title": "SLED declares Stephen Smith's 2015 death a homicide. Mother Sandy Smith 'in shock, elated' - Greenville News",
  //         "description": "After eight years, Stephen Smith's death will no longer be labeled a hit and run. Now ruled a homicide, here's what to know about SLED's investigation.",
  //         "url": "https://www.greenvilleonline.com/story/news/local/south-carolina/2023/03/22/sled-officially-declares-stephen-smiths-death-a-homicide-mother-murdaugh-updates/70036434007/",
  //         "urlToImage": "https://www.gannett-cdn.com/presto/2022/07/14/PGRE/a19be111-0882-4a1d-835a-0778208e16f9-Stephen_Smith_with_Mom.jpg?crop=598,336,x96,y18&width=598&height=336&format=pjpg&auto=webp",
  //         "publishedAt": "2023-03-22T10:42:37Z",
  //         "content": "Sandy Smith, the mother of Stephen Smith, whose unsolved death has haunted her for eight years, had a short but excited message when she learned that state police are now moving forward with his case… [+4963 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "The Athletic"
  //         },
  //         "author": "Ken Rosenthal",
  //         "title": "Rosenthal: With Shohei Ohtani vs. Mike Trout, WBC scripts the perfect ending as Japan beats USA - The Athletic",
  //         "description": "The two best players in the world, who happen to also be teammates, created a forever moment. Trout conceded, “He won Round One.”",
  //         "url": "https://theathletic.com/4334975/2023/03/22/wbc-final-shohei-ohtani-mike-trout/",
  //         "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/03/22061752/GettyImages-1475179559-1024x683.jpg",
  //         "publishedAt": "2023-03-22T10:34:46Z",
  //         "content": "MIAMI The script, everyone kept talking about the script. For the last month and a half, Mike Trout heard all about how it should play out. Him in the batters box. Shohei Ohtani on the mound. The per… [+9954 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "The Ringer"
  //         },
  //         "author": "The Ringer Staff",
  //         "title": "The ‘Succession’ Season 4 Entrance Survey - The Ringer",
  //         "description": "How will the best show on HBO end? What’s at stake for the show, and for the rotting family it follows? Before the final season, here’s a temperature check.",
  //         "url": "https://www.theringer.com/succession/2023/3/22/23650744/succession-season-4-entrance-survey",
  //         "urlToImage": "https://cdn.vox-cdn.com/thumbor/jivyM8y8F607OFQEpo5Z6W1sI1o=/0x0:1200x628/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24527268/SuccessionEntranceSurvey_Getty_HBO_Ringer.jpg",
  //         "publishedAt": "2023-03-22T10:20:00Z",
  //         "content": "Its been about 15 months since Logan Roy, aided by a last-minute betrayal from his son-in-law, Tom, stabbed his own children in the gut. Since then, weve learned that the upcoming fourth season of Su… [+9008 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "al-jazeera-english",
  //             "name": "Al Jazeera English"
  //         },
  //         "author": "Al Jazeera",
  //         "title": "Five dead as Tanzania detects first-ever Marburg virus outbreak - Al Jazeera English",
  //         "description": "Three of the eight confirmed cases are receiving treatment even as 161 contacts are being monitored, according to WHO.",
  //         "url": "https://www.aljazeera.com/news/2023/3/22/tanzania-detects-its-first-ever-cases-of-the-highly-fatal-marburg-viral-disease",
  //         "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/03/HF_generic.jpg?resize=1620%2C1080",
  //         "publishedAt": "2023-03-22T10:11:53Z",
  //         "content": "Tanzania has confirmed eight cases of Marburg, a high-death viral hemorrhagic fever with symptoms broadly similar to those of Ebola, in its first-ever outbreak, according to the World Health Organiza… [+1425 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "The Guardian"
  //         },
  //         "author": "Nina Lakhani",
  //         "title": "Investment fund links to Atlanta police and ‘Cop City’ project revealed - The Guardian US",
  //         "description": "Roark Capital and Silver Lake Management have a web of connections to the Atlanta police foundation, Cop City and surveillance in the city",
  //         "url": "https://www.theguardian.com/us-news/2023/mar/22/investment-fund-links-atlanta-police-cop-city-project",
  //         "urlToImage": "https://i.guim.co.uk/img/media/68f4efaa216cb5ccf3f713e13a6b329f6eda28ef/0_1_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=81410a3c5d05c95de14f7afd88378445",
  //         "publishedAt": "2023-03-22T10:01:00Z",
  //         "content": "A new investigation has uncovered connections between private equity firms and the contentious development of a sprawling police and fire service training complex in Atlanta known as Cop City and the… [+9213 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "CNBC"
  //         },
  //         "author": "Holly Ellyatt",
  //         "title": "Ukraine war live updates: Latest news on Russia and the war in Ukraine - CNBC",
  //         "description": "Chinese President Xi Jinping left Moscow on Wednesday morning after a three-day visit to the Russian capital that produced mixed results for the allies.",
  //         "url": "https://www.cnbc.com/2023/03/22/ukraine-war-live-updates-latest-news-on-russia-and-the-war-in-ukraine.html",
  //         "urlToImage": "https://image.cnbcfm.com/api/v1/image/107212710-16794292642023-03-21t194822z_165383605_rc2jyz9krr40_rtrmadp_0_china-russia-diplomacy-xi-putin.jpeg?v=1679475467&w=1920&h=1080",
  //         "publishedAt": "2023-03-22T09:47:00Z",
  //         "content": "One of the big questions to emerge from China's President Xi Jinping's visit to Moscow this week is the degree to which it could help Russia both on the battlefield, and off it and what price it coul… [+1076 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "independent",
  //             "name": "Independent"
  //         },
  //         "author": "Abe Asher",
  //         "title": "Trump called for protesters. They turned up and demanded his arrest - The Independent",
  //         "description": "Former president is reportedly on the brink of being indicted",
  //         "url": "https://www.independent.co.uk/news/world/americas/us-politics/trump-protests-charged-manhattan-jail-b2305635.html",
  //         "urlToImage": "https://static.independent.co.uk/2023/03/21/22/1474915263.jpg?quality=75&width=1200&auto=webp",
  //         "publishedAt": "2023-03-22T09:08:45Z",
  //         "content": "Sign up for the daily Inside Washington email for exclusive US coverage and analysis sent to your inbox\r\nGet our free Inside Washington email\r\nFormer President Donald Trump, reportedly on the brink o… [+1818 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "The Moscow Times"
  //         },
  //         "author": "AFP",
  //         "title": "Situation in Sevastopol 'Under Control' as Russian Navy Repels Drone Attack - The Moscow Times",
  //         "description": "The Russian navy \"repelled\" a drone attack on the port of Sevastopol in Moscow-annexed Crimea early on Wednesday, the Kremlin-backed governor of the city said.",
  //         "url": "https://www.themoscowtimes.com/2023/03/22/situation-in-sevastopol-under-control-as-russian-navy-repels-drone-attack-a80573",
  //         "urlToImage": "https://static.themoscowtimes.com/image/og/46/80573__463072b1f08b8d884c49d42bb7b33918.jpg",
  //         "publishedAt": "2023-03-22T09:02:00Z",
  //         "content": "The Russian navy \"repelled\" a drone attack on the port of Sevastopol in Moscow-annexed Crimea early on Wednesday, the Kremlin-backed governor of the city said.\r\nThe peninsula, seized by Russia from U… [+1377 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "TMZ"
  //         },
  //         "author": "TMZ Staff",
  //         "title": "Dick Van Dyke Behind the Wheel in Single-Car Crash - TMZ",
  //         "description": "Dick Van Dyke was behind the wheel of a single-car crash in Malibu.",
  //         "url": "https://www.tmz.com/2023/03/22/dick-van-dyke-car-crash-malibu/",
  //         "urlToImage": "https://imagez.tmz.com/image/08/16by9/2023/03/21/085462a170c3466aa5b82fb2cc98cb68_xl.jpg",
  //         "publishedAt": "2023-03-22T08:45:00Z",
  //         "content": "Dick Van Dyke got into a car crash in Malibu ... though he managed to avoid serious injury.\r\nLaw enforcement sources tell TMZ ... police responded to a call of a single-car accident last Wednesday mo… [+919 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "axios",
  //             "name": "Axios"
  //         },
  //         "author": "Erin Doherty",
  //         "title": "Alvin Bragg: Manhattan DA in spotlight over possible Trump indictment - Axios",
  //         "description": "The possibility of Trump's indictment has thrown Alvin Bragg into the national spotlight.",
  //         "url": "https://www.axios.com/2023/03/21/trump-case-alvin-bragg-manhattan-district-attorney",
  //         "urlToImage": "https://images.axios.com/QvZ2cve6IM2bhKCKUeJHMrCAt_A=/0x299:6000x3674/1366x768/2023/03/21/1679412933440.jpg",
  //         "publishedAt": "2023-03-22T08:31:49Z",
  //         "content": "Manhattan District Attorney Alvin Bragg is at the forefront of the potentially historic indictment of former President Trump over his alleged role in a hush money scheme.\r\nThe big picture: Bragg, a D… [+2912 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "DW (English)"
  //         },
  //         "author": "Deutsche Welle",
  //         "title": "UN warns of 'imminent' global water crisis - DW (English)",
  //         "description": "The UN has released the World Water Development Report 2023, which paints a grim picture of rising global water scarcity. The report says that seasonal scarcity will continue to increase due to climate change.",
  //         "url": "https://www.dw.com/en/un-warns-of-imminent-global-water-crisis/a-65074261",
  //         "urlToImage": "https://static.dw.com/image/61525466_6.jpg",
  //         "publishedAt": "2023-03-22T07:18:14Z",
  //         "content": "About 26% of the global population does not have access to safe drinking water and about 46% of people lack access to safely managed sanitation services, according to a new report by the United Natio… [+1778 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "KCRA Sacramento"
  //         },
  //         "author": "Melanie Wingo",
  //         "title": "C. auris fungus can be stubborn, potentially deadly at long-term health care sites - KCRA Sacramento",
  //         "description": "Infection with C. auris can be so invasive it can have up to a 60% death rate among patients already in the hospital who contract it, according to the Centers for Disease Control and Prevention.",
  //         "url": "https://www.kcra.com/article/c-auris-fungus-deadly-long-term-health-care-sites/43382611",
  //         "urlToImage": "https://kubrick.htvapps.com/vidthumb/18d6e7ef-8fa1-42c5-9538-c9157799fb82/18d6e7ef-8fa1-42c5-9538-c9157799fb82_image.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
  //         "publishedAt": "2023-03-22T06:19:00Z",
  //         "content": "SACRAMENTO, Calif. —Candida auris or C. auris, a multi-drug resistant fungus, is causing concern in long-term health care facility settings as infections have been on the rise over the past couple of… [+2317 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "cnn",
  //             "name": "CNN"
  //         },
  //         "author": "Ashley Strickland",
  //         "title": "RNA compound and vitamin B3 found in samples from near-Earth asteroid - CNN",
  //         "description": "Organic molecules, including uracil and niacin, have been detected in samples collected by Japan's Hayabusa2 mission from the near-Earth asteroid Ryugu. Uracil is a component of RNA while niacin is better known as vitamin B3, a key cofactor for metabolism.",
  //         "url": "https://www.cnn.com/2023/03/21/world/ryugu-asteroid-organic-molecules-scn/index.html",
  //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230321120109-02-ryugu-asteroid-samples.jpg?c=16x9&q=w_800,c_fill",
  //         "publishedAt": "2023-03-22T06:09:00Z",
  //         "content": "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nOrganic molecules have been detected in samples collec… [+4261 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "KABC-TV"
  //         },
  //         "author": null,
  //         "title": "LAUSD strike: LA school workers are striking for better wages. Here's how much they're earning - KABC-TV",
  //         "description": "Service workers for LAUSD are on strike demanding better wages, among other things. Here are some numbers that give context on how much they earn and how it compares to similar jobs.",
  //         "url": "https://abc7.com/lausd-strike-worker-wages-los-angeles-schools-closed/12987866/",
  //         "urlToImage": "https://cdn.abcotvs.com/dip/images/12988172_lausd-strike-img.jpg?w=1600",
  //         "publishedAt": "2023-03-22T05:58:53Z",
  //         "content": "LOS ANGELES (KABC) -- Los Angeles Unified School District employees are on strike and schools are closed. Employees represented by the Service Employees International Union Local 99, including cafete… [+2171 chars]"
  //     }
  // ]
  static defaultProps = {
    country: 'in',
    category: 'science'

  }
  static PropTypes = {
    country: PropTypes.string,
    category: PropTypes.string
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
  nextpages = async () => {
    console.log("next");

    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=us&apiKey=a1d6aabb20f14995b3da0cc890c55452&pagesize=6&page=${this.state.page + 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      article: parsedata.articles,
      page: this.state.page + 1,
      loading: false,
      totalResult:parsedata.totalResult
    })

  }
  prevpages = async () => {
    console.log("prv");

    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=us&apiKey=a1d6aabb20f14995b3da0cc890c55452&pagesize=6&page=${this.state.page - 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      article: parsedata.articles,
      page: this.state.page - 1,
      totalresult: parsedata.totalResult,
      loading: false

    })

  }

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
