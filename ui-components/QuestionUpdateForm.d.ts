import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Question } from "./graphql/types";
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
export declare type QuestionUpdateFormInputValues = {
    text?: string;
    answers?: string[];
    correctAnswer?: string;
    owner?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type QuestionUpdateFormValidationValues = {
    text?: ValidationFunction<string>;
    answers?: ValidationFunction<string>;
    correctAnswer?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuestionUpdateFormOverridesProps = {
    QuestionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
    answers?: PrimitiveOverrideProps<TextFieldProps>;
    correctAnswer?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type QuestionUpdateFormProps = React.PropsWithChildren<{
    overrides?: QuestionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    question?: Question;
    onSubmit?: (fields: QuestionUpdateFormInputValues) => QuestionUpdateFormInputValues;
    onSuccess?: (fields: QuestionUpdateFormInputValues) => void;
    onError?: (fields: QuestionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QuestionUpdateFormInputValues) => QuestionUpdateFormInputValues;
    onValidate?: QuestionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function QuestionUpdateForm(props: QuestionUpdateFormProps): React.ReactElement;
