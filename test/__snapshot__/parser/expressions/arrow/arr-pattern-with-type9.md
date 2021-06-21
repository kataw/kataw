# Kataw parser test case

## Input

`````js
([...x: string = y, z: ...number]) =>  {};
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
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 201,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 281,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "start": 22,
                                        "end": 26
                                    },
                                    "left": {
                                        "kind": 134299649,
                                        "text": "number",
                                        "rawText": "number",
                                        "flags": 96,
                                        "start": 26,
                                        "end": 32
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "right": null,
                                    "flags": 32,
                                    "start": 22,
                                    "end": 32
                                },
                                {
                                    "kind": 281,
                                    "ellipsisToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "start": 19,
                                        "end": 21
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 144,
                                            "typeName": {
                                                "kind": 16637,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 64,
                                                "start": 22,
                                                "end": 22
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 22,
                                            "end": 22
                                        },
                                        "flags": 2097152,
                                        "start": 22,
                                        "end": 22
                                    },
                                    "right": null,
                                    "flags": 32,
                                    "start": 19,
                                    "end": 22
                                },
                                {
                                    "kind": 281,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "start": 2,
                                        "end": 5
                                    },
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 6
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234347,
                                            "flags": 2097216,
                                            "start": 7,
                                            "end": 14
                                        },
                                        "flags": 2097152,
                                        "start": 7,
                                        "end": 14
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 16,
                                        "end": 18
                                    },
                                    "flags": 32,
                                    "start": 2,
                                    "end": 18
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 2,
                            "end": 32
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 33
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 34,
                    "end": 37
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 40,
                        "end": 40
                    },
                    "flags": 32,
                    "start": 37,
                    "end": 41
                },
                "flags": 34,
                "start": 0,
                "end": 41
            },
            "flags": 16,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "([...x: string = y, z: ...number]) =>  {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Type expected - start: 22, end: 26

```

