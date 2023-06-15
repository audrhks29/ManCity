import player from '../assets/api/data';
import '../assets/css/reset.css'
const Main = () => {
    return (
        <div className='wrap'>
            <div className="posFWCon">
                <div className="inner">
                    <h2>FW</h2>
                    <ul>
                        {
                            player.filter(item => item.position === "FW").map(item => {
                                const { name, img, no } = item
                                return <li key={no} data-id={no}><img src={`./images${img}`} alt="" /><span>{name}</span></li>
                            })
                        }
                    </ul>
                </div>
            </div>

            <div className="posMFCon">
                <div className="inner">
                    <h2>MF</h2>
                    <ul>
                        {
                            player.filter(item => item.position === "MF").map(item => {
                                const { name, img, no } = item
                                return <li key={no} data-id={no}><img src={`./images${img}`} alt="" /><span>{name}</span></li>
                            })
                        }
                    </ul>
                </div>
            </div>

            <div className="posDFCon">
                <div className="inner">
                    <h2>DF</h2>
                    <ul>
                        {
                            player.filter(item => item.position === "DF").map(item => {
                                const { name, img, no } = item
                                return <li key={no} data-id={no}><img src={`./images${img}`} alt="" /> <span>{name}</span></li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="posGKCon">
                <div className="inner">
                    <h2>GK</h2>
                    <ul>
                        {
                            player.filter(item => item.position === "GK").map(item => {
                                const { name, img, no } = item
                                return <li key={no} data-id={no}><img src={`./images${img}`} alt="" /><span>{name}</span></li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Main;