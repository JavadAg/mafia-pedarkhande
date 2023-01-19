export function arrayDupCount(array: any[], value: any) {
  return array.filter((v) => v.name == value.name).length
}
