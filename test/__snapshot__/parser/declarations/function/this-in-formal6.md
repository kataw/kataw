# Kataw parser test case

## Input

`````js
declare function one(this: number): void;
declare function two(this: string, a: number): void;
declare function three(this: string, ...a: any): void;
declare function four<T>(this: T): void;
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 0,
                "end": 7
            },
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 7,
                "end": 16
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "one",
                "rawText": "one",
                "flags": 96,
                "start": 16,
                "end": 20
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "this",
                            "rawText": "this",
                            "flags": 96,
                            "start": 21,
                            "end": 25
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "start": 26,
                                "end": 33
                            },
                            "flags": 2097152,
                            "start": 26,
                            "end": 33
                        },
                        "right": null,
                        "flags": 32,
                        "start": 21,
                        "end": 33
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 20,
                "end": 34
            },
            "contents": null,
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 138477615,
                    "flags": 2097216,
                    "start": 35,
                    "end": 40
                },
                "flags": 2097152,
                "start": 35,
                "end": 40
            },
            "flags": 4112,
            "start": 7,
            "end": 40
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 40,
            "end": 41
        },
        {
            "kind": 176,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 41,
                "end": 49
            },
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 49,
                "end": 58
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "two",
                "rawText": "two",
                "flags": 96,
                "start": 58,
                "end": 62
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "this",
                            "rawText": "this",
                            "flags": 96,
                            "start": 63,
                            "end": 67
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234347,
                                "flags": 2097216,
                                "start": 68,
                                "end": 75
                            },
                            "flags": 2097152,
                            "start": 68,
                            "end": 75
                        },
                        "right": null,
                        "flags": 32,
                        "start": 63,
                        "end": 75
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 76,
                            "end": 78
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "start": 79,
                                "end": 86
                            },
                            "flags": 2097152,
                            "start": 79,
                            "end": 86
                        },
                        "right": null,
                        "flags": 32,
                        "start": 76,
                        "end": 86
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 62,
                "end": 87
            },
            "contents": null,
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 138477615,
                    "flags": 2097216,
                    "start": 88,
                    "end": 93
                },
                "flags": 2097152,
                "start": 88,
                "end": 93
            },
            "flags": 4112,
            "start": 49,
            "end": 93
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 93,
            "end": 94
        },
        {
            "kind": 176,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 94,
                "end": 102
            },
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 102,
                "end": 111
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "three",
                "rawText": "three",
                "flags": 96,
                "start": 111,
                "end": 117
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "this",
                            "rawText": "this",
                            "flags": 96,
                            "start": 118,
                            "end": 122
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234347,
                                "flags": 2097216,
                                "start": 123,
                                "end": 130
                            },
                            "flags": 2097152,
                            "start": 123,
                            "end": 130
                        },
                        "right": null,
                        "flags": 32,
                        "start": 118,
                        "end": 130
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 131,
                            "end": 135
                        },
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 135,
                            "end": 136
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234252,
                                "flags": 2097216,
                                "start": 137,
                                "end": 141
                            },
                            "flags": 2097152,
                            "start": 137,
                            "end": 141
                        },
                        "right": null,
                        "flags": 34,
                        "start": 131,
                        "end": 141
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 117,
                "end": 142
            },
            "contents": null,
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 138477615,
                    "flags": 2097216,
                    "start": 143,
                    "end": 148
                },
                "flags": 2097152,
                "start": 143,
                "end": 148
            },
            "flags": 4112,
            "start": 102,
            "end": 148
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 148,
            "end": 149
        },
        {
            "kind": 176,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 149,
                "end": 157
            },
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 157,
                "end": 166
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "four",
                "rawText": "four",
                "flags": 96,
                "start": 166,
                "end": 171
            },
            "typeParameters": {
                "kind": 307,
                "declarations": {
                    "kind": 337,
                    "parameters": [
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "start": 172,
                                "end": 173
                            },
                            "type": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 172,
                            "end": 173
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 172,
                    "end": 173
                },
                "flags": 2097152,
                "start": 171,
                "end": 174
            },
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "this",
                            "rawText": "this",
                            "flags": 96,
                            "start": 175,
                            "end": 179
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 180,
                                    "end": 182
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 180,
                                "end": 182
                            },
                            "flags": 2097152,
                            "start": 180,
                            "end": 182
                        },
                        "right": null,
                        "flags": 32,
                        "start": 175,
                        "end": 182
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 174,
                "end": 183
            },
            "contents": null,
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 138477615,
                    "flags": 2097216,
                    "start": 184,
                    "end": 189
                },
                "flags": 2097152,
                "start": 184,
                "end": 189
            },
            "flags": 4112,
            "start": 157,
            "end": 189
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 189,
            "end": 190
        }
    ],
    "isModule": false,
    "source": "declare function one(this: number): void;\ndeclare function two(this: string, a: number): void;\ndeclare function three(this: string, ...a: any): void;\ndeclare function four<T>(this: T): void;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 190
}
```

### Printed

```javascript

 declare function one(): void ; declare function two(, ): void ; declare function three(, ): void ; declare function <T>four(): void ; 
```

### Diagnostics

```javascript
✔ No errors
```

