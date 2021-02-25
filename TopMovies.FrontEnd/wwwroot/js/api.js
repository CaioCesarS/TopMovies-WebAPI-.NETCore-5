const Api = (function () {
  base_url = "https://localhost:5001/";
  headers = {
    'content-type': 'application/json',
    accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    //Authorization: `Bearer ${token}`,
  };

  return {
    base_url,
    headers,
  };
})();
