const paginate = (followers) => {
  const itemsPerPage = 10;
  // this way we get pages number
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);

  // The Array.from() method returns an array from any object with a length property.
  // The Array.from() method returns an array from any iterable object.

  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });

  return newFollowers;
};

export default paginate;
