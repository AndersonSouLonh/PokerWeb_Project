// As of now I am making the waiting room
// Might change the layout later

const GameSetting = () => {

    const players = [
        {
            id: 1,
            name: 'Player 1',
            isHost: true,
        },
        {
            id: 2,
            name: 'Player 2',
            isHost: false,
        },
        {
            id: 3,
            name: 'Player 3',
            isHost: false,
        },
        {
            id: 4,
            name: 'Player 4',
            isHost: false,
        },
        {
            id: 5,
            name: 'Player 5',
            isHost: false,
        },
        {
            id: 6,
            name: 'Player 6',
            isHost: false,
        },
        {
            id: 7,
            name: 'Player 7',
            isHost: false,
        },
        {
            id: 8,
            name: 'Player 8',
            isHost: false,
        },
    ];

    const smallBlind = '$5';
    const bigBlind = '$10';

    return (
        // Poker table:
        <>
            <div style = {{ display: 'flex', alignItems: 'stretch', gap: '20px' , height: '100vh'}}>
                {/* Adding Seats around the table */}
                <div
                    style = {{
                        position: 'relative',
                        width: '75vw',
                        height: '50vh',
                        flexShrink: 0,
                        marginLeft: '40px',
                        marginTop: '40px'
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',  // NEW
                            top: '40px',            // NEW - leaves room for seats
                            left: '40px',           // NEW
                            right: '40px',          // NEW
                            bottom: '40px',         // NEW
                            borderRadius: '50%',
                            backgroundColor: '#1a5276',
                            border: '12px solid #6b3f1d',
                        }}
                    />

                    {/* NEW: seat squares around the table edge */}
                    {Array.from({ length: 8}).map((_, index) => {
                        const angle = (index / 8) * 2 * Math.PI;
                        const radiusX = 50;
                        const radiusY = 50;
                        const left = 50 + radiusX * Math.cos(angle);
                        const top = 50 + radiusY * Math.sin(angle);

                        return (
                            <div
                                key={index}
                                style={{
                                    position: 'absolute',
                                    top: `${top}%`,
                                    left: `${left}%`,
                                    transform: 'translate(-50%, -50%)',
                                    width: '50px',
                                    height: '50px',
                                    backgroundColor: '#333',
                                    border: '2px solid #c9a24b',
                                }}
                            />
                        );
                    })}
                </div>

                {/* Player list box */}
                <div
                    style = {{
                        width: '300px',
                        height: '100%',
                        flexShrink: 0,
                        backgroundColor: '#1c1c1c',
                        border: '3px solid #3e2723',
                        padding: '20px',
                        color: 'white',
                        boxSizing: 'border-box',
                        marginLeft: 'auto'
                    }}
                >
                    <h3 style = {{ marginTop: 0, textAlign: 'center' }}> Players ({players.length}/8)</h3>
                    <ul style = {{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {players.map((player) => (
                            <li
                                key = {player.id}
                                style = {{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: '10px 0',
                                    borderBottom: '1px solid #444',
                                }}
                            >
                                <div style = {{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span>
                                        Player {player.id}: {player.name}
                                        {player.isHost && " (Host)"}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Game Info section */}
                    <h3 style = {{ textAlign: 'center', marginTop: '180px' }}> Game Info </h3>
                    <div 
                        style = {{
                            paddingTop: '15px',
                            borderTop: '1px solid #444',
                        }}
                    >
                        <div style = {{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                            <span style = {{ color: '#aaa' }}> Game Type: </span>
                            <span> Texas Hold'em </span>
                        </div>
                        <div style = {{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                            <span style = {{ color: '#aaa' }}> Small Blind: </span>
                            <span> {smallBlind} </span>
                        </div>
                        <div style = {{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                            <span style = {{ color: '#aaa' }}> Big Blind: </span>
                            <span> {bigBlind} </span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Bottom text */}
            <div
                style = {{
                    position: 'absolute',
                    bottom: '250px',
                    left: '40%',
                    top: 'calc(40px + 50vh + 50px)',
                    transform: 'translate(-50%, 100%)',
                    textAlign: 'center',
                    color: 'white',
                    width: '100%',

                }}
            >
                <h2 style = {{ margin: 0, fontSize: '64px'}}> Waiting for the host to start... </h2>
                <p style = {{ margin: '4px 0 0 0', fontSize: '18px' }}> Grab a seat, and get ready to play!</p>

                <div
                    style = {{
                        display: 'inline-block',
                        marginTop: '30px',
                        padding: '8px 30px',
                        border: '2px solid #6b6b6b',
                        borderRadius: '999px',
                        backgroundColor: 'rgba(0, 0, 0, 0.35)',
                    }}
                >
                    <p style = {{ margin: '4px 0 0 0', fontSize: '20px' }}> 🕐 Waiting for the host... </p>
                </div>
            </div>
        </>
    );
}

export default GameSetting;