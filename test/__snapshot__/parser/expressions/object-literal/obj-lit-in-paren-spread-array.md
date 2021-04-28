# Kataw parser test case

## Input

`````js
([{constructor(){}}] = b);
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
                                                "kind": 209,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "constructor",
                                                    "rawText": "constructor",
                                                    "flags": 768,
                                                    "start": 3,
                                                    "end": 14
                                                },
                                                "typeParameters": null,
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 256,
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
                                                        "multiline": false,
                                                        "flags": 256,
                                                        "start": 17,
                                                        "end": 17
                                                    },
                                                    "flags": 256,
                                                    "start": 16,
                                                    "end": 18
                                                },
                                                "flags": 256,
                                                "start": 14,
                                                "end": 18
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "start": 3,
                                        "end": 18
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 19
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 2,
                            "end": 19
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 20
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 20,
                        "start": 512,
                        "end": 22
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 768,
                        "start": 22,
                        "end": 24
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 24
                },
                "flags": 256,
                "start": 0,
                "end": 25
            },
            "flags": 128,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "([{constructor(){}}] = b);",
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
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 20, end: 22

```

