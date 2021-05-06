# Kataw parser test case

## Input

`````js
([{constructor(){}}] = b);
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
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 257,
                                                "asyncKeyword": null,
                                                "generatorToken": null,
                                                "getKeyword": null,
                                                "setKeyword": null,
                                                "method": {
                                                    "kind": 209,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "constructor",
                                                        "rawText": "constructor",
                                                        "flags": 96,
                                                        "start": 3,
                                                        "end": 14
                                                    },
                                                    "typeParameters": null,
                                                    "formalParameters": {
                                                        "kind": 214,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 15,
                                                        "end": 16
                                                    },
                                                    "type": null,
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "start": 17,
                                                            "end": 17
                                                        },
                                                        "flags": 32,
                                                        "start": 16,
                                                        "end": 18
                                                    },
                                                    "flags": 32,
                                                    "start": 14,
                                                    "end": 18
                                                },
                                                "flags": 32,
                                                "start": 3,
                                                "end": 18
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 3,
                                        "end": 18
                                    },
                                    "flags": 32,
                                    "start": 2,
                                    "end": 19
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 2,
                            "end": 19
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 20
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 20,
                        "end": 22
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 22,
                        "end": 24
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 24
                },
                "flags": 32,
                "start": 0,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "([{constructor(){}}] = b);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 20, end: 22

```

