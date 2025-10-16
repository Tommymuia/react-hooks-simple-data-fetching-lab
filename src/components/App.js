import React, { useEffect, useState } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await res.json();
        setDogImage(data.message);
      } catch (error) {
        console.error("Error fetching dog image:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDogImage();
  }, []);

  return (
    <div>
      <h1>Random Dog Image </h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" width="300" />
      )}
    </div>
  );
}

export default App;
