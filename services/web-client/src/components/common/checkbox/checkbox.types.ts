import { OverridableStringUnion } from "@/types/utils";

export interface ICheckbox
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    variant?: OverridableStringUnion<"primary" | "secondary" | "tertiary">;
    size?: OverridableStringUnion<"sm" | "md">;
    title?: string;
    description?: string;
}
