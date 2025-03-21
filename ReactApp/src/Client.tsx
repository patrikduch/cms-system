import "babel-polyfill";

import App from './App';

// Apollo requirements
import { ApolloProvider } from 'react-apollo';
import apolloClient from './lib/client/apollo/create-apollo-store';

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import * as Bundles from "./Bundles";


const bundleSet: any = Bundles;


import { HelmetProvider } from "react-helmet-async";


const helmetContext = {};
const splitPoints = (window as any).splitPoints || [];

Promise.all(
  splitPoints.map((chunk: string) => bundleSet[chunk].loadComponent())
).then(() => {
  const mountNode = document.getElementById("root");

  ReactDOM.hydrate(
            <HelmetProvider context={helmetContext}>
              <ApolloProvider client={apolloClient}>
                <Router>
                  <App />
                </Router>
              </ApolloProvider>
            </HelmetProvider>
          ,
    mountNode
  );
});
