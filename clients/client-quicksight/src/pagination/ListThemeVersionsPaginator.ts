// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListThemeVersionsCommand,
  ListThemeVersionsCommandInput,
  ListThemeVersionsCommandOutput,
} from "../commands/ListThemeVersionsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: QuickSightClient,
  input: ListThemeVersionsCommandInput,
  ...args: any
): Promise<ListThemeVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListThemeVersionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListThemeVersions(
  config: QuickSightPaginationConfiguration,
  input: ListThemeVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListThemeVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListThemeVersionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof QuickSightClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QuickSight | QuickSightClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
