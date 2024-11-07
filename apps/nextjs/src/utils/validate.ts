export const validateFields = <T extends Record<string, any>>(
  object: T
): Partial<Record<keyof T, string>> => {
  const errors: Partial<Record<keyof T, string>> = {};

  for (const key in object) {
    if (
      object[key] === undefined ||
      object[key] === null ||
      object[key] === ""
    ) {
      errors[key] = "This field is required";
    }
  }

  return errors;
};
