# Kataw parser test case

## Input

`````js
({ *g1() {   (yield)  }})
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
                                    "flags": 768,
                                    "start": 4,
                                    "end": 6
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1280,
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
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 229,
                                                        "yieldKeyword": {
                                                            "kind": 8454253,
                                                            "flags": 768,
                                                            "start": 14,
                                                            "end": 19
                                                        },
                                                        "delegate": false,
                                                        "asteriskToken": null,
                                                        "expression": null,
                                                        "flags": 256,
                                                        "start": 14,
                                                        "end": 19
                                                    },
                                                    "flags": 256,
                                                    "start": 10,
                                                    "end": 20
                                                },
                                                "flags": 128,
                                                "start": 10,
                                                "end": 20
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 10,
                                        "end": 20
                                    },
                                    "flags": 256,
                                    "start": 8,
                                    "end": 23
                                },
                                "flags": 1280,
                                "start": 6,
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
                    "end": 24
                },
                "flags": 256,
                "start": 0,
                "end": 25
            },
            "flags": 128,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "({ *g1() {   (yield)  }})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
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

