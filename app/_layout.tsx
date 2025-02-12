import { Slot } from "expo-router";
import QueryClientProvider from "@/query";

export default () => {
  return (
    <QueryClientProvider>
      <Slot />
    </QueryClientProvider>
  );
};
