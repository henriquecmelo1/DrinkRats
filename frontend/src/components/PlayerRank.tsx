interface Props {
    name: string;
    points: number;
    index: number;
}


function PlayerRank(props: Props) {
    return (
        <div className="card mb-2 mt-2 col-10">

            <div className="card-body d-flex justify-content-between align-items-center">
                <h5 className="card-title">#{props.index}  {props.name}</h5>

                <div className="d-flex mx-3 justify-content-between gap-2 align-items-baseline">
                    <a href="" className="text-dark text-decoration-none"><i className="bi bi-search fs-6 "></i></a>
                    <h6>{props.points} Pontos</h6>
                </div>

            </div>
        </div>
    )
}

export default PlayerRank;