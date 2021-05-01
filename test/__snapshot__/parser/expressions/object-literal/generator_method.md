# Kataw parser test case

## Input

`````js
({   async *[ha+ha](){}   })
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
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 134299649,
                                "text": "async",
                                "rawText": "   async",
                                "flags": 96,
                                "start": 2,
                                "end": 10
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "ha",
                                            "rawText": "ha",
                                            "flags": 96,
                                            "start": 13,
                                            "end": 15
                                        },
                                        "operatorToken": {
                                            "kind": 34098,
                                            "flags": 64,
                                            "start": 15,
                                            "end": 16
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "ha",
                                            "rawText": "ha",
                                            "flags": 96,
                                            "start": 16,
                                            "end": 18
                                        },
                                        "flags": 32,
                                        "start": 13,
                                        "end": 18
                                    },
                                    "flags": 32,
                                    "start": 12,
                                    "end": 19
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 20,
                                    "end": 21
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 22,
                                        "end": 22
                                    },
                                    "flags": 32,
                                    "start": 21,
                                    "end": 23
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 23
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 23
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 27
                },
                "flags": 32,
                "start": 0,
                "end": 28
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "({   async *[ha+ha](){}   })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 12, end: 13

```

