import ReactDOM from 'react-dom';
import RandomPun from './components/randomPun/randomPun';
import DateTicker from './components/dateTicker/dateTicker';

import './styles.scss';

const App = () => {
    return (
        <div className="site-container">
            <div className="header">
                <h1>PunDay</h1>
                <h2><DateTicker /></h2>
            </div>
            <RandomPun />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));