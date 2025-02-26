import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: "button" | "submit"
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface CustomFilterProps {
    title: string
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CarCardProps {
    car: Car
}

export interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: Car;
}

export interface Car {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
    message: string;
}

