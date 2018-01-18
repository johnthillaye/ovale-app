import react from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from '../selectors/tickers'
import SearchTickerForm from './SearchTickerForm'
import { setCurrentTicker, setSearchQueryTickers, openSettingsDialog } from '../actions/actions'
import styles from '../styles/Tickers'

class Tickers extends react.Component {

  render () {
  	const {dispatch, tickers} = this.props;

  	var rows = tickers.map((ticker) => {
  		return (
			<div className="row" style={styles.categoryItem} onClick={() => dispatch(setCurrentTicker({symbol: ticker.symbol}))} key={ticker.symbol}>
				<div className="col-xs-8" style={styles.symbol}>{ticker.symbol}</div>
				<div className="col-xs-4">{ticker.price}</div>
			</div>
		)
	})

  	return (
  		<div>
	      	<SearchTickerForm onChange={(e) => dispatch(setSearchQueryTickers({query: e.target.value}))}/>
	  		<div style={styles.main}>
	  			<div style={styles.categoryHeader} className="row">
	  				<div className="col-xs-8">Tickers</div>
	  				<div className="col-xs-4" onClick={() => dispatch(openSettingsDialog())}>Settings</div>
	  			</div>
	  			<div>
	  				{rows}
	  			</div>
	  		</div>
	    </div>
	);
  }
}

export default connect(mapStateToProps)(Tickers)