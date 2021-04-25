# Kataw parser test case

## Input

`````js
x({.9:a, 0x84:b, 0b1:c, 0o27:d, 1e234:e});

x({.9(){}, 0x84(){}, 0b1(){}, 0o27(){}, 1e234(){}});
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 6,
                                            "end": 7
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": 0.9,
                                            "rawText": ".9",
                                            "flags": 525056,
                                            "start": 3,
                                            "end": 5
                                        },
                                        "flags": 256,
                                        "start": 3,
                                        "end": 7
                                    },
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 768,
                                            "start": 14,
                                            "end": 15
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": 132,
                                            "rawText": "0x84",
                                            "flags": 16777984,
                                            "start": 8,
                                            "end": 13
                                        },
                                        "flags": 256,
                                        "start": 8,
                                        "end": 15
                                    },
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 768,
                                            "start": 21,
                                            "end": 22
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": 1,
                                            "rawText": "0b1",
                                            "flags": 8389376,
                                            "start": 16,
                                            "end": 20
                                        },
                                        "flags": 256,
                                        "start": 16,
                                        "end": 22
                                    },
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 768,
                                            "start": 29,
                                            "end": 30
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": 23,
                                            "rawText": "0o27",
                                            "flags": 4195072,
                                            "start": 23,
                                            "end": 28
                                        },
                                        "flags": 256,
                                        "start": 23,
                                        "end": 30
                                    },
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "e",
                                            "rawText": "e",
                                            "flags": 768,
                                            "start": 38,
                                            "end": 39
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": 1e+234,
                                            "rawText": "1e234",
                                            "flags": 768,
                                            "start": 31,
                                            "end": 37
                                        },
                                        "flags": 256,
                                        "start": 31,
                                        "end": 39
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 3,
                                "end": 39
                            },
                            "flags": 256,
                            "start": 2,
                            "end": 40
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 2,
                    "end": 40
                },
                "flags": 256,
                "start": 0,
                "end": 41
            },
            "flags": 128,
            "start": 0,
            "end": 42
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 42,
                    "end": 45
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": 0.9,
                                            "rawText": ".9",
                                            "flags": 525056,
                                            "start": 47,
                                            "end": 49
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 50,
                                            "end": 51
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "multiline": false,
                                                "flags": 256,
                                                "start": 52,
                                                "end": 52
                                            },
                                            "flags": 256,
                                            "start": 51,
                                            "end": 53
                                        },
                                        "flags": 256,
                                        "start": 49,
                                        "end": 53
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": 132,
                                            "rawText": "0x84",
                                            "flags": 16777984,
                                            "start": 54,
                                            "end": 59
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 60,
                                            "end": 61
                                        },
                                        "type": null,
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
                                            "start": 61,
                                            "end": 63
                                        },
                                        "flags": 256,
                                        "start": 59,
                                        "end": 63
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": 1,
                                            "rawText": "0b1",
                                            "flags": 8389376,
                                            "start": 64,
                                            "end": 68
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 69,
                                            "end": 70
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "multiline": false,
                                                "flags": 256,
                                                "start": 71,
                                                "end": 71
                                            },
                                            "flags": 256,
                                            "start": 70,
                                            "end": 72
                                        },
                                        "flags": 256,
                                        "start": 68,
                                        "end": 72
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": 23,
                                            "rawText": "0o27",
                                            "flags": 4195072,
                                            "start": 73,
                                            "end": 78
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 79,
                                            "end": 80
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "multiline": false,
                                                "flags": 256,
                                                "start": 81,
                                                "end": 81
                                            },
                                            "flags": 256,
                                            "start": 80,
                                            "end": 82
                                        },
                                        "flags": 256,
                                        "start": 78,
                                        "end": 82
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": 1e+234,
                                            "rawText": "1e234",
                                            "flags": 768,
                                            "start": 83,
                                            "end": 89
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 90,
                                            "end": 91
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "multiline": false,
                                                "flags": 256,
                                                "start": 92,
                                                "end": 92
                                            },
                                            "flags": 256,
                                            "start": 91,
                                            "end": 93
                                        },
                                        "flags": 256,
                                        "start": 89,
                                        "end": 93
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 47,
                                "end": 93
                            },
                            "flags": 256,
                            "start": 46,
                            "end": 94
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 46,
                    "end": 94
                },
                "flags": 256,
                "start": 42,
                "end": 95
            },
            "flags": 128,
            "start": 42,
            "end": 96
        }
    ],
    "isModule": false,
    "text": "x({.9:a, 0x84:b, 0b1:c, 0o27:d, 1e234:e});\n\nx({.9(){}, 0x84(){}, 0b1(){}, 0o27(){}, 1e234(){}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 96
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

