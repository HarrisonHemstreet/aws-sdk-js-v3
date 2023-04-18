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

import {
  PutEmailIdentityMailFromAttributesRequest,
  PutEmailIdentityMailFromAttributesResponse,
} from "../models/models_0";
import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import {
  de_PutEmailIdentityMailFromAttributesCommand,
  se_PutEmailIdentityMailFromAttributesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link PutEmailIdentityMailFromAttributesCommand}.
 */
export interface PutEmailIdentityMailFromAttributesCommandInput extends PutEmailIdentityMailFromAttributesRequest {}
/**
 * @public
 *
 * The output of {@link PutEmailIdentityMailFromAttributesCommand}.
 */
export interface PutEmailIdentityMailFromAttributesCommandOutput
  extends PutEmailIdentityMailFromAttributesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Used to enable or disable the custom Mail-From domain configuration for an email
 *             identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, PutEmailIdentityMailFromAttributesCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, PutEmailIdentityMailFromAttributesCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const input = { // PutEmailIdentityMailFromAttributesRequest
 *   EmailIdentity: "STRING_VALUE", // required
 *   MailFromDomain: "STRING_VALUE",
 *   BehaviorOnMxFailure: "STRING_VALUE",
 * };
 * const command = new PutEmailIdentityMailFromAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param PutEmailIdentityMailFromAttributesCommandInput - {@link PutEmailIdentityMailFromAttributesCommandInput}
 * @returns {@link PutEmailIdentityMailFromAttributesCommandOutput}
 * @see {@link PutEmailIdentityMailFromAttributesCommandInput} for command's `input` shape.
 * @see {@link PutEmailIdentityMailFromAttributesCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 *
 */
export class PutEmailIdentityMailFromAttributesCommand extends $Command<
  PutEmailIdentityMailFromAttributesCommandInput,
  PutEmailIdentityMailFromAttributesCommandOutput,
  PinpointEmailClientResolvedConfig
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
  constructor(readonly input: PutEmailIdentityMailFromAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutEmailIdentityMailFromAttributesCommandInput, PutEmailIdentityMailFromAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutEmailIdentityMailFromAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "PutEmailIdentityMailFromAttributesCommand";
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
  private serialize(
    input: PutEmailIdentityMailFromAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_PutEmailIdentityMailFromAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutEmailIdentityMailFromAttributesCommandOutput> {
    return de_PutEmailIdentityMailFromAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
