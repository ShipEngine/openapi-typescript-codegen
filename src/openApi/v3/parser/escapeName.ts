import { camelCaseName, CamelCaseOptions } from './camelCaseName';

export const escapeName = (value: string): string => {
    if (value || value === '') {
        const validName = /^[a-zA-Z_$][\w$]+$/g.test(value);
        if (!validName) {
            value = `'${value}'`;
        }
    }

    return value;
};

export const escapeAndCamelizeName = (value: string, options?: CamelCaseOptions): string => {
    value = camelCaseName(value, options);
    return escapeName(value);
};
