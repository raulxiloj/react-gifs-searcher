import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from "@testing-library/react-hooks"

describe('Tests in the hook useFetchGifsTest', () => {

    test('It should return the initial state', async () => {

        //const { data: images, loading } = useFetchGifs('Friends');
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Friends'));
        const { data, loading } = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);

    })

    test('It should return an array of imgs and the loading in false', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Friends'));
        await waitForNextUpdate();
        const { data, loading } = result.current;
        expect(data.length).toEqual(10);
        expect(loading).toBe(false);

    })



})
