const baseUrl = "https://api.dapprank.com"
// const baseUrl = ""
const PageSize = 21
const URL = {
    getDappData: baseUrl + `/api/dapps/?size=${PageSize}`,
    getDappPlatform: baseUrl + "/api/dapps/platform/",
    getDappDataByPlatform: baseUrl + `/api/dapps/?size=${PageSize}&platform=`,
    getOrg: baseUrl + "/api/github/org/",
    getCommitData: baseUrl + "/api/github/repos/",
    getStateData: baseUrl + "/api/github/repos/",
    getDetailData: baseUrl + "/api/dapps/",
    getPriceData: "https://api.blockinner.com/v2/api/coin/getICOInfo?",
    getSearchData: "https://api.chainnews.com/api/articles/search?q="
}

export default URL;