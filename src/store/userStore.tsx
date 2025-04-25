import { create } from "zustand";

interface StoreState {
  splashVisible: boolean;
  otpVisible: boolean;
  username: string;
  phonenumber: string;
  password: string;
  otp: string;
  loginphonenumber: string;
  loginPassword: string;
  setSplashVisible: (visible: boolean) => void;
  setOtpVisible: (visible: boolean) => void;
  setUsername: (username: string) => void;
  setEmail: (phonenumber: string) => void;
  setPassword: (password: string) => void;
  setOtp: (otp: string) => void;
  setLoginEmail: (email: string) => void;
  setLoginPassword: (password: string) => void;
}

const useStore = create<StoreState>((set) => ({
  splashVisible: true,
  otpVisible: false,
  username: '',
  phonenumber: '',
  password: '',
  otp: '',
  loginphonenumber: '',
  loginPassword: '',
  
  setSplashVisible: (visible: boolean) => set({ splashVisible: visible }),
  setOtpVisible: (visible: boolean) => set({ otpVisible: visible }),
  setUsername: (username: string) => set({ username }),
  setEmail: (phonenumber: string) => set({ phonenumber}),
  setPassword: (password: string) => set({ password }),
  setOtp: (otp: string) => set({ otp }),
  setLoginEmail: (phonenumber: string) => set({ loginphonenumber: phonenumber }),
  setLoginPassword: (password: string) => set({ loginPassword: password }),
}));

export default useStore;
