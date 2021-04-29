# Kataw parser test case

## Input

`````js
({ *g1() {   return {x: yield}  }})
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
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "g1",
                                    "rawText": "g1",
                                    "flags": 96,
                                    "start": 4,
                                    "end": 6
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 160,
                                    "start": 7,
                                    "end": 8
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 0,
                                                    "start": 10,
                                                    "end": 19
                                                },
                                                "expression": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [
                                                            {
                                                                "kind": 219,
                                                                "generatorToken": null,
                                                                "asyncKeyword": null,
                                                                "getKeyword": null,
                                                                "setKeyword": null,
                                                                "left": {
                                                                    "kind": 229,
                                                                    "yieldKeyword": {
                                                                        "kind": 8454253,
                                                                        "flags": 0,
                                                                        "start": 23,
                                                                        "end": 29
                                                                    },
                                                                    "delegate": false,
                                                                    "asteriskToken": null,
                                                                    "expression": null,
                                                                    "flags": 32,
                                                                    "start": 23,
                                                                    "end": 29
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "start": 21,
                                                                    "end": 22
                                                                },
                                                                "flags": 32,
                                                                "start": 21,
                                                                "end": 29
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 16,
                                                        "start": 21,
                                                        "end": 29
                                                    },
                                                    "flags": 32,
                                                    "start": 19,
                                                    "end": 30
                                                },
                                                "flags": 16,
                                                "start": 0,
                                                "end": 10
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 10,
                                        "end": 30
                                    },
                                    "flags": 32,
                                    "start": 8,
                                    "end": 33
                                },
                                "flags": 160,
                                "start": 6,
                                "end": 33
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 33
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 34
                },
                "flags": 32,
                "start": 0,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "({ *g1() {   return {x: yield}  }})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

