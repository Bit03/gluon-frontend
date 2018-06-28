const baseUrl = "https://api.dapprank.com"
const URL = {
    getDappData: baseUrl + "/api/dapps/",
    getDappPlatform: baseUrl + "/api/dapps/platform/",
    getDappDataByPlatform: baseUrl + "/api/dapps/?platform=",
    getOrg: baseUrl + "/api/github/org/",
    getCommitData: baseUrl + "/api/github/repos/",
    getPriceData: "https://www.feixiaohao.tech/api/coin/getICOInfo?"
}

export default URL;