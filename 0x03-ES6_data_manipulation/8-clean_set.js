export default function cleanSet(set, startString) {
  let result = '';

  for (const value of set) {
    if (startString && value.startsWith(startString)) {
      result += `${value.substring(startString.length)}-`;
    }
  }

  // Remove the trailing '-'
  result = result.slice(0, result.length - 1);

  return result;
}
