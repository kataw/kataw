# Kataw parser test case

## Input

`````js
// error: object types don't have proto fields
type A = { proto x: X }

// ok: prop named proto
type B = { proto: X }

// ok: parsed as a method named proto
type C = { proto(): R }
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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 0,
                "end": 51
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "transformFlags": 0,
                "start": 51,
                "end": 53
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 53,
                "end": 55
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "proto",
                                "rawText": "proto",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 57,
                                "end": 63
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
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 63,
                                        "end": 65
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 63,
                                    "end": 65
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 63,
                                "end": 65
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 57,
                            "end": 65
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 55,
                    "end": 65
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 55,
                "end": 65
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 0,
            "end": 65
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "X",
                "rawText": "X",
                "flags": 96,
                "transformFlags": 0,
                "start": 66,
                "end": 68
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 66,
            "end": 68
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 70,
                "end": 100
            },
            "name": {
                "kind": 134299649,
                "text": "B",
                "rawText": "B",
                "flags": 96,
                "transformFlags": 0,
                "start": 100,
                "end": 102
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 102,
                "end": 104
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "proto",
                                "rawText": "proto",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 106,
                                "end": 112
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
                                        "text": "X",
                                        "rawText": "X",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 113,
                                        "end": 115
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 113,
                                    "end": 115
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 113,
                                "end": 115
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 106,
                            "end": 115
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 104,
                    "end": 117
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 104,
                "end": 117
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 70,
            "end": 117
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 117,
                "end": 161
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "transformFlags": 0,
                "start": 161,
                "end": 163
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 163,
                "end": 165
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "proto",
                                "rawText": "proto",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 167,
                                "end": 173
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 148,
                                "functionTypeParameterList": {
                                    "kind": 282,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 174,
                                    "end": 174
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "R",
                                            "rawText": "R",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 176,
                                            "end": 178
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 176,
                                        "end": 178
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 176,
                                    "end": 178
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 173,
                                "end": 178
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 167,
                            "end": 178
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 165,
                    "end": 180
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 165,
                "end": 180
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 117,
            "end": 180
        }
    ],
    "isModule": false,
    "source": "// error: object types don't have proto fields\ntype A = { proto x: X }\n\n// ok: prop named proto\ntype B = { proto: X }\n\n// ok: parsed as a method named proto\ntype C = { proto(): R }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 180
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ':' is not allowed here. Did you mean ';'? - start: 65, end: 66
✖ Declaration or statement expected - start: 68, end: 70

```

