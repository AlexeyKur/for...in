export default function sort(obj, arr) {
  const result = [];
  const objSorted = Object.fromEntries(Object.entries(obj).sort());
  for (const key in obj) {
    if (arr.includes(key)) {
      const index = arr.findIndex((item) => item === key);
      result[index] = { key, value: objSorted[key] };
    }
  }
  for (const key in objSorted) {
    if (!arr.includes(key)) {
      result.push({ key, value: objSorted[key] });
    }
  }
  return result;
}