export const fetchVideos = (inputValue) => {
    const key = 'AIzaSyBDuTLHqG4n0nkLc7lHYdLG39AXLcISBQo'

    return fetch(`https://www.googleapis.com/youtube/v3/search?maxResults=25&part=snippet&q=${inputValue}&key=${key}`)
        .then(resolve => resolve.json())
}