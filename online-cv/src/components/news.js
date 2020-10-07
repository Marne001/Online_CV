import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'


const API = "http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c2cca8b3de6844e3a0e789acf524f939";

class News extends Component{
    constructor(props){
        super(props)
        this.state ={
            articles: [],
        }
    }

    componentDidMount() {
        fetch(API)
        .then(response => response.json())
        .then(data => this.setState({articles: data.articles}));
    }

    

    render(){
        const{articles} = this.state;
        return(
            <div className="News">
                {articles.map(article => 
                    <Card >
                        <Card.Body>
                            <Card.Title><a href={article.url}>{article.title}</a></Card.Title> 
                            <Card.Subtitle className="mb-2 text-muted">{article.source.name}</Card.Subtitle>
                            <Card.Text>{article.description}</Card.Text>
                        </Card.Body>
                    </Card>
                )}
            </div>
        )
    }
}

export default News;