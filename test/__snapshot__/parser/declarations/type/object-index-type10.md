# Kataw parser test case

## Input

`````js
type X = {[(x) =>x]: string, ({[(x) =>x]: string, (): string}): string};
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
                "flags": 64,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "X",
                "rawText": "X",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 195,
                            "protoKeyword": null,
                            "staticToken": null,
                            "name": null,
                            "key": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 288,
                                    "arrowTypeParameterList": {
                                        "kind": 10,
                                        "flags": 64,
                                        "start": 14,
                                        "end": 17
                                    },
                                    "arrowToken": {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 12,
                                            "end": 13
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 11,
                                        "end": 13
                                    },
                                    "returnType": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 17,
                                                "end": 18
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 17,
                                            "end": 18
                                        },
                                        "flags": 2097152,
                                        "start": 17,
                                        "end": 18
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 11,
                                    "end": 18
                                },
                                "flags": 2097152,
                                "start": 11,
                                "end": 18
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 20,
                                    "end": 27
                                },
                                "flags": 2097152,
                                "start": 20,
                                "end": 27
                            },
                            "flags": 2097152,
                            "start": 10,
                            "end": 28
                        },
                        {
                            "kind": 196,
                            "protoKeyword": null,
                            "typeParameter": null,
                            "value": {
                                "kind": 282,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 30,
                                "end": 30
                            },
                            "staticToken": null,
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234353,
                                    "properties": [
                                        {
                                            "kind": 195,
                                            "protoKeyword": null,
                                            "staticToken": null,
                                            "name": null,
                                            "key": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 288,
                                                    "arrowTypeParameterList": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 35,
                                                        "end": 38
                                                    },
                                                    "arrowToken": {
                                                        "kind": 144,
                                                        "id": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 33,
                                                            "end": 34
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 32,
                                                        "end": 34
                                                    },
                                                    "returnType": {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 144,
                                                            "id": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 38,
                                                                "end": 39
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 38,
                                                            "end": 39
                                                        },
                                                        "flags": 2097152,
                                                        "start": 38,
                                                        "end": 39
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 32,
                                                    "end": 39
                                                },
                                                "flags": 2097152,
                                                "start": 32,
                                                "end": 39
                                            },
                                            "type": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234347,
                                                    "flags": 2097216,
                                                    "start": 41,
                                                    "end": 48
                                                },
                                                "flags": 2097152,
                                                "start": 41,
                                                "end": 48
                                            },
                                            "flags": 2097152,
                                            "start": 31,
                                            "end": 49
                                        },
                                        {
                                            "kind": 196,
                                            "protoKeyword": null,
                                            "typeParameter": null,
                                            "value": {
                                                "kind": 282,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "start": 51,
                                                "end": 51
                                            },
                                            "staticToken": null,
                                            "returnType": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234347,
                                                    "flags": 2097216,
                                                    "start": 53,
                                                    "end": 60
                                                },
                                                "flags": 2097152,
                                                "start": 53,
                                                "end": 60
                                            },
                                            "flags": 2097152,
                                            "start": 49,
                                            "end": 60
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 30,
                                    "end": 61
                                },
                                "flags": 2097152,
                                "start": 30,
                                "end": 61
                            },
                            "flags": 2097152,
                            "start": 28,
                            "end": 61
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 61
                },
                "flags": 2097152,
                "start": 8,
                "end": 61
            },
            "flags": 2097152,
            "start": 0,
            "end": 61
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "start": 63,
                "end": 70
            },
            "flags": 16,
            "start": 63,
            "end": 70
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 71,
            "end": 72
        }
    ],
    "isModule": false,
    "source": "type X = {[(x) =>x]: string, ({[(x) =>x]: string, (): string}): string};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 72
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 30, end: 31
✖ The parser expected to find a '}' to match the '{' token here - start: 61, end: 62
✖ Declaration or statement expected - start: 62, end: 63
✖ Declaration or statement expected - start: 70, end: 71

```

