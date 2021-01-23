export{};

// ユーティリティタイプはたくさんあるうちのpartial
type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

// 型PartialTypeのプロパティは全て?がついたオプションとなる
type PartialType = Partial<Profile>;
// 型
type RequiredType = Required<Profile>;


