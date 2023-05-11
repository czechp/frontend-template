export interface UserModel {
  id: number;
  username: string;
  email: string;
  userRole: string;
  confirmed: boolean;
  createdAt: Date;
  confirmedByAdmin: boolean;
}
