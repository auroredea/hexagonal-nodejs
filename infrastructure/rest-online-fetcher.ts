import { OnlineFetcher } from "../domain/is-online";

export const restOnlineFetcher = (apiKey: string): OnlineFetcher => ({
    response: async (name: string): Promise<boolean> => {
        console.log(apiKey, name);
        //api call
        return Promise.reject("no implemented API call");
    },
});