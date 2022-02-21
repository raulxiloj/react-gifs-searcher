export const getGifs = async (category) => {
    const random_offset = getRandom(50,300)
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=12&offset=${random_offset}&api_key=EF8bPum3fkHFrIAyA0KIXagjYLtY03f7`;
    const res = await fetch(url);
    const { data } = await res.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    return gifs;
}

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}