import axios from 'axios'

const searchData = async (term) => {
    const { data } = await axios.get(
        'https://www.googleapis.com/customsearch/v1',
        {
            params: {
                key: 'AIzaSyDqQ1TigjylOVHsIQC8uzuElrTiPhRn3zU',
                cx: 'f2e601b10e0d349be',
                q: term,
            },
        }
    );

    return data;
}

export default searchData