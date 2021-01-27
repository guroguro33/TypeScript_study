export{};

type DebugType = () => void;
type SomeTypes = string | number | DebugType; 

// Exclude 除外
// Exclude<T, U> ユニオン型の型TからUを取り除いた型を設定

// stringとnumberが除外
type FunctionType = Exclude<SomeTypes, string | number>;
// DebugTypeが除外
type NonFUnctionType = Exclude<SomeTypes, DebugType>;
// 関数全て除外
type TypeExcludeFunction = Exclude<SomeTypes, Function>;

// Extract 引き抜く
// Extract<T, U> ユニオン型の型TからUを引き抜いた型を指定

// DebugType型が設定
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
// stringとnumberが設定
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
// 関数全て抜き出して設定
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>

// NonNullable<T> ユニオン型のTからnullなど値が入っていないものを除外
type NullableTypes = string | number | null | undefined;
// nullとundefinedは除外される
type NonNullableTypes = NonNullable<NullableTypes>;