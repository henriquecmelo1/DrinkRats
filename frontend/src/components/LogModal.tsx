import Log from "./Log";
import { getLogsFromPlayer } from "../services/logService";
import { useEffect, useState } from "react";



interface LogModalProps {
    isOpen: boolean;
    close: () => void;
    Log? : {
        drinkName: string;
        time: string;
        date: string;
    }
    playerName: string;
    player_id: number;
}




function LogModal(props: LogModalProps) {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        if (props.isOpen) {
            getLogsFromPlayer(props.player_id).then((data) => {
                setLogs(data);
            });
        }
    }, [props.isOpen]);

    if (props.isOpen) {
    return (
        <div className="modal show d-block" tabIndex={-1} role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog"style={{ maxWidth: "75%"}} role="document">
                <div className="modal-content">

                    <div className="modal-header justify-content-between">
                        <h5 className="modal-title">{props.playerName}</h5>
                        <button type="button" className="close" onClick={props.close}>
                            <span>&times;</span>
                        </button>
                    </div>


                    <div className="modal-body d-flex flex-column justify-content-center align-items-center">
                        
                    {logs.map((singleLog) => (
                    <Log Log={singleLog} />
                ))}

                    </div>


                </div>
            </div>
        </div>
    )} else {
        return null;

    }
};

export default LogModal;