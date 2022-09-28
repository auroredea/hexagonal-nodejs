import { OnlineFetcher } from "./domain/is-online";
import { restOnlineFetcher } from "./infrastructure/rest-online-fetcher";

type Dependencies = {
    port: OnlineFetcher;
}

const key = "myKey";

export const dependencies: Dependencies = {
    port: restOnlineFetcher(key),
};