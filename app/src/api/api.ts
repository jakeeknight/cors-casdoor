import { IAuthForm } from "@/types/auth";
import { apiRequest } from "./http";
import { IApi } from "./interfaces";
import { casdoor } from "@/services/casdoor";

export const api: IApi = {
  health: {
    async check() {
      const response = await apiRequest("GET", "health");
      return response;
    },
  },
  auth: {
    async callback(token: string) {
      const response = await apiRequest("GET", "/auth/callback", null, token);
      return response;
    },
    async login(data: IAuthForm) {
      const response = await apiRequest(
        "POST",
        "",
        data,
        null,
        casdoor.getSigninUrl()
      );
      return response;
    },
    async register(data: IAuthForm) {
      const response = await apiRequest(
        "POST",
        "",
        data,
        null,
        casdoor.getSignupUrl()
      );
      return response;
    },
    async logout() {
      const response = await apiRequest("POST", "/api/auth/logout");
      return response;
    },
    async resetPassword(email: string) {
      const response = await apiRequest(
        "POST",
        "/api/auth/reset-password",
        email
      );
      return response;
    },
  },
};
