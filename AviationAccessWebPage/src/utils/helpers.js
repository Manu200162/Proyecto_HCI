export const formatPrice = () => {};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);

  if (type === "Paises") {
    unique = data.map((item) => item[type].split(","));
    unique = unique.flat();
  } else if (type === "Nacional") {
    unique = data.map((item) => item[type].toString());
  }
  return ["todos", ...new Set(unique)];
};
