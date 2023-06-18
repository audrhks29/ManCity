
const Inner = ({ data, posi, idx, liClick, isOpen }) => {
    return (
        <div className='inner'>
            <h2>{posi[idx]}</h2>
            <ul className="playersByPosition">
                {
                    data.filter(item => item.playerInfo.position === posi[idx]).map(item => {
                        const { name, no, id } = item
                        const { img } = item.playerInfo
                        return <li key={id} data-id={no} onClick={() => liClick(name)}><img src={`./images${img}`} alt="" /><span>{name}</span></li>
                    })
                }
            </ul>


        </div>
    );
};

export default Inner;