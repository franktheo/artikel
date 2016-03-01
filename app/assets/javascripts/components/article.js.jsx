var Article = React.createClass({
    render: function() {
        return (
            <div className="article">
                <ArticleHeader article={this.props.article} />
                <ArticleDescription article={this.props.article} />
            </div>
        );
    }
});

var ArticleHeader = React.createClass({
    render: function() {
        return (
            <div className="article-header">
                

                <h2>{this.props.article.title}</h2>
                <div className="article-meta">
                    Author: {this.props.article.author}
                </div>
                <div className="article-meta">
                    Created on {this.props.article.created_at}
                </div>
               
            </div>
        );
    }
});

var ArticleDescription = React.createClass({
    render: function() {
        return (
            <div className="article-description">
                {this.props.article.description}
                <hr> </hr>
            </div>
        );
    }
});
