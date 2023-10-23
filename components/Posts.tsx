'use client'
import * as React from 'react'
import * as API from 'aws-amplify/api'
import * as subscriptions from '../graphql/subscriptions'
import * as queries from '../graphql/queries'

export const Posts = () => {
  React.useEffect(() => {
    // API.generateClient().graphql({
    //   query: queries.listTacoRecipes,
    // }).then(results => {
    //   console.log(results);
    // })
    const sub = API.generateClient().graphql({
      query: subscriptions.onCreateTacoRecipe,
    }).subscribe({
      next: ({ provider, value }) => console.log({ provider, value }),
      error: (error) => console.warn(error)
    });

    return () => {};
  },[])
  

  return (
    <div>Hello</div>
  )
}
