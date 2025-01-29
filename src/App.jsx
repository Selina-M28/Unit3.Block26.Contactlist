import React, { useState } from "react";

import Contactlist from "./components/Contactlist/Contactlist";
import SingleUserDetails from "./components/SingleUserDetails/SingleUserDetails";

function App() {
  const [featuredUser, setFeaturedUser] = useState(null);
  return (
    <>
      <h2>{featuredUser}</h2>
      {featuredUser ? (
        <SingleUserDetails
          setFeauredUser={setFeaturedUser}
          featuredUser={featuredUser}
        />
      ) : (
        <Contactlist setFeaturedUser={setFeaturedUser} />
      )}
    </>
  );
}

export default App;
