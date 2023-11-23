import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Test } from "./graphql/types";
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
export declare type TestUpdateFormInputValues = {
    owner?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type TestUpdateFormValidationValues = {
    owner?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestUpdateFormOverridesProps = {
    TestUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TestUpdateFormProps = React.PropsWithChildren<{
    overrides?: TestUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    test?: Test;
    onSubmit?: (fields: TestUpdateFormInputValues) => TestUpdateFormInputValues;
    onSuccess?: (fields: TestUpdateFormInputValues) => void;
    onError?: (fields: TestUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TestUpdateFormInputValues) => TestUpdateFormInputValues;
    onValidate?: TestUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TestUpdateForm(props: TestUpdateFormProps): React.ReactElement;
