import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles = [
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "DragonFire: UK laser could be used against Russian drones on Ukraine front line",
            "description": "The defence secretary said the laser could be used to take down Russian drones as early as 2027.",
            "url": "https://www.bbc.co.uk/news/uk-68795603",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/3847/production/_132370441_dragonfirenightshot_image01.jpg",
            "publishedAt": "2024-04-13T00:37:19.001342Z",
            "content": "A UK high-power laser weapon could be sent to Ukraine to take down Russian drones, the defence secretary says.\r\nAccording to Grant Shapps, the weapon could have \"huge ramifications\" for the conflict … [+3206 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Arizona abortion ban: Kamala Harris blames Trump",
            "description": "Donald Trump has distanced himself from a revived 1864 law that would ban most abortions.",
            "url": "https://www.bbc.co.uk/news/world-us-canada-68803640",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/870D/production/_133137543_gettyimages-2147754502.jpg",
            "publishedAt": "2024-04-12T23:52:19.5829435Z",
            "content": "Vice-President Kamala Harris lambasted Donald Trump over abortion restrictions as she held a campaign rally in Tucson, Arizona on Friday. \r\nThe state was pushed to the front of the US abortion battle… [+2933 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Ukraine Russia war: BBC Russian journalist Ilya Barabanov branded 'foreign agent'",
            "description": "A leading science journalist - Asya Kazantseva - also gets the label used to silence Kremlin critics.",
            "url": "https://www.bbc.co.uk/news/world-europe-68803936",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/15D1D/production/_133137398_mediaitem133137397.jpg",
            "publishedAt": "2024-04-12T23:22:15.0341415Z",
            "content": "The Russian justice ministry has labelled two prominent journalists - BBC Russian correspondent Ilya Barabanov and science reporter Asya Kazantseva - as \"foreign agents\".\r\nBarabanov has written exten… [+1845 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Donald Trump backs Mike Johnson after Mar-a-Lago meeting",
            "description": "It comes as the Republican House speaker faces internal dissent and calls for his removal.",
            "url": "https://www.bbc.co.uk/news/world-us-canada-68790674",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/EE86/production/_133126016_gettyimages-2099360156.jpg",
            "publishedAt": "2024-04-12T23:22:11.7360175Z",
            "content": "Republican Speaker of the House Mike Johnson said he would push for legislation that would require voters to prove they are US citizens after meeting Donald Trump on Friday.\r\nIt was their first publi… [+3986 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Democratic donors paid $1.7m to Biden lawyers in classified files probe",
            "description": "Roughly $1m was paid to the president's private lawyer, while another sum went to a law firm, records show.",
            "url": "https://www.bbc.co.uk/news/world-us-canada-68802293",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/11083/production/_133136796_gettyimages-2147032908.jpg",
            "publishedAt": "2024-04-12T22:07:16.6584076Z",
            "content": "Democratic donors paid at least $1.7m (£1.35m) of US President Joe Biden's legal fees during the investigation into his handling of classified documents, records show.\r\nThe Democratic National Commit… [+2324 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Roberto Cavalli: Italian fashion designer dies aged 83",
            "description": "The designer, famed for his animal prints on leather and textiles, died at home in Florence.",
            "url": "https://www.bbc.co.uk/news/world-europe-68801294",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7303/production/_133134492_gettyimages-457732058.jpg",
            "publishedAt": "2024-04-12T20:37:15.5330313Z",
            "content": "Italian fashion designer Roberto Cavalli, known for his animal prints on leather and textiles, has died aged 83. \r\nThe fashion house that bears his name announced the death on Instagram but provided … [+2094 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "'Huge amount' of Gaza surgery on children, says UK doctor",
            "description": "Doctors who volunteered at a hospital near Khan Younis also said people were clearly malnourished.",
            "url": "https://www.bbc.co.uk/news/world-middle-east-68796689",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/C759/production/_133133015_mediaitem133132881.jpg",
            "publishedAt": "2024-04-12T14:52:18.5177303Z",
            "content": "A British surgeon who recently returned from Gaza has told the BBC how she was struck by the high number of wounded children she operated on.\r\nDr Victoria Rose said a \"huge amount\" of her work was on… [+4996 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Netanyahu meets top officials as fears of Iran attack on Israel grow",
            "description": "US officials tell CBS News that Iran is ready to launch a major strike imminently.",
            "url": "https://www.bbc.co.uk/news/world-middle-east-68796363",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/FAE9/production/_133133246_789e62ada4309ff6a0232395ac600b2dac0b239a.jpg",
            "publishedAt": "2024-04-12T14:37:13.5799096Z",
            "content": "Israel's prime minister is to meet top officials to prepare for a possible attack by Iran, local media say.\r\nTensions are high over the possibility that Tehran will retaliate for an air strike that k… [+2606 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Sir Ian McKellen: The actor on finally playing the role he always said no to in Player Kings",
            "description": "The actor on taking on the role of Falstaff, the \"ultimate gangster\", in his latest West End play.",
            "url": "https://www.bbc.co.uk/news/entertainment-arts-68768274",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/D7D4/production/_133125255_playerkings.ianmckellen-falstaff.credit-manuelharlan.-024.jpg",
            "publishedAt": "2024-04-12T12:37:21.1421869Z",
            "content": "Over the past six decades, Sir Ian McKellen has taken on the role of almost all of William Shakespeare's male protagonists, but there was one particular character he was \"never attracted to\" and alwa… [+5822 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Truong My Lan: Vietnamese billionaire accused in multi-billion dollar bank fraud",
            "description": "Truong My Lan started life as a market trader. Now, she is accused of stealing billions.",
            "url": "https://www.bbc.co.uk/news/world-asia-68778636",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/13723/production/_133115697_gettyimages-2051579415.jpg",
            "publishedAt": "2024-04-10T23:37:11.2939066Z",
            "content": "It is the most spectacular trial ever held in Vietnam, befitting one of the greatest bank frauds the world has ever seen.\r\nBehind the stately yellow portico of the colonial-era courthouse in Ho Chi M… [+6970 chars]"
        }
    ]

    constructor() {
        super()
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <div className="container my-2">
                <h2>Today's 20</h2>
                <div className="row my-2">
                    <div className="col md-4">
                        <NewsItem title="mytitle" discription="mydiscription" imageUrl="https://ichef.bbci.co.uk/news/1024/branded_news/3847/production/_132370441_dragonfirenightshot_image01.jpg" />
                    </div>
                    <div className="col md-4">
                        <NewsItem title="mytitle" discription="mydiscription" imageUrl="https://ichef.bbci.co.uk/news/1024/branded_news/870D/production/_133137543_gettyimages-2147754502.jpg" />
                    </div>
                    <div className="col md-4">
                        <NewsItem title="mytitle" discription="mydiscription" imageUrl="https://ichef.bbci.co.uk/news/1024/branded_news/15D1D/production/_133137398_mediaitem133137397.jpg" />
                    </div>
                </div>
            </div>
        )
    }
}

export default News
