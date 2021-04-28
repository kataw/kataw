# Kataw parser test case

## Input

`````js
[...{a: function=x} = c]
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 1,
                                "start": 0,
                                "end": 4
                            },
                            "argument": {
                                "kind": 125,
                                "left": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 177,
                                                        "asyncKeyword": null,
                                                        "functionKeyword": {
                                                            "kind": 37822554,
                                                            "flags": 7,
                                                            "start": 0,
                                                            "end": 16
                                                        },
                                                        "generatorToken": null,
                                                        "name": null,
                                                        "formalParameters": {
                                                            "kind": 214,
                                                            "formalParameterList": [],
                                                            "trailingComma": false,
                                                            "flags": 256,
                                                            "start": 16,
                                                            "end": 16
                                                        },
                                                        "contents": {
                                                            "kind": 216,
                                                            "functionStatementList": {
                                                                "kind": 217,
                                                                "directives": [],
                                                                "statements": [],
                                                                "multiline": false,
                                                                "flags": 256,
                                                                "start": 16,
                                                                "end": 16
                                                            },
                                                            "flags": 256,
                                                            "start": 16,
                                                            "end": 16
                                                        },
                                                        "typeParameters": null,
                                                        "returnType": null,
                                                        "flags": 256,
                                                        "start": 7,
                                                        "end": 16
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 16,
                                                        "start": 512,
                                                        "end": 17
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 768,
                                                        "start": 17,
                                                        "end": 18
                                                    },
                                                    "flags": 256,
                                                    "start": 5,
                                                    "end": 18
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 768,
                                                    "start": 5,
                                                    "end": 6
                                                },
                                                "flags": 256,
                                                "start": 5,
                                                "end": 18
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "start": 5,
                                        "end": 18
                                    },
                                    "flags": 256,
                                    "start": 4,
                                    "end": 19
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 19,
                                    "start": 512,
                                    "end": 21
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 768,
                                    "start": 21,
                                    "end": 23
                                },
                                "flags": 256,
                                "start": 4,
                                "end": 23
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 23
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 1,
                    "end": 23
                },
                "flags": 256,
                "start": 0,
                "end": 24
            },
            "flags": 128,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "text": "[...{a: function=x} = c]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Unexpected token. - start: 16, end: 17
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 16, end: 17
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 19, end: 21

```

