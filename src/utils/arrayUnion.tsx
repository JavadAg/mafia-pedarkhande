import _ from 'lodash'
export const arrayUnion = (arr1: any[], arr2: any[], identifier: string) => {
  const array = [...arr1, ...arr2]

  return _.uniqBy(array, identifier)
}
