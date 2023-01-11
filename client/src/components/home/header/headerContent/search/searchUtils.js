import locations from "../../../../locations.json";

const locationAutoComplete = (val, setVal, setSuggestionsArr) => {
  const arr = [];
  setVal(val);
  if (val) {
    locations.forEach((location) => {
      location.label = `${location.name}(${location.city})`;
      if (
        location.city.toLocaleLowerCase().startsWith(val.toLocaleLowerCase()) ||
        location.country
          .toLocaleLowerCase()
          .startsWith(val.toLocaleLowerCase()) ||
        location.name.toLocaleLowerCase().startsWith(val.toLocaleLowerCase())
      ) {
        arr.push(location);
      }
    });
  }
  arr.sort(function (a, b) {
    return b.direct_flights - a.direct_flights;
  });
  setSuggestionsArr(arr.slice(0, 10));
};

export { locationAutoComplete };
