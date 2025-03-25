"use client";
import { ISelect, ISelectOption } from "./select.types";
import { Popover } from "../popover";
import React, {
  FormEvent,
  ReactElement,
  FocusEvent,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import { SelectInput } from "./selectInput";
import { IIcon } from "../icons";
import { SelectItem } from "./selectItem";
import { useBool } from "@/hooks/useBool";

export const Select = forwardRef<HTMLInputElement, ISelect>(
  (
    { icon, value, options, onChange, onFocus, onBlur, name, ...other },
    ref
  ) => {
    const [selectedValue, setSelectedValue] = useState(value || "");
    const [selectedIcon, setSelectedIcon] =
      useState<ReactElement<IIcon> | null>(icon || null);
    const inputWrapRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const { value: open, onToggle: handleToggle } = useBool(false);

    useImperativeHandle(ref, () => inputRef.current!);

    useEffect(() => {
      const currentValue = inputRef.current?.value;
      if (currentValue && currentValue !== selectedValue) {
        setSelectedValue(currentValue);
        const selectedOption = options.find((opt) => opt.value === currentValue);
        const newIcon = selectedOption?.icon || icon || null;
        setSelectedIcon(newIcon);
      }
    }, [options, selectedValue, icon]);

    const handleChange = (value: string, icon?: React.ReactElement<IIcon>) => {
      setSelectedValue((prev) => (prev !== value ? value : prev));
      if (icon) {
        setSelectedIcon((prev) => (prev !== icon ? icon : prev));
      }
      if (onChange) {
        const event = {
          target: { name, value },
        } as unknown as FormEvent<HTMLInputElement>;
        onChange(event);
      }
    };

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
      if (!open && onBlur) {
        const customEvent = {
          ...event,
          target: { name, value: event.target?.value },
        } as FocusEvent<HTMLInputElement>;
        onBlur(customEvent);
      }
    };

    return (
      <>
        <SelectInput
          inputWrapRef={inputWrapRef}
          inputRef={inputRef}
          open={open}
          handleOpen={handleToggle}
          icon={selectedIcon}
          value={selectedValue}
          onBlur={handleBlur}
          onFocus={onFocus}
          {...other}
        />
        <Popover
          anchorEl={inputWrapRef.current}
          fullWidth
          open={open}
          onClose={handleToggle}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          offset={{
            top: 10,
            left: 8,
            right: 8,
            bottom: 0,
          }}
        >
          {options.map((option: ISelectOption) => (
            <SelectItem
              key={option.value}
              value={option.value}
              icon={option.icon}
              onChange={handleChange}
              selectedValue={selectedValue}
            />
          ))}
        </Popover>
      </>
    );
  }
);

Select.displayName = "Select";
