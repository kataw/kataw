# Kataw parser test case

## Input

`````js
function *f(){ ({x} = yield) => {} }
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
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 10,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
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
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 212,
                                                "propertyList": {
                                                    "kind": 213,
                                                    "properties": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 17,
                                                            "end": 18
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 17,
                                                    "end": 18
                                                },
                                                "flags": 48,
                                                "start": 16,
                                                "end": 19
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 64,
                                                    "start": 21,
                                                    "end": 27
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": null,
                                                "flags": 32,
                                                "start": 21,
                                                "end": 27
                                            },
                                            "flags": 32,
                                            "start": 16,
                                            "end": 27
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2,
                                    "start": 16,
                                    "end": 28
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 28,
                                    "end": 31
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 33,
                                        "end": 33
                                    },
                                    "flags": 32,
                                    "start": 31,
                                    "end": 34
                                },
                                "flags": 34,
                                "start": 14,
                                "end": 34
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 34
                        }
                    ],
                    "flags": 32,
                    "start": 14,
                    "end": 34
                },
                "flags": 32,
                "start": 13,
                "end": 36
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "function *f(){ ({x} = yield) => {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

function * f() {
  () =>  {};
}
```

### Diagnostics

```javascript
✔ No errors
```

