import { OverridableStringUnion } from "@/types/utils";
import { ReactElement } from "react";

export interface IIcon extends React.SVGAttributes<SVGSVGElement>{
    className?: string;
    size?: OverridableStringUnion<"sm" | "md" | "lg" | "xl" | "xxl">;
    filled?: boolean;
}

export interface IIconBox {
    children: ReactElement<IIcon>;
    className?: string;
    variant?: OverridableStringUnion<"primary" | "light" | "dark" | "outlined" | "wave">;
    size?: OverridableStringUnion<"sm" | "md" | "lg" | "xl" | "xxl">;
}