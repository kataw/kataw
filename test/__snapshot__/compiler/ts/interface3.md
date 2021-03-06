# Kataw parser test case

## Input

`````js
 interface Array<T> {

  toString(): string;

  toLocaleString(): string;

  concat<U extends T[]>(...items: U[]): T[];

  concat(...items: T[]): T[];

  join(separator?: string): string;

  pop(): T;

  push(...items: T[]): number;

  reverse(): T[];

  shift(): T;

  slice(start?: number, end?: number): T[];

  sort(compareFn?: (a: T, b: T) => number): T[];

  splice(start: number): T[];

  splice(start: number, deleteCount: number, ...items: T[]): T[];

  unshift(...items: T[]): number;

  indexOf(searchElement: T, fromIndex?: number): number;

  lastIndexOf(searchElement: T, fromIndex?: number): number;

  every(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean;

  some(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean;

  forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;

  map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];

  filter(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): T[];

  reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): T;

  reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;

  reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): T;

  reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;

  length: number;

  [n: number]: T;
  }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": " interface Array<T> {\n\n  toString(): string;\n\n  toLocaleString(): string;\n\n  concat<U extends T[]>(...items: U[]): T[];\n\n  concat(...items: T[]): T[];\n\n  join(separator?: string): string;\n\n  pop(): T;\n\n  push(...items: T[]): number;\n\n  reverse(): T[];\n\n  shift(): T;\n\n  slice(start?: number, end?: number): T[];\n\n  sort(compareFn?: (a: T, b: T) => number): T[];\n\n  splice(start: number): T[];\n\n  splice(start: number, deleteCount: number, ...items: T[]): T[];\n\n  unshift(...items: T[]): number;\n\n  indexOf(searchElement: T, fromIndex?: number): number;\n\n  lastIndexOf(searchElement: T, fromIndex?: number): number;\n\n  every(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean;\n\n  some(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean;\n\n  forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;\n\n  map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];\n\n  filter(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): T[];\n\n  reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): T;\n\n  reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;\n\n  reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): T;\n\n  reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;\n\n  length: number;\n\n  [n: number]: T;\n  }",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 8311,
                "name": {
                    "kind": 196712,
                    "text": "Array",
                    "rawText": "Array",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 16
                },
                "typeParameters": {
                    "kind": 8425,
                    "typeParameterList": [
                        {
                            "kind": 8424,
                            "name": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 18
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 17,
                            "end": 18
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 17,
                    "end": 18
                },
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "toString",
                                "rawText": "toString",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 33
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 34,
                                "end": 34
                            },
                            "returnType": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 36,
                                "end": 43
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 21,
                            "end": 44
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "toLocaleString",
                                "rawText": "toLocaleString",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 44,
                                "end": 62
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 63,
                                "end": 63
                            },
                            "returnType": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 65,
                                "end": 72
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 44,
                            "end": 73
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "concat",
                                "rawText": "concat",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 73,
                                "end": 83
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": {
                                "kind": 8425,
                                "typeParameterList": [
                                    {
                                        "kind": 8424,
                                        "name": {
                                            "kind": 196711,
                                            "text": "U",
                                            "rawText": "U",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 84,
                                            "end": 85
                                        },
                                        "constraint": {
                                            "kind": 8199,
                                            "elementType": {
                                                "kind": 8428,
                                                "typeName": {
                                                    "kind": 196711,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 93,
                                                    "end": 95
                                                },
                                                "typeArguments": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 93,
                                                "end": 96
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 93,
                                            "end": 98
                                        },
                                        "defaultType": null,
                                        "expression": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 84,
                                        "end": 97
                                    }
                                ],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 84,
                                "end": 97
                            },
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": true,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "items",
                                            "rawText": "items",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 102,
                                            "end": 107
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 8199,
                                            "elementType": {
                                                "kind": 8428,
                                                "typeName": {
                                                    "kind": 196711,
                                                    "text": "U",
                                                    "rawText": "U",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 108,
                                                    "end": 110
                                                },
                                                "typeArguments": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 108,
                                                "end": 111
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 108,
                                            "end": 113
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 4097,
                                        "start": 99,
                                        "end": 112
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 99,
                                "end": 112
                            },
                            "returnType": {
                                "kind": 8199,
                                "elementType": {
                                    "kind": 8428,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 114,
                                        "end": 116
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 114,
                                    "end": 117
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 114,
                                "end": 119
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 73,
                            "end": 119
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "concat",
                                "rawText": "concat",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 119,
                                "end": 129
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": true,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "items",
                                            "rawText": "items",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 133,
                                            "end": 138
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 8199,
                                            "elementType": {
                                                "kind": 8428,
                                                "typeName": {
                                                    "kind": 196711,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 139,
                                                    "end": 141
                                                },
                                                "typeArguments": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 139,
                                                "end": 142
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 139,
                                            "end": 144
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 4097,
                                        "start": 130,
                                        "end": 143
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 130,
                                "end": 143
                            },
                            "returnType": {
                                "kind": 8199,
                                "elementType": {
                                    "kind": 8428,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 145,
                                        "end": 147
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 145,
                                    "end": 148
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 145,
                                "end": 150
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 119,
                            "end": 150
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "join",
                                "rawText": "join",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 150,
                                "end": 158
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "separator",
                                            "rawText": "separator",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 159,
                                            "end": 168
                                        },
                                        "isOptional": true,
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 170,
                                            "end": 177
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 159,
                                        "end": 177
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 159,
                                "end": 177
                            },
                            "returnType": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 179,
                                "end": 186
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 150,
                            "end": 187
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "pop",
                                "rawText": "pop",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 187,
                                "end": 194
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 195,
                                "end": 195
                            },
                            "returnType": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 197,
                                    "end": 199
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 197,
                                "end": 200
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 187,
                            "end": 200
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "push",
                                "rawText": "push",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 200,
                                "end": 208
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": true,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "items",
                                            "rawText": "items",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 212,
                                            "end": 217
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 8199,
                                            "elementType": {
                                                "kind": 8428,
                                                "typeName": {
                                                    "kind": 196711,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 218,
                                                    "end": 220
                                                },
                                                "typeArguments": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 218,
                                                "end": 221
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 218,
                                            "end": 223
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 4097,
                                        "start": 209,
                                        "end": 222
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 209,
                                "end": 222
                            },
                            "returnType": {
                                "kind": 4202657,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 224,
                                "end": 231
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 200,
                            "end": 232
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "reverse",
                                "rawText": "reverse",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 232,
                                "end": 243
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 244,
                                "end": 244
                            },
                            "returnType": {
                                "kind": 8199,
                                "elementType": {
                                    "kind": 8428,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 246,
                                        "end": 248
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 246,
                                    "end": 249
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 246,
                                "end": 251
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 232,
                            "end": 251
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "shift",
                                "rawText": "shift",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 251,
                                "end": 260
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 261,
                                "end": 261
                            },
                            "returnType": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 263,
                                    "end": 265
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 263,
                                "end": 266
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 251,
                            "end": 266
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "slice",
                                "rawText": "slice",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 266,
                                "end": 275
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "start",
                                            "rawText": "start",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 276,
                                            "end": 281
                                        },
                                        "isOptional": true,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 283,
                                            "end": 290
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 276,
                                        "end": 290
                                    },
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "end",
                                            "rawText": "end",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 291,
                                            "end": 295
                                        },
                                        "isOptional": true,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 297,
                                            "end": 304
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 291,
                                        "end": 304
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 276,
                                "end": 304
                            },
                            "returnType": {
                                "kind": 8199,
                                "elementType": {
                                    "kind": 8428,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 306,
                                        "end": 308
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 306,
                                    "end": 309
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 306,
                                "end": 311
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 266,
                            "end": 311
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "sort",
                                "rawText": "sort",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 311,
                                "end": 319
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "compareFn",
                                            "rawText": "compareFn",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 320,
                                            "end": 329
                                        },
                                        "isOptional": true,
                                        "type": {
                                            "kind": 8287,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 8367,
                                                "parameterList": [
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 333,
                                                            "end": 334
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8428,
                                                            "typeName": {
                                                                "kind": 196711,
                                                                "text": "T",
                                                                "rawText": "T",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 335,
                                                                "end": 337
                                                            },
                                                            "typeArguments": null,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 335,
                                                            "end": 338
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 333,
                                                        "end": 337
                                                    },
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 338,
                                                            "end": 340
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8428,
                                                            "typeName": {
                                                                "kind": 196711,
                                                                "text": "T",
                                                                "rawText": "T",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 341,
                                                                "end": 343
                                                            },
                                                            "typeArguments": null,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 341,
                                                            "end": 344
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 338,
                                                        "end": 343
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 333,
                                                "end": 343
                                            },
                                            "returnType": {
                                                "kind": 4202657,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 347,
                                                "end": 354
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 331,
                                            "end": 354
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 320,
                                        "end": 354
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 320,
                                "end": 354
                            },
                            "returnType": {
                                "kind": 8199,
                                "elementType": {
                                    "kind": 8428,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 356,
                                        "end": 358
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 356,
                                    "end": 359
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 356,
                                "end": 361
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 311,
                            "end": 361
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "splice",
                                "rawText": "splice",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 361,
                                "end": 371
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "start",
                                            "rawText": "start",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 372,
                                            "end": 377
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 378,
                                            "end": 385
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 372,
                                        "end": 385
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 372,
                                "end": 385
                            },
                            "returnType": {
                                "kind": 8199,
                                "elementType": {
                                    "kind": 8428,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 387,
                                        "end": 389
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 387,
                                    "end": 390
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 387,
                                "end": 392
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 361,
                            "end": 392
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "splice",
                                "rawText": "splice",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 392,
                                "end": 402
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "start",
                                            "rawText": "start",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 403,
                                            "end": 408
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 409,
                                            "end": 416
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 403,
                                        "end": 416
                                    },
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "deleteCount",
                                            "rawText": "deleteCount",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 417,
                                            "end": 429
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 430,
                                            "end": 437
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 417,
                                        "end": 437
                                    },
                                    {
                                        "kind": 8366,
                                        "ellipsis": true,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "items",
                                            "rawText": "items",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 442,
                                            "end": 447
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 8199,
                                            "elementType": {
                                                "kind": 8428,
                                                "typeName": {
                                                    "kind": 196711,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 448,
                                                    "end": 450
                                                },
                                                "typeArguments": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 448,
                                                "end": 451
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 448,
                                            "end": 453
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 4097,
                                        "start": 438,
                                        "end": 452
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 403,
                                "end": 452
                            },
                            "returnType": {
                                "kind": 8199,
                                "elementType": {
                                    "kind": 8428,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 454,
                                        "end": 456
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 454,
                                    "end": 457
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 454,
                                "end": 459
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 392,
                            "end": 459
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "unshift",
                                "rawText": "unshift",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 459,
                                "end": 470
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": true,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "items",
                                            "rawText": "items",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 474,
                                            "end": 479
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 8199,
                                            "elementType": {
                                                "kind": 8428,
                                                "typeName": {
                                                    "kind": 196711,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 480,
                                                    "end": 482
                                                },
                                                "typeArguments": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 480,
                                                "end": 483
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 480,
                                            "end": 485
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 4097,
                                        "start": 471,
                                        "end": 484
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 471,
                                "end": 484
                            },
                            "returnType": {
                                "kind": 4202657,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 486,
                                "end": 493
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 459,
                            "end": 494
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "indexOf",
                                "rawText": "indexOf",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 494,
                                "end": 505
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "searchElement",
                                            "rawText": "searchElement",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 506,
                                            "end": 519
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 8428,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 520,
                                                "end": 522
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 520,
                                            "end": 523
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 506,
                                        "end": 522
                                    },
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "fromIndex",
                                            "rawText": "fromIndex",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 523,
                                            "end": 533
                                        },
                                        "isOptional": true,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 535,
                                            "end": 542
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 523,
                                        "end": 542
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 506,
                                "end": 542
                            },
                            "returnType": {
                                "kind": 4202657,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 544,
                                "end": 551
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 494,
                            "end": 552
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "lastIndexOf",
                                "rawText": "lastIndexOf",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 552,
                                "end": 567
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "searchElement",
                                            "rawText": "searchElement",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 568,
                                            "end": 581
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 8428,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 582,
                                                "end": 584
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 582,
                                            "end": 585
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 568,
                                        "end": 584
                                    },
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "fromIndex",
                                            "rawText": "fromIndex",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 585,
                                            "end": 595
                                        },
                                        "isOptional": true,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 597,
                                            "end": 604
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 585,
                                        "end": 604
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 568,
                                "end": 604
                            },
                            "returnType": {
                                "kind": 4202657,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 606,
                                "end": 613
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 552,
                            "end": 614
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "every",
                                "rawText": "every",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 614,
                                "end": 623
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "callbackfn",
                                            "rawText": "callbackfn",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 624,
                                            "end": 634
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 8287,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 8367,
                                                "parameterList": [
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "value",
                                                            "rawText": "value",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 637,
                                                            "end": 642
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8428,
                                                            "typeName": {
                                                                "kind": 196711,
                                                                "text": "T",
                                                                "rawText": "T",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 643,
                                                                "end": 645
                                                            },
                                                            "typeArguments": null,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 643,
                                                            "end": 646
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 637,
                                                        "end": 645
                                                    },
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "index",
                                                            "rawText": "index",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 646,
                                                            "end": 652
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 4202657,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 653,
                                                            "end": 660
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 646,
                                                        "end": 660
                                                    },
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "array",
                                                            "rawText": "array",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 661,
                                                            "end": 667
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8199,
                                                            "elementType": {
                                                                "kind": 8428,
                                                                "typeName": {
                                                                    "kind": 196711,
                                                                    "text": "T",
                                                                    "rawText": "T",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 668,
                                                                    "end": 670
                                                                },
                                                                "typeArguments": null,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 2097152,
                                                                "start": 668,
                                                                "end": 671
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 668,
                                                            "end": 673
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 661,
                                                        "end": 672
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 637,
                                                "end": 672
                                            },
                                            "returnType": {
                                                "kind": 4268070,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 676,
                                                "end": 684
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 635,
                                            "end": 684
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 624,
                                        "end": 684
                                    },
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "thisArg",
                                            "rawText": "thisArg",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 685,
                                            "end": 693
                                        },
                                        "isOptional": true,
                                        "type": {
                                            "kind": 4202498,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 695,
                                            "end": 699
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 685,
                                        "end": 699
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 624,
                                "end": 699
                            },
                            "returnType": {
                                "kind": 4268070,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 701,
                                "end": 709
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 614,
                            "end": 710
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "some",
                                "rawText": "some",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 710,
                                "end": 718
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "callbackfn",
                                            "rawText": "callbackfn",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 719,
                                            "end": 729
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 8287,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 8367,
                                                "parameterList": [
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "value",
                                                            "rawText": "value",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 732,
                                                            "end": 737
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8428,
                                                            "typeName": {
                                                                "kind": 196711,
                                                                "text": "T",
                                                                "rawText": "T",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 738,
                                                                "end": 740
                                                            },
                                                            "typeArguments": null,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 738,
                                                            "end": 741
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 732,
                                                        "end": 740
                                                    },
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "index",
                                                            "rawText": "index",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 741,
                                                            "end": 747
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 4202657,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 748,
                                                            "end": 755
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 741,
                                                        "end": 755
                                                    },
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "array",
                                                            "rawText": "array",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 756,
                                                            "end": 762
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8199,
                                                            "elementType": {
                                                                "kind": 8428,
                                                                "typeName": {
                                                                    "kind": 196711,
                                                                    "text": "T",
                                                                    "rawText": "T",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 763,
                                                                    "end": 765
                                                                },
                                                                "typeArguments": null,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 2097152,
                                                                "start": 763,
                                                                "end": 766
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 763,
                                                            "end": 768
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 756,
                                                        "end": 767
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 732,
                                                "end": 767
                                            },
                                            "returnType": {
                                                "kind": 4268070,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 771,
                                                "end": 779
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 730,
                                            "end": 779
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 719,
                                        "end": 779
                                    },
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "thisArg",
                                            "rawText": "thisArg",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 780,
                                            "end": 788
                                        },
                                        "isOptional": true,
                                        "type": {
                                            "kind": 4202498,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 790,
                                            "end": 794
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 780,
                                        "end": 794
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 719,
                                "end": 794
                            },
                            "returnType": {
                                "kind": 4268070,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 796,
                                "end": 804
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 710,
                            "end": 805
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "forEach",
                                "rawText": "forEach",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 805,
                                "end": 816
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "callbackfn",
                                            "rawText": "callbackfn",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 817,
                                            "end": 827
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 8287,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 8367,
                                                "parameterList": [
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "value",
                                                            "rawText": "value",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 830,
                                                            "end": 835
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8428,
                                                            "typeName": {
                                                                "kind": 196711,
                                                                "text": "T",
                                                                "rawText": "T",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 836,
                                                                "end": 838
                                                            },
                                                            "typeArguments": null,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 836,
                                                            "end": 839
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 830,
                                                        "end": 838
                                                    },
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "index",
                                                            "rawText": "index",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 839,
                                                            "end": 845
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 4202657,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 846,
                                                            "end": 853
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 839,
                                                        "end": 853
                                                    },
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "array",
                                                            "rawText": "array",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 854,
                                                            "end": 860
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8199,
                                                            "elementType": {
                                                                "kind": 8428,
                                                                "typeName": {
                                                                    "kind": 196711,
                                                                    "text": "T",
                                                                    "rawText": "T",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 861,
                                                                    "end": 863
                                                                },
                                                                "typeArguments": null,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 2097152,
                                                                "start": 861,
                                                                "end": 864
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 861,
                                                            "end": 866
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 854,
                                                        "end": 865
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 830,
                                                "end": 865
                                            },
                                            "returnType": {
                                                "kind": 4202742,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 869,
                                                "end": 874
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 828,
                                            "end": 874
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 817,
                                        "end": 874
                                    },
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "thisArg",
                                            "rawText": "thisArg",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 875,
                                            "end": 883
                                        },
                                        "isOptional": true,
                                        "type": {
                                            "kind": 4202498,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 885,
                                            "end": 889
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 875,
                                        "end": 889
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 817,
                                "end": 889
                            },
                            "returnType": {
                                "kind": 4202742,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 891,
                                "end": 896
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 805,
                            "end": 897
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "map",
                                "rawText": "map",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 897,
                                "end": 904
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": {
                                "kind": 8425,
                                "typeParameterList": [
                                    {
                                        "kind": 8424,
                                        "name": {
                                            "kind": 196711,
                                            "text": "U",
                                            "rawText": "U",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 905,
                                            "end": 906
                                        },
                                        "constraint": null,
                                        "defaultType": null,
                                        "expression": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 905,
                                        "end": 906
                                    }
                                ],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 905,
                                "end": 906
                            },
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "callbackfn",
                                            "rawText": "callbackfn",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 908,
                                            "end": 918
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 8287,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 8367,
                                                "parameterList": [
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "value",
                                                            "rawText": "value",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 921,
                                                            "end": 926
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8428,
                                                            "typeName": {
                                                                "kind": 196711,
                                                                "text": "T",
                                                                "rawText": "T",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 927,
                                                                "end": 929
                                                            },
                                                            "typeArguments": null,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 927,
                                                            "end": 930
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 921,
                                                        "end": 929
                                                    },
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "index",
                                                            "rawText": "index",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 930,
                                                            "end": 936
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 4202657,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 937,
                                                            "end": 944
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 930,
                                                        "end": 944
                                                    },
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "array",
                                                            "rawText": "array",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 945,
                                                            "end": 951
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8199,
                                                            "elementType": {
                                                                "kind": 8428,
                                                                "typeName": {
                                                                    "kind": 196711,
                                                                    "text": "T",
                                                                    "rawText": "T",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 952,
                                                                    "end": 954
                                                                },
                                                                "typeArguments": null,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 2097152,
                                                                "start": 952,
                                                                "end": 955
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 952,
                                                            "end": 957
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 945,
                                                        "end": 956
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 921,
                                                "end": 956
                                            },
                                            "returnType": {
                                                "kind": 8428,
                                                "typeName": {
                                                    "kind": 196711,
                                                    "text": "U",
                                                    "rawText": "U",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 960,
                                                    "end": 962
                                                },
                                                "typeArguments": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 960,
                                                "end": 963
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 919,
                                            "end": 962
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 908,
                                        "end": 962
                                    },
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "thisArg",
                                            "rawText": "thisArg",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 963,
                                            "end": 971
                                        },
                                        "isOptional": true,
                                        "type": {
                                            "kind": 4202498,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 973,
                                            "end": 977
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 963,
                                        "end": 977
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 908,
                                "end": 977
                            },
                            "returnType": {
                                "kind": 8199,
                                "elementType": {
                                    "kind": 8428,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "U",
                                        "rawText": "U",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 979,
                                        "end": 981
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 979,
                                    "end": 982
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 979,
                                "end": 984
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 897,
                            "end": 984
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "filter",
                                "rawText": "filter",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 984,
                                "end": 994
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "callbackfn",
                                            "rawText": "callbackfn",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 995,
                                            "end": 1005
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 8287,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 8367,
                                                "parameterList": [
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "value",
                                                            "rawText": "value",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 1008,
                                                            "end": 1013
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8428,
                                                            "typeName": {
                                                                "kind": 196711,
                                                                "text": "T",
                                                                "rawText": "T",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 1014,
                                                                "end": 1016
                                                            },
                                                            "typeArguments": null,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 1014,
                                                            "end": 1017
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 1008,
                                                        "end": 1016
                                                    },
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "index",
                                                            "rawText": "index",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 1017,
                                                            "end": 1023
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 4202657,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 1024,
                                                            "end": 1031
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 1017,
                                                        "end": 1031
                                                    },
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "array",
                                                            "rawText": "array",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 1032,
                                                            "end": 1038
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8199,
                                                            "elementType": {
                                                                "kind": 8428,
                                                                "typeName": {
                                                                    "kind": 196711,
                                                                    "text": "T",
                                                                    "rawText": "T",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 1039,
                                                                    "end": 1041
                                                                },
                                                                "typeArguments": null,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 2097152,
                                                                "start": 1039,
                                                                "end": 1042
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 1039,
                                                            "end": 1044
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 1032,
                                                        "end": 1043
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 1008,
                                                "end": 1043
                                            },
                                            "returnType": {
                                                "kind": 4268070,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 1047,
                                                "end": 1055
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 1006,
                                            "end": 1055
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 995,
                                        "end": 1055
                                    },
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "thisArg",
                                            "rawText": "thisArg",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 1056,
                                            "end": 1064
                                        },
                                        "isOptional": true,
                                        "type": {
                                            "kind": 4202498,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 1066,
                                            "end": 1070
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 1056,
                                        "end": 1070
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 995,
                                "end": 1070
                            },
                            "returnType": {
                                "kind": 8199,
                                "elementType": {
                                    "kind": 8428,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 1072,
                                        "end": 1074
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 1072,
                                    "end": 1075
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1072,
                                "end": 1077
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 984,
                            "end": 1077
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "reduce",
                                "rawText": "reduce",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1077,
                                "end": 1087
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "callbackfn",
                                            "rawText": "callbackfn",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 1088,
                                            "end": 1098
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 8287,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 8367,
                                                "parameterList": [
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "previousValue",
                                                            "rawText": "previousValue",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 1101,
                                                            "end": 1114
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8428,
                                                            "typeName": {
                                                                "kind": 196711,
                                                                "text": "T",
                                                                "rawText": "T",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 1115,
                                                                "end": 1117
                                                            },
                                                            "typeArguments": null,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 1115,
                                                            "end": 1118
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 1101,
                                                        "end": 1117
                                                    },
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "currentValue",
                                                            "rawText": "currentValue",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 1118,
                                                            "end": 1131
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8428,
                                                            "typeName": {
                                                                "kind": 196711,
                                                                "text": "T",
                                                                "rawText": "T",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 1132,
                                                                "end": 1134
                                                            },
                                                            "typeArguments": null,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 1132,
                                                            "end": 1135
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 1118,
                                                        "end": 1134
                                                    },
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "currentIndex",
                                                            "rawText": "currentIndex",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 1135,
                                                            "end": 1148
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 4202657,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 1149,
                                                            "end": 1156
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 1135,
                                                        "end": 1156
                                                    },
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "array",
                                                            "rawText": "array",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 1157,
                                                            "end": 1163
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8199,
                                                            "elementType": {
                                                                "kind": 8428,
                                                                "typeName": {
                                                                    "kind": 196711,
                                                                    "text": "T",
                                                                    "rawText": "T",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 1164,
                                                                    "end": 1166
                                                                },
                                                                "typeArguments": null,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 2097152,
                                                                "start": 1164,
                                                                "end": 1167
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 1164,
                                                            "end": 1169
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 1157,
                                                        "end": 1168
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 1101,
                                                "end": 1168
                                            },
                                            "returnType": {
                                                "kind": 8428,
                                                "typeName": {
                                                    "kind": 196711,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 1172,
                                                    "end": 1174
                                                },
                                                "typeArguments": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 1172,
                                                "end": 1175
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 1099,
                                            "end": 1174
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 1088,
                                        "end": 1174
                                    },
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "initialValue",
                                            "rawText": "initialValue",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 1175,
                                            "end": 1188
                                        },
                                        "isOptional": true,
                                        "type": {
                                            "kind": 8428,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 1190,
                                                "end": 1192
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 1190,
                                            "end": 1193
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 1175,
                                        "end": 1192
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1088,
                                "end": 1192
                            },
                            "returnType": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 1194,
                                    "end": 1196
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1194,
                                "end": 1197
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1077,
                            "end": 1197
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "reduce",
                                "rawText": "reduce",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1197,
                                "end": 1207
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": {
                                "kind": 8425,
                                "typeParameterList": [
                                    {
                                        "kind": 8424,
                                        "name": {
                                            "kind": 196711,
                                            "text": "U",
                                            "rawText": "U",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 1208,
                                            "end": 1209
                                        },
                                        "constraint": null,
                                        "defaultType": null,
                                        "expression": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 1208,
                                        "end": 1209
                                    }
                                ],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1208,
                                "end": 1209
                            },
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "callbackfn",
                                            "rawText": "callbackfn",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 1211,
                                            "end": 1221
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 8287,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 8367,
                                                "parameterList": [
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "previousValue",
                                                            "rawText": "previousValue",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 1224,
                                                            "end": 1237
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8428,
                                                            "typeName": {
                                                                "kind": 196711,
                                                                "text": "U",
                                                                "rawText": "U",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 1238,
                                                                "end": 1240
                                                            },
                                                            "typeArguments": null,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 1238,
                                                            "end": 1241
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 1224,
                                                        "end": 1240
                                                    },
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "currentValue",
                                                            "rawText": "currentValue",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 1241,
                                                            "end": 1254
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8428,
                                                            "typeName": {
                                                                "kind": 196711,
                                                                "text": "T",
                                                                "rawText": "T",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 1255,
                                                                "end": 1257
                                                            },
                                                            "typeArguments": null,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 1255,
                                                            "end": 1258
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 1241,
                                                        "end": 1257
                                                    },
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "currentIndex",
                                                            "rawText": "currentIndex",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 1258,
                                                            "end": 1271
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 4202657,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 1272,
                                                            "end": 1279
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 1258,
                                                        "end": 1279
                                                    },
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "array",
                                                            "rawText": "array",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 1280,
                                                            "end": 1286
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8199,
                                                            "elementType": {
                                                                "kind": 8428,
                                                                "typeName": {
                                                                    "kind": 196711,
                                                                    "text": "T",
                                                                    "rawText": "T",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 1287,
                                                                    "end": 1289
                                                                },
                                                                "typeArguments": null,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 2097152,
                                                                "start": 1287,
                                                                "end": 1290
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 1287,
                                                            "end": 1292
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 1280,
                                                        "end": 1291
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 1224,
                                                "end": 1291
                                            },
                                            "returnType": {
                                                "kind": 8428,
                                                "typeName": {
                                                    "kind": 196711,
                                                    "text": "U",
                                                    "rawText": "U",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 1295,
                                                    "end": 1297
                                                },
                                                "typeArguments": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 1295,
                                                "end": 1298
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 1222,
                                            "end": 1297
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 1211,
                                        "end": 1297
                                    },
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "initialValue",
                                            "rawText": "initialValue",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 1298,
                                            "end": 1311
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 8428,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "U",
                                                "rawText": "U",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 1312,
                                                "end": 1314
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 1312,
                                            "end": 1315
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 1298,
                                        "end": 1314
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1211,
                                "end": 1314
                            },
                            "returnType": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "U",
                                    "rawText": "U",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 1316,
                                    "end": 1318
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1316,
                                "end": 1319
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1197,
                            "end": 1319
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "reduceRight",
                                "rawText": "reduceRight",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1319,
                                "end": 1334
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "callbackfn",
                                            "rawText": "callbackfn",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 1335,
                                            "end": 1345
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 8287,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 8367,
                                                "parameterList": [
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "previousValue",
                                                            "rawText": "previousValue",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 1348,
                                                            "end": 1361
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8428,
                                                            "typeName": {
                                                                "kind": 196711,
                                                                "text": "T",
                                                                "rawText": "T",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 1362,
                                                                "end": 1364
                                                            },
                                                            "typeArguments": null,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 1362,
                                                            "end": 1365
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 1348,
                                                        "end": 1364
                                                    },
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "currentValue",
                                                            "rawText": "currentValue",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 1365,
                                                            "end": 1378
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8428,
                                                            "typeName": {
                                                                "kind": 196711,
                                                                "text": "T",
                                                                "rawText": "T",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 1379,
                                                                "end": 1381
                                                            },
                                                            "typeArguments": null,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 1379,
                                                            "end": 1382
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 1365,
                                                        "end": 1381
                                                    },
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "currentIndex",
                                                            "rawText": "currentIndex",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 1382,
                                                            "end": 1395
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 4202657,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 1396,
                                                            "end": 1403
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 1382,
                                                        "end": 1403
                                                    },
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "array",
                                                            "rawText": "array",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 1404,
                                                            "end": 1410
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8199,
                                                            "elementType": {
                                                                "kind": 8428,
                                                                "typeName": {
                                                                    "kind": 196711,
                                                                    "text": "T",
                                                                    "rawText": "T",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 1411,
                                                                    "end": 1413
                                                                },
                                                                "typeArguments": null,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 2097152,
                                                                "start": 1411,
                                                                "end": 1414
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 1411,
                                                            "end": 1416
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 1404,
                                                        "end": 1415
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 1348,
                                                "end": 1415
                                            },
                                            "returnType": {
                                                "kind": 8428,
                                                "typeName": {
                                                    "kind": 196711,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 1419,
                                                    "end": 1421
                                                },
                                                "typeArguments": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 1419,
                                                "end": 1422
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 1346,
                                            "end": 1421
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 1335,
                                        "end": 1421
                                    },
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "initialValue",
                                            "rawText": "initialValue",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 1422,
                                            "end": 1435
                                        },
                                        "isOptional": true,
                                        "type": {
                                            "kind": 8428,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 1437,
                                                "end": 1439
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 1437,
                                            "end": 1440
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 1422,
                                        "end": 1439
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1335,
                                "end": 1439
                            },
                            "returnType": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 1441,
                                    "end": 1443
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1441,
                                "end": 1444
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1319,
                            "end": 1444
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "reduceRight",
                                "rawText": "reduceRight",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1444,
                                "end": 1459
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": {
                                "kind": 8425,
                                "typeParameterList": [
                                    {
                                        "kind": 8424,
                                        "name": {
                                            "kind": 196711,
                                            "text": "U",
                                            "rawText": "U",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 1460,
                                            "end": 1461
                                        },
                                        "constraint": null,
                                        "defaultType": null,
                                        "expression": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 1460,
                                        "end": 1461
                                    }
                                ],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1460,
                                "end": 1461
                            },
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "callbackfn",
                                            "rawText": "callbackfn",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 1463,
                                            "end": 1473
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 8287,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 8367,
                                                "parameterList": [
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "previousValue",
                                                            "rawText": "previousValue",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 1476,
                                                            "end": 1489
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8428,
                                                            "typeName": {
                                                                "kind": 196711,
                                                                "text": "U",
                                                                "rawText": "U",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 1490,
                                                                "end": 1492
                                                            },
                                                            "typeArguments": null,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 1490,
                                                            "end": 1493
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 1476,
                                                        "end": 1492
                                                    },
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "currentValue",
                                                            "rawText": "currentValue",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 1493,
                                                            "end": 1506
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8428,
                                                            "typeName": {
                                                                "kind": 196711,
                                                                "text": "T",
                                                                "rawText": "T",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 1507,
                                                                "end": 1509
                                                            },
                                                            "typeArguments": null,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 1507,
                                                            "end": 1510
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 1493,
                                                        "end": 1509
                                                    },
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "currentIndex",
                                                            "rawText": "currentIndex",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 1510,
                                                            "end": 1523
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 4202657,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 1524,
                                                            "end": 1531
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 1510,
                                                        "end": 1531
                                                    },
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "array",
                                                            "rawText": "array",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 1532,
                                                            "end": 1538
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8199,
                                                            "elementType": {
                                                                "kind": 8428,
                                                                "typeName": {
                                                                    "kind": 196711,
                                                                    "text": "T",
                                                                    "rawText": "T",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 1539,
                                                                    "end": 1541
                                                                },
                                                                "typeArguments": null,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 2097152,
                                                                "start": 1539,
                                                                "end": 1542
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 1539,
                                                            "end": 1544
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 1532,
                                                        "end": 1543
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 1476,
                                                "end": 1543
                                            },
                                            "returnType": {
                                                "kind": 8428,
                                                "typeName": {
                                                    "kind": 196711,
                                                    "text": "U",
                                                    "rawText": "U",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 1547,
                                                    "end": 1549
                                                },
                                                "typeArguments": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 1547,
                                                "end": 1550
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 1474,
                                            "end": 1549
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 1463,
                                        "end": 1549
                                    },
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "initialValue",
                                            "rawText": "initialValue",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 1550,
                                            "end": 1563
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 8428,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "U",
                                                "rawText": "U",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 1564,
                                                "end": 1566
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 1564,
                                            "end": 1567
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 1550,
                                        "end": 1566
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1463,
                                "end": 1566
                            },
                            "returnType": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "U",
                                    "rawText": "U",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 1568,
                                    "end": 1570
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1568,
                                "end": 1571
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1444,
                            "end": 1571
                        },
                        {
                            "kind": 8380,
                            "name": {
                                "kind": 196711,
                                "text": "length",
                                "rawText": "length",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1571,
                                "end": 1581
                            },
                            "isOptional": false,
                            "accessModifier": null,
                            "type": {
                                "kind": 4202657,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1582,
                                "end": 1589
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "initializer": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1571,
                            "end": 1590
                        },
                        {
                            "kind": 73844,
                            "accessModifier": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "n",
                                            "rawText": "n",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 1595,
                                            "end": 1596
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 1597,
                                            "end": 1604
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 1595,
                                        "end": 1604
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1595,
                                "end": 1604
                            },
                            "returnType": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 1606,
                                    "end": 1608
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1606,
                                "end": 1609
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1595,
                            "end": 1609
                        }
                    ],
                    "multiline": true,
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 21,
                    "end": 1609
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 0,
                "end": 1613
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 1613
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 1613
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

