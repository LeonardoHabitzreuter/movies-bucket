import { pipe, head, defaultTo } from 'ramda'

export const firstOrNull = array => pipe(
  head,
  defaultTo(null)
)(array)
