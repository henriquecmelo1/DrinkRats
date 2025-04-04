import { deleteLog } from "../services/logService";

interface LogProps {
    Log: {
        drinkName: string;
        time: string;
        date: string;
        id: number;
    }
    
    
}



function Log(props: LogProps) {
    return (
        <div className="card mb-2 mt-2 col-10">

            <div className="card-body d-flex justify-content-between align-items-center ">
                <div className="col-6 d-flex justify-content-around align-items-end">
                    <h5 className="card-title">{props.Log.drinkName}</h5>
                    
                    &nbsp;&nbsp;&nbsp;



                    <h6 className="">{props.Log.date}</h6>
                    <h6 className="">{props.Log.time}</h6>
                    <h6 className="">{props.Log.id}</h6>

                </div>


                <div className="col-4 d-flex justify-content-end align-items-center">
                    {/* <button className="btn btn-warning me-3" >Editar</button> */}
                    {/* futuramente colocar um botão de editar e selecionar qual bebida (seletor) e o dia e horário num modal */}
                    <button className="btn btn-danger" onClick={()=> deleteLog(props.Log.id)}>Excluir</button>
                </div>

            </div>
        </div>
    );
}

export default Log;