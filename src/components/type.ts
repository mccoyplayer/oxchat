export interface Option {
    value: string,
    label: string,
    disabled?: boolean,
    isSelected?: boolean
}

export interface GroupOption {
    label: string,
    options: Option[]
}

export type Options = Array<Option | GroupOption>