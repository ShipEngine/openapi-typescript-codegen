import camelCase, { Options as CamelCaseOptions } from 'camelcase';

export type { CamelCaseOptions };

export const camelCaseName = (value: string, options?: CamelCaseOptions) => {
    return value
        .split('.')
        .map(part => {
            const prefix = part[0] === '_' ? '_' : '';
            return `${prefix}${camelCase(part, options)}`;
        })
        .join('.');
};
