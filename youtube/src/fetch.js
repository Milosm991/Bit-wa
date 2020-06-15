export const fetchVideos = (inputValue) => {
    const key = 'AIzaSyCT_pjjK5oY3Q71it5ml0xvoaTwvZ-VJiE'

    return fetch(`https://www.googleapis.com/youtube/v3/search?maxResults=25&part=snippet&q=${inputValue}&key=${key}`)
        .then(resolve => resolve.json())
}

export const fetchRelatedVideos = (id) => {
    const key = 'AIzaSyCT_pjjK5oY3Q71it5ml0xvoaTwvZ-VJiE'

    return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&relatedToVideoId=${id}&type=video&key=${key}`)
        .then(resolve => resolve.json())
}