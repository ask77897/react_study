import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './ChampionGrid.css';

function Champ() {
    const [champs, setChamps] = useState([]);

    useEffect(()=>{
        fetch('https://ddragon.leagueoflegends.com/cdn/13.18.1/data/ko_KR/champion.json')
            .then(response => response.json())
            .then(data => setChamps(Object.values(data.data)))

    },[])

    return(
        <>
            <h1>챔피언 목록</h1>
            <div className="champ-grid">
                {champs.map(champion => (
                    <Link to={`/champions/${champion.id}`} key={champion.key} className="champ-link">
                        {/* <img src={`http://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/${champion.id}.png`} alt="{champion.name}"/> */}
                        <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`} alt="{champion.name}" style={{width:'70px', height:'auto'}}/>
                        {champion.name}, {champion.title}, {champion.attack}
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Champ;