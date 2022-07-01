const url= process.env.NEXT_PUBLIC_DEVELOPMENT ?? '/api/runPython'

const callPythonApi = (bodyContent) => {
    const response = {}
    fetch(url, { 
        method: "POST",
        body: bodyContent,
      }).then(function(response) {
        response = response.text()
        return response.text();
      }).then(function(data) {
        console.log(data);
        response = data
      })
        .catch(function(error) {
            console.log(error);
            }
        );
    return response
    }

export default callPythonApi;