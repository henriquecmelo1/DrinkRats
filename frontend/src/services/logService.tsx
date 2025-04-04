export const getLogsFromPlayer = (player_id: number) => {
    return fetch(`http://127.0.0.1:8000/logs/user/${player_id}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching drinks:", error);
      throw error;
    });
};

export const deleteLog = (log_id: number) => {
  return fetch(`http://127.0.0.1:8000/logs/${log_id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(() => window.location.reload())
    .catch((error) => {
      console.error("Error deleting log:", error);
      throw error;
    });
};


export const addLog = (player_id: number, drink_id: number) => {
  const now = new Date();

  const date = now.toISOString().split("T")[0]; // "YYYY-MM-DD"
  const time = now.toISOString().split("T")[1]; // "HH:MM:SS.sssZ"

  
    return fetch("http://127.0.0.1:8000/logs/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: player_id, drink_id: drink_id, date: date, time: time }),
    })
      .then((response) => response.json())
      .then(() => window.location.reload())
      .catch((error) => {
        console.error("Error adding log:", error);
        throw error;
      });
};


export const deleteLastDrink = (player_id: number, drink_id:number) => {
  return fetch(`http://127.0.0.1:8000/logs/${player_id}/${drink_id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(() => window.location.reload())
    .catch((error) => {
      console.error("Error deleting log:", error);
      throw error;
    });
};

export const getDrinkAmount = (player_id: number) => {
  return fetch(`http://127.0.0.1:8000/logs/drinks/${player_id}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching drinks:", error);
      throw error;
    });
};