import camelCase from 'camelcase';

export const escapeName = (value: string): string => {
    value = value
        .split('.')
        .map(part => {
            const prefix = part[0] === '_' ? '_' : '';
            return `${prefix}${camelCase(part)}`;
        })
        .join('.');

    if (value || value === '') {
        const validName = /^[a-zA-Z_$][\w$]+$/g.test(value);
        if (!validName) {
            value = `'${value}'`;
        }
    }

    return value;
};
