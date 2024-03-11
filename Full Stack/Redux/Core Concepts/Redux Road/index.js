const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
};

const adventureGame = (state = initialWagonState, action) => {
  switch (action.type) {
    case "gather": {
      return {
        ...state,
        supplies: state.supplies + 15,
        distance: state.distance,
        days: state.days + 1,
      };
    }

    case "travel": {
      const days = action.payload;
      const newSupplies = state.supplies - 20 * days;
      if (newSupplies < 0) {
        return state;
      }
      return {
        ...state,
        supplies: newSupplies,
        distance: state.distance + 10 * days,
        days: state.days + days,
      };
    }

    case "tippedWagon": {
      return {
        ...state,
        supplies: state.supplies - 30,
        days: state.days + 1,
      };
    }

    default: {
      return state;
    }
  }
};

let wagonState = adventureGame(undefined, {});
wagonState = adventureGame(wagonState, { type: "travel", payload: 1 });

console.log(wagonState);
wagonState = adventureGame(wagonState, { type: "gather", payload: 0 });
console.log(wagonState);
wagonState = adventureGame(wagonState, { type: "tippedWagon", payload: 0 });
console.log(wagonState);
wagonState = adventureGame(wagonState, { type: "travel", payload: 3 });
console.log(wagonState);

// Well done! You’ve taken great strides on the Redux Road. Watch your supplies and watch out for snakes!

// If you’d like to keep practicing, try implementing these features:

// Add a cash property, beginning with 200 for the initial state
// Add a 'sell' case: Players can give away 20 supplies to gain 5 cash
// Add a 'buy' case: Players can gain 25 supplies at the cost of 15 cash
// Add a 'theft' case: Outlaws steal half of the player’s cash
