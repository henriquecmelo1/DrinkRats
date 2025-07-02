interface Drink {
  name: string;
  description: string;
  points: number;
}

const baseUrl = "http://127.0.0.1:8000"

export const addDrink = (drink: Drink) => {
  return fetch(`${baseUrl}/drinks/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: drink.name, points: drink.points, description: drink.description }),
  })
    .then((response) => response.json())
    .then(() => window.location.reload())
    .catch((error) => {
      console.error("Error adding player:", error);
      throw error;
    });
};

export const getDrinks = () => {
  return fetch(`${baseUrl}/drinks/`)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching drinks:", error);
      throw error;
    });


};

export const deleteDrink = (drink_id: number) => {
  return fetch(`${baseUrl}/drinks/${drink_id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(() => window.location.reload())
    .catch((error) => {
      console.error("Error deleting drink:", error);
      throw error;
    });
};

export const updateDrink = (drink: Drink, drink_id: number) => {
  return fetch(`${baseUrl}/drinks/${drink_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: drink.name, points: drink.points, description: drink.description }),
  })
    .then((response) => response.json())
    .then(() => window.location.reload())
    .catch((error) => {
      console.error("Error updating drink:", error);
      throw error;
    });

};


export const increaseDrinkPoints = (drink_id: number, drink: Drink, points:number) => {
  return fetch(`${baseUrl}/drinks/${drink_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: drink.name, points: points, description: drink.description }),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error updating drink:", error);
      throw error;
    });
};

export const decreaseDrinkPoints = (drink_id: number, drink: Drink, points: number) => {
  return fetch(`${baseUrl}/drinks/${drink_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: drink.name, points: points, description: drink.description }),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error updating drink:", error);
      throw error;
    });
};