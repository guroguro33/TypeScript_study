export{};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

// Pick<T, K> 型Tの中からKの型だけ取り出して設定
type SimpleProfile = Pick<DetailedProfile, 'name' | 'height' >;

// Omit<T, K> 型Tの中からKの型を除外して設定
type SmallProfile = Omit<DetailedProfile, 'weight'>;

type MyOmit = Pick<DetailedProfile, 'name'| 'height'>;

type MySmallProfile = MyOmit;


