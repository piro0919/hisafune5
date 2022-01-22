import useSize from "@react-hook/size";
import { MutableRefObject, useMemo, useRef } from "react";

export type OverhangData = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  innerTarget: MutableRefObject<any>;
  isOverhang: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  wrapperTarget: MutableRefObject<any>;
};

function useOverhang(): OverhangData {
  const wrapperTarget = useRef(null);
  const [wrapperWidth] = useSize(wrapperTarget);
  const innerTarget = useRef(null);
  const [innerWidth] = useSize(innerTarget);
  const isOverhang = useMemo(
    () => wrapperWidth < innerWidth,
    [innerWidth, wrapperWidth]
  );

  return { innerTarget, isOverhang, wrapperTarget };
}

export default useOverhang;
