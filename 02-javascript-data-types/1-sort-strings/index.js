/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

const collator = new Intl.Collator(['ru', 'en'], {
  caseFirst: "upper", 
  sensitivity: "variant",
  usage: "sort"
})

export function sortStrings(arr, param = 'asc') {
  const newArr = [...arr]

  return param === 'asc'
  ?
  newArr.sort ((a, b) => collator. compare(a, b))
  :
  newArr.sort ((a, b) => collator. compare (b, a))
}

