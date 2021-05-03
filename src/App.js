import React, { useState } from "react";

import Crypto from "./Crypto";
import Search from "./Search";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";

import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  const [searchCoin, setSearchCoin] = useState("");
  const changeHandler = (e) => {
    setSearchCoin(e.target.value);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Search changeHandler={changeHandler} />
        </Grid>
        <Grid item xs={12}>
          <Crypto crypto={crypto} searchCoin={searchCoin} />
        </Grid>
      </Grid>
    </QueryClientProvider>
  );
};

export default App;
