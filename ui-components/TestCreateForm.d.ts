import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TestCreateFormInputValues = {
    owner?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type TestCreateFormValidationValues = {
    owner?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestCreateFormOverridesProps = {
    TestCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TestCreateFormProps = React.PropsWithChildren<{
    overrides?: TestCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TestCreateFormInputValues) => TestCreateFormInputValues;
    onSuccess?: (fields: TestCreateFormInputValues) => void;
    onError?: (fields: TestCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TestCreateFormInputValues) => TestCreateFormInputValues;
    onValidate?: TestCreateFormValidationValues;
} & React.CSSProperties>;
export default function TestCreateForm(props: TestCreateFormProps): React.ReactElement;
