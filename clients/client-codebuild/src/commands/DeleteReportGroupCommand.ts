// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { DeleteReportGroupInput, DeleteReportGroupOutput } from "../models/models_0";
import { de_DeleteReportGroupCommand, se_DeleteReportGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DeleteReportGroupCommand}.
 */
export interface DeleteReportGroupCommandInput extends DeleteReportGroupInput {}
/**
 * @public
 *
 * The output of {@link DeleteReportGroupCommand}.
 */
export interface DeleteReportGroupCommandOutput extends DeleteReportGroupOutput, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a report group. Before you delete a report group, you must delete its reports. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, DeleteReportGroupCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, DeleteReportGroupCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = { // DeleteReportGroupInput
 *   arn: "STRING_VALUE", // required
 *   deleteReports: true || false,
 * };
 * const command = new DeleteReportGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteReportGroupCommandInput - {@link DeleteReportGroupCommandInput}
 * @returns {@link DeleteReportGroupCommandOutput}
 * @see {@link DeleteReportGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteReportGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 *
 */
export class DeleteReportGroupCommand extends $Command<
  DeleteReportGroupCommandInput,
  DeleteReportGroupCommandOutput,
  CodeBuildClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DeleteReportGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeBuildClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteReportGroupCommandInput, DeleteReportGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteReportGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "DeleteReportGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DeleteReportGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteReportGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteReportGroupCommandOutput> {
    return de_DeleteReportGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
