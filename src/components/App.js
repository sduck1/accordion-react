import React, {PureComponent} from 'react';
import ArticleList from './ArticleList';
import articles from '../fix.json';
import 'bootstrap/dist/css/bootstrap.css'

class App extends  PureComponent{
    state = {
        reverted :false
    }

    render(){
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">App name</h1>
                    <button className="btn btn-dark" onClick={this.revert}>revert</button>
                </div>
                <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles} />
            </div>
        );
    }

    revert=()=>{
        this.setState({
            reverted: !this.state.reverted
        });
    }
}

export default  App;