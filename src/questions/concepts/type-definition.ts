//give type def for dynamic keys in TS
type example = {
  [key: string]: {
    count: number;
    type: number;
  };
};
