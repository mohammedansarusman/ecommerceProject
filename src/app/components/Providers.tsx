'use client'
import { Provider } from "react-redux";
import appStore from "../../store/appStore";


export const Providers = ({children}) => {
  return (
    <Provider store={appStore}>{children}</Provider>
  )
}
