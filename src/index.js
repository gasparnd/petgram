import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Context from './Context'

import { App } from './App.js'

const client = new ApolloClient({
  uri: 'https://petgram-server-gasparnd.vercel.app/graphql',
  request: operation => {
    const token = window.sessionStorage.getItem('token')
  	const ahutorization = token ? `Bearer ${token}` : ''
  	operation.setContext({
      headers: {
      	ahutorization
      }
  	})
  }
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
)
