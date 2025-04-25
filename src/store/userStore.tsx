import { create } from "zustand";

interface StoreState {
  splashVisible: boolean;
  otpVisible: boolean;
  username: string;
  phonenumber: string;
  password: string;
  otp: string;
  loginPhonenumber: string;
  loginPassword: string;
  setSplashVisible: (visible: boolean) => void;
  setOtpVisible: (visible: boolean) => void;
  setUsername: (username: string) => void;
  setPhonenumber: (phonenumber: string) => void;  
  setPassword: (password: string) => void;
  setOtp: (otp: string) => void;
  setLoginPhonenumber: (phonenumber: string) => void; 
  setLoginPassword: (password: string) => void;
}

const useStore = create<StoreState>((set) => ({
  splashVisible: true,
  otpVisible: false,
  username: '',
  phonenumber: '',
  password: '',
  otp: '',
  loginPhonenumber: '',
  loginPassword: '',
  
  setSplashVisible: (visible: boolean) => set({ splashVisible: visible }),
  setOtpVisible: (visible: boolean) => set({ otpVisible: visible }),
  setUsername: (username: string) => set({ username }),
  setPhonenumber: (phonenumber: string) => set({ phonenumber }),  
  setPassword: (password: string) => set({ password }),
  setOtp: (otp: string) => set({ otp }),
  setLoginPhonenumber: (phonenumber: string) => set({ loginPhonenumber: phonenumber }),
  setLoginPassword: (password: string) => set({ loginPassword: password }),
}));

export default useStore;
