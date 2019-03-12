import React , {Component, PureComponent} from 'react';

class Article extends PureComponent {

    constructor(props){
        super(props);
        this.state = {
            count:0
        };
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     return this.state.isOpen !== nextState.isOpen
    // }

    componentWillMount(){
       // console.log('--','mounting')
    }

    // componentWillReceiveProps(nextProps){
    //     console.log('--','will receive props')
    //     if (nextProps.defaultOpen !== this.props.defaultOpen ){
    //         this.setState({
    //             isOpen:nextProps.defaultOpen
    //         });
    //     }
    // }

    componentWillUpdate(){
       // console.log('--','will update ')
    }

    incrementCounter=()=>{
        this.setState({
            count: this.state.count + 1
        });
    };

    render(){
        const {article , isOpen, onButtonClick} = this.props;
        const body = isOpen && <section className="card-text">{article.text}</section>;
        return (
            <div className="card">
                <div className="card-header">
                    <h2 onClick={this.incrementCounter}>{article.title}
                    clicked{this.state.count}
                        <button className="btn btn-info btn-lg float-right" onClick={onButtonClick}>
                            {isOpen ? 'close':'open'}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    {body}
                    <h6 className="card-subtitle text-muted">creation date:{(new Date(article.date)).toDateString()}</h6>
                </div>
            </div>
        );
    }
}

export default Article;
