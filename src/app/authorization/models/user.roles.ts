export interface UserRole {
  role: string;
  text: string;
}

export const USER_ROLES: UserRole [] = [
  {role: "USER", text: "Użytkownik"},
  {role: "MANAGEMENT", text: "Management"},
  {role: "ADMIN", text: "Administrator"},
];
