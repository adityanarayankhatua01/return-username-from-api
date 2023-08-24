/**
 * Displays a list of elements after sorting the input array
 * @param {Array} arr
 */
function generateSortedList(arr) {
  // 1. Sort the array
  // 2. Get the parent <ul> element
  // 3. For each of the array elements
  // 3.1 Create a new <li> element
  // 3.2 Set text of the new <li> element as the current array element
  // 3.3 Append the new <li> element to the parent <ul> element

  arr.sort();
  const sorting = document.getElementById("sorted-list");

  arr.forEach((element) => {
    const list = document.createElement("li");
    list.textContent = element;
    sorting.append(list);
  });
}

generateSortedList([2, 1, 4, 3]); // Displays a list with 1, 2, 3, 4 on screen
// generateSortedList([1, 2, 3]);
// generateSortedList([]);
