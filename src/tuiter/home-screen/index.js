import React, { useState, useEffect } from "react";
import * as tuitsService from "../tuits-service";

function HomeScreen() {
  const [tuit, setTuit] = useState("");
  const [allTuits, setAllTuits] = useState([]);

  useEffect(() => {
    const fetchAllTuits = async () => {
      try {
        const tuits = await tuitsService.findAllTuits();
        setAllTuits(tuits);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllTuits();
  }, []);

  const handleTuit = async () => {
    try {
      await tuitsService.createTuit({ tuit: tuit });
      setTuit("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Home Screen</h1>
      <textarea
        placeholder="What's happening?"
        className="form-control"
        value={tuit}
        onChange={(e) => setTuit(e.target.value)}
      ></textarea>
      <button
        onClick={handleTuit}
        className="btn btn-primary rounded-pill w-100"
      >
        Tuit
      </button>
      <pre>{JSON.stringify(allTuits, null, 2)}</pre>
    </div>
  );
}

export default HomeScreen;
