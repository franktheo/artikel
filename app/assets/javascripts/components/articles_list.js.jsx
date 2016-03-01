var ArticlesList = React.createClass({
    getInitialState: function() {
        return { articles: this.props.initialArticles };
    },

    render: function() {
        var articles = this.state.articles.map(function(article) {
            return <Article key={article.id} article={article} />;
        });

        return (
            <div className="articles">
                {articles}
            
            </div>
        );
    }
});
