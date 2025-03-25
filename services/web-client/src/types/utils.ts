export type OverridableStringUnion<T extends string, U = object> =
  | T
  | (string & U);

export type Vertical = "top" | "center" | "bottom";
export type BaseVertical = Exclude<Vertical, "center">;

export type Horizontal = "left" | "center" | "right";
export type BaseHorizontal = Exclude<Horizontal, "center">;

export type Ordinate = Vertical | Horizontal;
export type BaseOrdinate = BaseVertical | BaseHorizontal;

export type Positions = "start" | "center" | "end";
export type BasePositions = Exclude<Positions, "center">;
