# Kataw parser test case

## Input

`````js
function *g(){ (x = [yield y]) }
`````

## Output

### CST

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
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 201360950,
                "flags": 64,
                "transformFlags": 32,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "transformFlags": 0,
                "start": 10,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 12
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
                                "kind": 121,
                                "expression": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 17
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 19
                                    },
                                    "right": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 229,
                                                    "yieldKeyword": {
                                                        "kind": 8454253,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 21,
                                                        "end": 26
                                                    },
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 26,
                                                        "end": 28
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 4096,
                                                    "start": 21,
                                                    "end": 28
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 28
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 19,
                                        "end": 29
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 14,
                                    "end": 29
                                },
                                "flags": 34,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 30
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 14,
                            "end": 30
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 30
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 32
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "function *g(){ (x = [yield y]) }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
function *g() {
  (x = [yield y]);
}
```

### Diagnostics

```javascript
✔ No errors
```

