var galleryData = [
		{ smallURL: "./img/gallery/1_s.jpg", bigURL: "./img/gallery/1_b.jpg" ,title: "Nothing Gold Can Stay"},
		{ smallURL: "./img/gallery/2_s.jpg", bigURL: "./img/gallery/2_b.jpg" , title: "Nothing Gold Can Stay"},
		{ smallURL: "./img/gallery/3_s.jpg", bigURL: "./img/gallery/3_b.jpg" , title: "Nothing Gold Can Stay"},
		{ smallURL: "./img/gallery/4_s.jpg", bigURL: "./img/gallery/4_b.jpg" , title: "Nothing Gold Can Stay"},
		{ smallURL: "./img/gallery/5_s.jpg", bigURL: "./img/gallery/5_b.jpg" , title: "Nothing Gold Can Stay"},
		{ smallURL: "./img/gallery/6_s.jpg", bigURL: "./img/gallery/6_b.jpg" , title: "Nothing Gold Can Stay"}, 
		{ smallURL: "./img/gallery/7_s.jpg", bigURL: "./img/gallery/7_b.jpg" , title: "Nothing Gold Can Stay"},
		{ smallURL: "./img/gallery/8_s.jpg", bigURL: "./img/gallery/8_b.jpg" , title: "Nothing Gold Can Stay"},
		{ smallURL: "./img/gallery/9_s.jpg", bigURL: "./img/gallery/9_b.jpg" , title: "Nothing Gold Can Stay"},
		{ smallURL: "https://farm6.static.flickr.com/5650/22151329006_9d32e48fe9_s.jpg", bigURL: "https://farm6.static.flickr.com/5650/22151329006_9d32e48fe9_b.jpg", title: "Nothing Gold Can Stay" },
		{ smallURL: "https://farm6.static.flickr.com/5650/22151329006_9d32e48fe9_s.jpg", bigURL: "https://farm6.static.flickr.com/5650/22151329006_9d32e48fe9_b.jpg", title: "Nothing Gold Can Stay"}
];

var verseList = [
	{ book: "Psalm 23:4", verse: "Even though I walk through the darkest valley, I will fear no evil, for you are with me"},
	{ book: "Matthew 24:36", verse: "But about that day or hour no one knows, not even the angels in heaven, nor the Son, but only the Father"},
	{ book: "John 15:24", verse: " If I had not done among them the works no one else did, they would not be guilty of sin"}
];

var ThumbNail = React.createClass({
	render: function(){
		return (<a href={this.props.data.bigURL} title={this.props.data.title} data-gallery=""><img src={this.props.data.smallURL} /></a>);
	}
});
var randomVerseID = Math.floor((Math.random()*verseList.length));

var ThumbNailList = React.createClass({
	render: function(){
		var galleryList = this.props.data.map(function(gallery){
			return (<ThumbNail data={gallery} />);
		});				
		return (
			<div>{galleryList}</div>
		);
	}
});

var CollapseBtn = React.createClass({
	render: function(){
		return (
			<div className="navbar-header">
				<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu">
					<span className="icon-bar top-bar"></span>
					<span className="icon-bar middle-bar"></span>
					<span className="icon-bar bottom-bar"></span>
				</button>
				<a className="navbar-brand" href="#">WebSiteName</a>
			</div>
		);
	}
});
var Menu = React.createClass({
	render: function(){
		return(
			<div className="collapse navbar-collapse" id="menu">
				<ul className="nav navbar-nav">
					<li className={this.props.activeTag=='home'? 'active': ''}>
						<a className="RedBtn" href="/home">Home</a>
					</li>
					<li className={this.props.activeTag=='about'? 'active': ''}>
						<a className="OrangeBtn" href="/about">About</a>
					</li>
					<li className={this.props.activeTag=='service'? 'active': ''}>
						<a className="YellowBtn" href="/services">Services</a>
					</li>
					<li className={this.props.activeTag=='partner'? 'active': ''}>
						<a className="GreenBtn" href="/partners">Partners</a>
					</li>
					<li className={this.props.activeTag=='gallery'? 'active': ''}>
						<a className="BlueBtn" href="/galleries">Galleries</a>
					</li>
					<li className={this.props.activeTag=='contact'? 'active': ''}>
						<a className="PurpleBtn" href="/contact">Contact</a>
					</li>
				</ul>
				<ul className="nav navbar-nav navbar-right">
					<li className="nav-divider"></li>
					<li><a href="#">繁</a></li>
					<li className="active"><a href="#">Eng</a></li>
				</ul>
			</div>
		);
	}
});

var Title = React.createClass({
	render: function(){
		return (
			<div className={this.props.cssClass}>
				<h2>{this.props.title}</h2>
			</div>
		);
	}
});

var Header = React.createClass({
	render: function(){
		return(
			<nav className="navbar navbar-default navbar-fixed-top" role="navigation">
				<div className="container">
					<CollapseBtn />
					<Menu />
				</div>
			</nav>
		);
	}
});

var Footer = React.createClass({
	render: function(){
		return (
			<footer>
				<div className="row">
					<div className="col-xs-12">
						<p className="VerseDarkGrey"><strong>Copyright &copy;</strong> Jesus Magician 2015</p>
						<p className="VerseMediumGrey"><strong>{this.props.data.book}</strong> <cite>{this.props.data.verse}</cite></p>
					</div>
				</div>
			</footer>
		);
	}
});
