import { SignupDto, SigninDto, SigninResDto } from "./ApiTypes";
import api from "./Axios";
import { AxiosResponse } from "axios";
export default {
  signup: (signupDto: SignupDto): Promise<AxiosResponse<string>> => {
    return api.POST("/signup", signupDto);
  },
  checkUserIdDuplication: (userId: string): Promise<AxiosResponse<boolean>> => {
    return api.GET("/user/duplicate", { userId });
  },
  signin: (signinDto: SigninDto): Promise<AxiosResponse<SigninResDto>> => {
    return api.POST("/login", signinDto);
  },
};
