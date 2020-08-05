// AJAX
const fetchProjects = async (url) => {
  return fetch(url).then(function (res) {
      return res.json()
  }).then(function (json) {
      console.log(json)
      return json;
  })
};

export default fetchProjects;