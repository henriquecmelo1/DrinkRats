

export const addPlayer = (playerName: string) => {
  return fetch("http://127.0.0.1:8000/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: playerName, points: 0 }),
  })
    .then((response) => response.json())
    .then(() => window.location.reload())
    .catch((error) => {
      console.error("Error adding player:", error);
      throw error;
    });
};


export const deletePlayer = (player_id: number) => {
  return fetch(`http://127.0.0.1:8000/users/${player_id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(() => window.location.reload())
    .catch((error) => {
      console.error("Error deleting player:", error);
      throw error;
    });
};



export const updatePlayer = (Player: { name: string, id: number, points: number }, newName: string) => {
  return fetch(`http://127.0.0.1:8000/users/${Player.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: newName, points: Player.points }),
  })
    .then((response) => response.json())
    .then(() => window.location.reload())
    .catch((error) => {
      console.error("Error updating player:", error);
      throw error;
    });
};


export const getPlayers = () => {
  return fetch("http://127.0.0.1:8000/users/")
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching players:", error);
      throw error;
    });
};


