export const toggleActiveClass = (
  isActive: boolean,
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsActive(!isActive);
};
