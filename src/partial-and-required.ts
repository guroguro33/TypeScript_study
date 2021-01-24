export{};

// ユーティリティタイプはたくさんあるうちのpartial
type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

// 型PartialTypeのプロパティは全て?がついたオプションとなる
type PartialType = Partial<Profile>;
// 型RequiredTypeのプロパティは全て?がない必須項目となる
type RequiredType = Required<Profile>;


