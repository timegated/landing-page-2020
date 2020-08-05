// AJAX
const fetchProjects = (url) => {
  return fetch(url).then(function (res) {
      return res.json()
  }).then(function (json) {
      return json;
  })
};

export default fetchProjects;