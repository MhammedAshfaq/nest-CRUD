/**
 * Convers an enum into a string
 * @param _enum Enum
 * @returns String type
 *
 */

export const EnumToString = (_enum: object) => {
  Object.keys(_enum)
    .map((key) => _enum[key])
    .filter((value) => typeof value === 'string') as string[];
};
