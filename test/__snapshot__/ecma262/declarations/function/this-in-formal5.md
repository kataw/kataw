# Kataw parser test case

## Input

`````js
function one(this: number) {}

function two(this: number, a) {}

function three(this: number, ...a) {}

function four(this: number, a, b, ...c) {}

function five<T>(this: T) {}
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
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "one",
                "rawText": "one",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 12
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
                            "transformFlags": 0,
                            "start": 13,
                            "end": 17
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 25
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 25
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 13,
                        "end": 25
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 25
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 28
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 26,
                "end": 29
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 29
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 29,
                "end": 39
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "two",
                "rawText": "two",
                "flags": 96,
                "transformFlags": 0,
                "start": 39,
                "end": 43
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
                            "transformFlags": 0,
                            "start": 44,
                            "end": 48
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 49,
                                "end": 56
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 49,
                            "end": 56
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 44,
                        "end": 56
                    },
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 57,
                        "end": 59
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 44,
                "end": 59
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 62,
                    "end": 62
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 60,
                "end": 63
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 29,
            "end": 63
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 63,
                "end": 73
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "three",
                "rawText": "three",
                "flags": 96,
                "transformFlags": 0,
                "start": 73,
                "end": 79
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
                            "transformFlags": 0,
                            "start": 80,
                            "end": 84
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 85,
                                "end": 92
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 85,
                            "end": 92
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 80,
                        "end": 92
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 93,
                            "end": 97
                        },
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 97,
                            "end": 98
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": null,
                        "flags": 34,
                        "transformFlags": 4096,
                        "start": 93,
                        "end": 98
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 80,
                "end": 98
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 101,
                    "end": 101
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 99,
                "end": 102
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 63,
            "end": 102
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 102,
                "end": 112
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "four",
                "rawText": "four",
                "flags": 96,
                "transformFlags": 0,
                "start": 112,
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
                            "transformFlags": 0,
                            "start": 118,
                            "end": 122
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 123,
                                "end": 130
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 123,
                            "end": 130
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 118,
                        "end": 130
                    },
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 131,
                        "end": 133
                    },
                    {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 134,
                        "end": 136
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 137,
                            "end": 141
                        },
                        "left": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 141,
                            "end": 142
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": null,
                        "flags": 34,
                        "transformFlags": 4096,
                        "start": 137,
                        "end": 142
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 118,
                "end": 142
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 145,
                    "end": 145
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 143,
                "end": 146
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 102,
            "end": 146
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 146,
                "end": 156
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "five",
                "rawText": "five",
                "flags": 96,
                "transformFlags": 0,
                "start": 156,
                "end": 161
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
                                "transformFlags": 0,
                                "start": 162,
                                "end": 163
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 162,
                            "end": 163
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 162,
                    "end": 163
                },
                "flags": 2097152,
                "transformFlags": 512,
                "start": 161,
                "end": 164
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
                            "transformFlags": 0,
                            "start": 165,
                            "end": 169
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
                                    "transformFlags": 0,
                                    "start": 170,
                                    "end": 172
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 170,
                                "end": 172
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 170,
                            "end": 172
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 165,
                        "end": 172
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 165,
                "end": 172
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 175,
                    "end": 175
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 173,
                "end": 176
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 146,
            "end": 176
        }
    ],
    "isModule": false,
    "source": "function one(this: number) {}\n\nfunction two(this: number, a) {}\n\nfunction three(this: number, ...a) {}\n\nfunction four(this: number, a, b, ...c) {}\n\nfunction five<T>(this: T) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 176
}
```

### Printed

```javascript
function one(this: number) {}
function two(this: number, a) {}

function three(this: number, ...a) {}

function four(this: number, a, b, ...c) {}

function five<T>(this: T) {}

```

### Diagnostics

```javascript
✔ No errors
```

