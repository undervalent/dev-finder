import React from 'react'
import { useFetchGithubUser } from '../../services'

export function Search() {
const output = useFetchGithubUser();
console.log('OUTPUT -->',output)
 return (<div>
SEARCH
          </div>)
}


