// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ACMPCAClient } from "../ACMPCAClient";
import {
  ListPermissionsCommand,
  ListPermissionsCommandInput,
  ListPermissionsCommandOutput,
} from "../commands/ListPermissionsCommand";
import { ACMPCAPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ACMPCAClient,
  input: ListPermissionsCommandInput,
  ...args: any
): Promise<ListPermissionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPermissionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListPermissions(
  config: ACMPCAPaginationConfiguration,
  input: ListPermissionsCommandInput,
  ...additionalArguments: any
): Paginator<ListPermissionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPermissionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ACMPCAClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ACMPCA | ACMPCAClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
