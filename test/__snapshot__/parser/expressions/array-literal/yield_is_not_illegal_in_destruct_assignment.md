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
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "original": "g",
                "text": "g",
                "rawText": " g",
                "flags": 96,
                "start": 9,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
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
                                                "ellipsisToken": {
                                                    "kind": 524302,
                                                    "flags": 0,
                                                    "start": 19,
                                                    "end": 22
                                                },
                                                "argument": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [
                                                            {
                                                                "kind": 205,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "original": "x",
                                                                    "text": "x",
                                                                    "rawText": " x",
                                                                    "flags": 96,
                                                                    "start": 23,
                                                                    "end": 25
                                                                },
                                                                "right": {
                                                                    "kind": 229,
                                                                    "yieldKeyword": {
                                                                        "kind": 8454253,
                                                                        "flags": 0,
                                                                        "start": 27,
                                                                        "end": 33
                                                                    },
                                                                    "delegate": false,
                                                                    "asteriskToken": null,
                                                                    "expression": null,
                                                                    "flags": 32,
                                                                    "start": 27,
                                                                    "end": 33
                                                                },
                                                                "flags": 32,
                                                                "start": 23,
                                                                "end": 33
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 16,
                                                        "start": 23,
                                                        "end": 33
                                                    },
                                                    "flags": 32,
                                                    "start": 22,
                                                    "end": 35
                                                },
                                                "flags": 32,
                                                "start": 19,
                                                "end": 35
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 19,
                                        "end": 35
                                    },
                                    "flags": 32,
                                    "start": 15,
                                    "end": 36
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 36,
                                    "end": 38
                                },
                                "right": {
                                    "kind": 134299649,
                                    "original": "y",
                                    "text": "y",
                                    "rawText": " y",
                                    "flags": 96,
                                    "start": 38,
                                    "end": 40
                                },
                                "flags": 32,
                                "start": 15,
                                "end": 40
                            },
                            "flags": 16,
                            "start": 15,
                            "end": 40
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 40
                },
                "flags": 32,
                "start": 13,
                "end": 44
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "function* g() {   [...{ x = yield }] = y   }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
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

