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
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 81921,
                                            "text": "ha",
                                            "rawText": "ha",
                                            "flags": 768,
                                            "start": 13,
                                            "end": 15
                                        },
                                        "operatorToken": {
                                            "kind": 34098,
                                            "flags": 768,
                                            "start": 15,
                                            "end": 16
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "text": "ha",
                                            "rawText": "ha",
                                            "flags": 768,
                                            "start": 16,
                                            "end": 18
                                        },
                                        "flags": 256,
                                        "start": 13,
                                        "end": 18
                                    },
                                    "flags": 256,
                                    "start": 12,
                                    "end": 19
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 3328,
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
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 22,
                                        "end": 22
                                    },
                                    "flags": 256,
                                    "start": 21,
                                    "end": 23
                                },
                                "flags": 3328,
                                "start": 19,
                                "end": 23
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 23
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 27
                },
                "flags": 256,
                "start": 0,
                "end": 28
            },
            "flags": 128,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "text": "({   async *[ha+ha](){}   })",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

