import {TwingNodeExpressionConstant, TwingNodeExpressionFunction} from 'twing';

/**
 *
 */
export class TemplateNameAwareFunction extends TwingNodeExpressionFunction {
    getArguments(callable, argumentsNode, env) {
        const args = super.getArguments(callable, argumentsNode, env);
        args.unshift(new TwingNodeExpressionConstant(this.getTemplateName(), 1));
        return args;
    }
}
