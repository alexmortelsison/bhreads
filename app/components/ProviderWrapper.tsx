"use client";
import { Provider } from "react-redux";

import { ReactNode } from "react";
import { store } from "@/store/store";

export default function ProviderWrapper({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
