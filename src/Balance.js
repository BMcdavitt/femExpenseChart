import './dist/Balance.css'
import logo from './images/logo.svg'

function Balance() {
    return (
        <div className="Balance">
            <div>
            My Balance
            <div className="Value">
                $921.48
            </div>
            </div>
            <img src={logo} />
        </div>
    )
}

export default Balance;