var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle')

var ConfirmBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState: function(){
		console.log('getinititialstate')  
		return{
			isLoading: true,
			playerInfo: []
		}
	},
	componentWillMount: function() {
	    console.log('componentWillMount')  
	},
	componentWillReceiveProps: function() {
	    console.log('componentWillReceiveProps')  
	},
	componentDidMount: function(){
		var query = this.props.location.query;
		console.log('componentDidMount')  

		//fetch info from github
	},
	componentWillMount() {
	    console.log('componentWillUnmount')  
	},
	render: function(){
		return(
			<ConfirmBattle 
				isLoading={this.state.isLoading}
				playerInfo={this.state.playerInfo} />

		)
	}

});


module.exports = ConfirmBattleContainer;