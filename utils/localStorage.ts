export const saveEmail = (email: string) => {
  localStorage.setItem('rememberedEmail', email);
};

export const getRememberedEmail = (): string | null => {
  return localStorage.getItem('rememberedEmail');
};

