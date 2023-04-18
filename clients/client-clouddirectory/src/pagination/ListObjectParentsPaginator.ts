// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListObjectParentsCommand,
  ListObjectParentsCommandInput,
  ListObjectParentsCommandOutput,
} from "../commands/ListObjectParentsCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CloudDirectoryClient,
  input: ListObjectParentsCommandInput,
  ...args: any
): Promise<ListObjectParentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListObjectParentsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListObjectParents(
  config: CloudDirectoryPaginationConfiguration,
  input: ListObjectParentsCommandInput,
  ...additionalArguments: any
): Paginator<ListObjectParentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListObjectParentsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudDirectoryClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudDirectory | CloudDirectoryClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
