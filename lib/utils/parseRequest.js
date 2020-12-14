module.exports = rawRequest => {
  const requestString = String(rawRequest);
  const data = requestString.split(' ');
  const body = data[4].split('\r\n');
  console.log(data, body, 'hello new console.log here');

  return {
    method: data[0],
    path: data[1],
    body: body[2]
  };
};
