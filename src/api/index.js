import { newId } from '../common'
import { assoc, append } from 'ramda'
const MOVIES_KEY = 'movies'

const updateStorage = movies => localStorage.setItem(MOVIES_KEY, JSON.stringify(movies))

export const getMovies = () => new Promise(resolve => resolve(JSON.parse(localStorage.getItem(MOVIES_KEY)) || []))

export const storeMovie = movie => new Promise(async resolve => {
  const movies = await getMovies()
  updateStorage(append(assoc('id', newId(), movie), movies))
  resolve('saved')
})

export const removeMovie = id => new Promise(async resolve => {
  const movies = await getMovies()
  updateStorage(movies.filter(movie => movie.id !== id))
  resolve('removed')
})

export const updateMovie = movie => new Promise(async resolve => {
  const movies = await getMovies()
  updateStorage(movies.map(p => p.id === movie.id ? movie : p))
  resolve('updated')
})
