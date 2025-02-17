import { LabelHTMLAttributes } from 'react';

export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}: LabelHTMLAttributes<HTMLLabelElement> & { value?: string }) {
    return (
        <label
            {...props}
            className={
                `block text-sm font-medium text-zinc-700 dark:text-zinc-300 ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
