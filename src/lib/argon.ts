import { verify, hash } from "argon2";

export const hashPassword = async (password: string) => {
  return await hash(password);
};

export const comparePassword = async (
  candidatePassword: string,
  hashPassword: string
) => {
  return await verify(hashPassword, candidatePassword);
};
