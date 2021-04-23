# Kataw parser test case

## Input

`````js
({ident: {x: y}}) => x;

({ident: {x}}) => x;

({a} = b,) => {};
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 17,
                    "end": 20
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 219,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 768,
                                                        "start": 12,
                                                        "end": 14
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 768,
                                                        "start": 10,
                                                        "end": 11
                                                    },
                                                    "flags": 256,
                                                    "start": 10,
                                                    "end": 14
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "start": 10,
                                            "end": 14
                                        },
                                        "flags": 256,
                                        "start": 8,
                                        "end": 15
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "ident",
                                        "rawText": "ident",
                                        "flags": 768,
                                        "start": 2,
                                        "end": 7
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 15
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 2,
                            "end": 15
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 16
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 20,
                    "end": 22
                },
                "flags": 256,
                "start": 0,
                "end": 22
            },
            "flags": 128,
            "start": 0,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 39,
                    "end": 42
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 768,
                                                    "start": 35,
                                                    "end": 36
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "start": 35,
                                            "end": 36
                                        },
                                        "flags": 256,
                                        "start": 33,
                                        "end": 37
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "ident",
                                        "rawText": "ident",
                                        "flags": 768,
                                        "start": 27,
                                        "end": 32
                                    },
                                    "flags": 256,
                                    "start": 27,
                                    "end": 37
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 27,
                            "end": 37
                        },
                        "flags": 256,
                        "start": 26,
                        "end": 38
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 42,
                    "end": 44
                },
                "flags": 256,
                "start": 23,
                "end": 44
            },
            "flags": 128,
            "start": 23,
            "end": 45
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 57,
                    "end": 60
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 49,
                                            "end": 50
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 49,
                                    "end": 50
                                },
                                "flags": 256,
                                "start": 48,
                                "end": 51
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 768,
                                "start": 51,
                                "end": 53
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 768,
                                "start": 53,
                                "end": 55
                            },
                            "flags": 256,
                            "start": 48,
                            "end": 55
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "multiline": false,
                        "flags": 256,
                        "start": 62,
                        "end": 62
                    },
                    "flags": 256,
                    "start": 60,
                    "end": 63
                },
                "flags": 256,
                "start": 45,
                "end": 63
            },
            "flags": 128,
            "start": 45,
            "end": 64
        }
    ],
    "isModule": false,
    "text": "({ident: {x: y}}) => x;\n\n({ident: {x}}) => x;\n\n({a} = b,) => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 64
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

