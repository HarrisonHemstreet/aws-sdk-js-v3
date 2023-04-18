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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DetachNetworkInterfaceRequest } from "../models/models_5";
import { de_DetachNetworkInterfaceCommand, se_DetachNetworkInterfaceCommand } from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DetachNetworkInterfaceCommand}.
 */
export interface DetachNetworkInterfaceCommandInput extends DetachNetworkInterfaceRequest {}
/**
 * @public
 *
 * The output of {@link DetachNetworkInterfaceCommand}.
 */
export interface DetachNetworkInterfaceCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Detaches a network interface from an instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DetachNetworkInterfaceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DetachNetworkInterfaceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DetachNetworkInterfaceRequest
 *   AttachmentId: "STRING_VALUE", // required
 *   DryRun: true || false,
 *   Force: true || false,
 * };
 * const command = new DetachNetworkInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DetachNetworkInterfaceCommandInput - {@link DetachNetworkInterfaceCommandInput}
 * @returns {@link DetachNetworkInterfaceCommandOutput}
 * @see {@link DetachNetworkInterfaceCommandInput} for command's `input` shape.
 * @see {@link DetachNetworkInterfaceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 * @example To detach a network interface from an instance
 * ```javascript
 * // This example detaches the specified network interface from its attached instance.
 * const input = {
 *   "AttachmentId": "eni-attach-66c4350a"
 * };
 * const command = new DetachNetworkInterfaceCommand(input);
 * await client.send(command);
 * // example id: ec2-detach-network-interface-1
 * ```
 *
 */
export class DetachNetworkInterfaceCommand extends $Command<
  DetachNetworkInterfaceCommandInput,
  DetachNetworkInterfaceCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: DetachNetworkInterfaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetachNetworkInterfaceCommandInput, DetachNetworkInterfaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DetachNetworkInterfaceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DetachNetworkInterfaceCommand";
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
  private serialize(input: DetachNetworkInterfaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DetachNetworkInterfaceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetachNetworkInterfaceCommandOutput> {
    return de_DetachNetworkInterfaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
