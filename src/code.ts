// Code parameter constraint type
export type CodeType = {
    ty: string; // TS constraint type
    types?: string[]; // If there is a separate type constraint
};

// Parameters support multiple
export type ArgCodeType = {
    name: string; // Parameter alias
    ty: CodeType; // Parameter constraint
};

// Code with constraints
export type CodeItem = {
    code: string; // TS code
    args?: ArgCodeType[]; // Parameter type Parameters support multiple, so it needs to be named
    ret?: CodeType; // The only type
};
