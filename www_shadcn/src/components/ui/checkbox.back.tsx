import * as React from 'react';
import {useComposedRefs} from '@radix-ui/react-compose-refs';
import type {Scope} from '@radix-ui/react-context';
import {createContextScope} from '@radix-ui/react-context';
import {Primitive} from '@radix-ui/react-primitive';

/* -------------------------------------------------------------------------------------------------
 * Checkbox
 * -----------------------------------------------------------------------------------------------*/

const CHECKBOX_NAME = 'Checkbox';

type ScopedProps<P> = P & { __scopeCheckbox?: Scope };
const [createCheckboxContext, createCheckboxScope] = createContextScope(CHECKBOX_NAME);

type CheckedState = boolean | 'indeterminate';

type CheckboxContextValue = {
  state: CheckedState;
  disabled?: boolean;
};

const [CheckboxProvider, useCheckboxContext] =
    createCheckboxContext<CheckboxContextValue>(CHECKBOX_NAME);

type CheckboxElement = React.ElementRef<typeof Primitive.button>;
type PrimitiveButtonProps = React.ComponentPropsWithoutRef<typeof Primitive.button>;
interface CheckboxProps extends Omit<PrimitiveButtonProps, 'checked' | 'defaultChecked'> {
  checked?: CheckedState;
  defaultChecked?: CheckedState;
  required?: boolean;
  onCheckedChange?(checked: CheckedState): void;
}

const CheckboxBack = React.forwardRef<CheckboxElement, CheckboxProps>(
    (props: ScopedProps<CheckboxProps>, forwardedRef) => {
      const {
        __scopeCheckbox,
        name,
        checked: checkedProp,
        defaultChecked,
        required,
        disabled,
        value = 'on',
        onCheckedChange,
        ...checkboxProps
      } = props;
      const [button, setButton] = React.useState<HTMLButtonElement | null>(null);
      const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
      const hasConsumerStoppedPropagationRef = React.useRef(false);
      // We set this to true by default so that events bubble to forms without JS (SSR)
      const isFormControl = button ? Boolean(button.closest('form')) : true;


      return (
          <CheckboxProvider scope={__scopeCheckbox} state={true} disabled={disabled}>
            <button
                type="button"
                role="checkbox"
                value={"zhangsan"}
                ref={composedRefs}
            ></button>
          </CheckboxProvider>
      );
    }
);

CheckboxBack.displayName = CHECKBOX_NAME;

/* -------------------------------------------------------------------------------------------------
 * CheckboxIndicator
 * -----------------------------------------------------------------------------------------------*/

const INDICATOR_NAME = 'CheckboxIndicator';

type CheckboxIndicatorElement = React.ElementRef<typeof Primitive.span>;
type PrimitiveSpanProps = React.ComponentPropsWithoutRef<typeof Primitive.span>;
interface CheckboxIndicatorProps extends PrimitiveSpanProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true;
}

const CheckboxIndicator = React.forwardRef<CheckboxIndicatorElement, CheckboxIndicatorProps>(
    (props: ScopedProps<CheckboxIndicatorProps>, forwardedRef) => {
      const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
      const context = useCheckboxContext(INDICATOR_NAME, __scopeCheckbox);
      return (
          <label>remeberMe</label>
      );
    }
);

CheckboxIndicator.displayName = INDICATOR_NAME;

/* ---------------------------------------------------------------------------------------------- */

const BubbleInput = () => {

  return (
      <div>hello</div>
  );
};


const Root = CheckboxBack;
const Indicator = CheckboxIndicator;

export {
  createCheckboxScope,
  //
  CheckboxBack,
  CheckboxIndicator,
  //
  Root,
  Indicator,
};
export type { CheckboxProps, CheckboxIndicatorProps, CheckedState };
