import Fuse from 'fuse.js'

const Searcher = (list, searchValue) => {
  const options = {
    isCaseSensitive: false,
    minMatchCharLength: searchValue.length,
    shouldSort: true,
    includeScore: true,
    location: 1,
    findAllMatches: true,

    keys: ['name'],
  }

  const fuse = new Fuse(list, options)

  // Change the pattern
  let result = fuse.search(searchValue)
  result = result.map((item) => item['item'])

  return result
}

export default Searcher
