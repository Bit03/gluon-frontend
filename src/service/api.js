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
        let origin = await fetch(URL.getDappData + slug, {
            credentials: "include"
        });
        let result = await origin.json();

        return result;
    }
    getDappPlatform = async () => {
        let origin = await fetch(URL.getDappPlatform);
        let result = await origin.json();

        return result;
    }
    getDappByPlatform = async ( platform) => {
        let origin;
        if( platform === "All" ){
            origin = await fetch(URL.getDappData);
        }else{
            origin = await fetch(URL.getDappDataByPlatform + platform);
        }
        let result = await origin.json();
        return result;
    }
    getCommitData = async ( login, cb ) => {
        let origin = await fetch(URL.getCommitData + login + '/commit/');
        let result = await origin.json();
        cb(result)
    }
    getPriceData = async ( symbolArray ) => {
        let origin = await fetch(URL.getPriceData + symbolArray);
        let result = await origin.json();

        return result;
    }
    getPageData = async ( platform, page ) => {
        let params;
        if(platform === "All"){
            params = `&page=${page}`
        }else{
            params = `&platform=${platform}&page=${page}`
        }
        let origin = await fetch(URL.getDappData + params, {
            credentials: "include"
        });
        let result = await origin.json();

        return result;
    }
}

const API = new FetchApi()

export default API;