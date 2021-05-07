# Kataw parser test case

## Input

`````js
function *g() { [...yield]; }
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
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 10,
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
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 223,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 0,
                                                "start": 17,
                                                "end": 20
                                            },
                                            "argument": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 0,
                                                    "start": 20,
                                                    "end": 25
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": null,
                                                "flags": 32,
                                                "start": 20,
                                                "end": 25
                                            },
                                            "flags": 32,
                                            "start": 17,
                                            "end": 25
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 17,
                                    "end": 25
                                },
                                "flags": 32,
                                "start": 15,
                                "end": 26
                            },
                            "flags": 16,
                            "start": 15,
                            "end": 27
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 27
                },
                "flags": 32,
                "start": 13,
                "end": 29
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "function *g() { [...yield]; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

function * g() {
  [... ];
}
```

### Diagnostics

```javascript
✔ No errors
```

