/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

export function sortStrings(arr, param = 'asc') {

  const collator = new Intl.Collator(['ru', 'en'], {
    caseFirst: "upper", 
    sensitivity: "variant",
    usage: "sort"
  })
  
  const newArr = [...arr]
  return param === 'asc' ? newArr.sort(collator.compare) : newArr.sort(collator.compare).reverse()
}
