const unslugify = (slug: string) => slug.replace(/\-/g, " ")
  .replace(/\w\S*/g,
  (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
);

export default unslugify