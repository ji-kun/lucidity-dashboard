export const fetchInfo = () => {
  fetch("https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory", {
    method: "GET",
  }).then((response) => response.json())
    .then((result) => {
      return result
    })
}
