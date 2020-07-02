import { getGifs } from "../../helpers/getGifs"

describe('Tests with getGifs Fetch', () => {

    test('should bring 10 elements', async () => {
        const gifs = await getGifs('Bob esponja');
        expect(gifs.length).toBe(10);
    });

    test('should bring 10 elements', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });

})
