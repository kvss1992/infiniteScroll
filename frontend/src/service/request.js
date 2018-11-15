// async function
export default async function fetchAsync(page) {
  // await response of fetch call
  let response = await fetch(
    `http://localhost:4001/api/v1/users?start=${page}`
  );
  // only proceed once promise is resolved
  let data = await response.json();
  // only proceed once second promise is resolved
  return data;
}
