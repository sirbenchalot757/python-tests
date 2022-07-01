const url= process.env.NEXT_PUBLIC_DEVELOPMENT ?? '/api/runPython'

const callPythonApi = (bodyContent, setOutput) => {
    const response = {}
    fetch(url, { 
        method: "POST",
        body: bodyContent,
      }).then(function(response) {
        return response.text();
      }).then(function(data) {
        console.log(data);
        setOutput(data)
      })
        .catch(function(error) {
            console.log(error);
            }
        );
    return response
    }

export default callPythonApi;