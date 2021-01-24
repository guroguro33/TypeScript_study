export{};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile;

// in keyofで型Tからkeyを取り出して、新しい型を作る
type Optional<T> = { [P in keyof T]?: T[P] | null };
type OptionalProfile = Optional<Profile>;


