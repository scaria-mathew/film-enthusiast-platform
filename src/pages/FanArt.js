import "./FanArt.css";

const fanArts = [
    {
        id: 1,
        movie: "Dune: Part Two",
        image:
            "https://cdna.artstation.com/p/assets/images/images/067/333/808/large/muneeb-ur-rehman-dune-movie-2-x-poster.jpg?1695128869"
    },
    {
        id: 2,
        movie: "Oppenheimer",
        image:
            "https://posterspy.com/wp-content/uploads/2023/08/IMG_6911.jpeg"
    },
    {
        id: 3,
        movie: "Inception",
        image:
            "https://mir-s3-cdn-cf.behance.net/project_modules/disp_webp/7f6be629100611.55e2497765f5f.png"
    }
];

function FanArt() {
    return (
        <div className="fanart">
            <h1 className="page-title">Fan Art</h1>

            <div className="fanart-grid">
                {fanArts.map((art) => (
                    <div key={art.id} className="fanart-card">
                        <img src={art.image} alt={art.movie} />
                        <div className="fanart-overlay">
                            <span>{art.movie}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FanArt;
