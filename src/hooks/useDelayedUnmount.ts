// hooks/useDelayedUnmount.ts
import { useEffect, useState } from "react";

const useDelayedUnmount = (active: boolean, delayMs: number) => {
  const [mounted, setMounted] = useState(active);

  useEffect(() => {
    if (active) {
      setMounted(true);
    } else {
      const timer = setTimeout(() => setMounted(false), delayMs);
      return () => clearTimeout(timer);
    }
  }, [active, delayMs]);

  return mounted;
};

export default useDelayedUnmount;
