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