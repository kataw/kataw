# Kataw parser test case

## Input

`````js
function* g() {   [...{ x = yield }] = y   }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 176,
            "asyncToken": null,
            "generatorToken": {
                "kind": 67143222,
                "autofix": 0,
                "flags": 0,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 81921,
                "value": "g",
                "autofix": 0,
                "flags": 768,
                "start": 9,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 12,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 223,
                                                "argument": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [
                                                            {
                                                                "kind": 205,
                                                                "left": {
                                                                    "kind": 81921,
                                                                    "value": "x",
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 23,
                                                                    "end": 25
                                                                },
                                                                "right": {
                                                                    "kind": 229,
                                                                    "delegate": false,
                                                                    "asteriskToken": null,
                                                                    "expression": null,
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 27,
                                                                    "end": 33
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 23,
                                                                "end": 33
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "autofix": 0,
                                                        "flags": 0,
                                                        "start": 23,
                                                        "end": 33
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 22,
                                                    "end": 35
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 19,
                                                "end": 35
                                            }
                                        ],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 19,
                                        "end": 35
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 15,
                                    "end": 36
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 36,
                                    "end": 38
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "y",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 38,
                                    "end": 40
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 15,
                                "end": 40
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 15,
                            "end": 40
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 15,
                    "end": 40
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 44
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "text": "function* g() {   [...{ x = yield }] = y   }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

