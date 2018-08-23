const MOVIES_KEY = 'movies'

const updateStorage = movies => localStorage.setItem(MOVIES_KEY, JSON.stringify(movies))

export const getMovies = () => new Promise(resolve => resolve(JSON.parse(localStorage.getItem(MOVIES_KEY))))

export const storeMovie = movie => new Promise(resolve => {
  const movies = await getMovies()
  updateStorage([ ...movies, movie ])
  resolve('saved')
})

export const removeMovie = id => new Promise(resolve => {
  const movies = await getMovies()
  updateStorage(movies.filter(movie => movie.id !== id))
  resolve('removed')
})
