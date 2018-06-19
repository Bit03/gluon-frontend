import URL from './url';

// const getWithParams = async ( url, params, data ) => {
//     let result = await fetch(url, {
//         headers: {
//             "Accept": "application/json",
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify( data )
//     })
// }
class FetchApi{
    getDappData = async ( slug ) => {
        let origin = await fetch(URL.getDappData + slug);
        let result = await origin.json();

        return result;
    }
    getDappPlatform = async () => {
        let origin = await fetch(URL.getDappPlatform);
        let result = await origin.json();

        return result;
    }
    getDappByPlatform = async ( platform ) => {
        let origin = await fetch(URL.getDappDataByPlatform + platform);
        let result = await origin.json();

        return result;
    }
}

const API = new FetchApi()

export default API;