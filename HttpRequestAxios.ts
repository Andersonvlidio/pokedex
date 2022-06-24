import axios from "axios";

const HttpRequestAxios = async (query : string) => {
    // const axios = require("axios");

    const endpoint = "https://graphql-pokemon2.vercel.app/";
    const headers = {
        "content-type": "application/json",
        "Authorization": "<token>"
    };
    const graphqlQuery = {
        "query": query,
    };

    const response = axios({
    url: endpoint,
    method: 'post',
    headers: headers,
    data: graphqlQuery
    });

    return (await response).data.data;
}

export default HttpRequestAxios;