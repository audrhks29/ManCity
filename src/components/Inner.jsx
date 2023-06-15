
const Inner = ({ data, posi, idx, liClick }) => {
    return (
        <div className='inner'>
            <h2>{posi[idx]}</h2>
            <ul>
                {
                    data.filter(item => item.playerInfo.position === posi[idx]).map(item => {
                        const { name, no } = item
                        const { img } = item.playerInfo
                        return <li key={no} data-id={no}><img src={`./images${img}`} alt="" onClick={() => liClick(name)} /><span>{name}</span></li>
                    })
                }
            </ul>


        </div>
    );
};

export default Inner;