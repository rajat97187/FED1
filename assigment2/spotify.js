const apiUrl = 'https://api.spotify-api.com';

async function fetchData(endpoint, queryParams = '') {
  try {
    const response = await fetch(`${apiUrl}${endpoint}?${queryParams}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData('/v1/popular-songs')
  .then(data => {
    console.log('Popular songs:', data);
  })
  .catch(error => {
    console.error('Error fetching popular songs:', error);
  });

fetchData('/v1/songs/123456789', 'id')
  .then(data => {
    console.log('Song:', data);
  })
  .catch(error => {
    console.error('Error fetching song:', error);
  });

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP error! Status: ${response.status}');
    }
    return response.json();
  })
  .then(masterplayData => {
    console.log('Masterplay Data:', masterplayData);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });