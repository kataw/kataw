# Kataw parser test case

## Input

`````js
function* wrap() {
    ({*yield() {}})
}
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
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "wrap",
                "rawText": "wrap",
                "flags": 96,
                "start": 9,
                "end": 14
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 15,
                "end": 15
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
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 351,
                                                "asyncKeyword": null,
                                                "asteriskToken": {
                                                    "kind": 67143222,
                                                    "flags": 64,
                                                    "start": 25,
                                                    "end": 26
                                                },
                                                "getKeyword": null,
                                                "setKeyword": null,
                                                "method": {
                                                    "kind": 209,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "yield",
                                                        "rawText": "yield",
                                                        "flags": 96,
                                                        "start": 26,
                                                        "end": 31
                                                    },
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [],
                                                        "trailingComma": false,
                                                        "flags": 160,
                                                        "start": 32,
                                                        "end": 33
                                                    },
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "start": 35,
                                                            "end": 35
                                                        },
                                                        "flags": 32,
                                                        "start": 33,
                                                        "end": 36
                                                    },
                                                    "flags": 160,
                                                    "start": 31,
                                                    "end": 36
                                                },
                                                "flags": 32,
                                                "start": 25,
                                                "end": 36
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 25,
                                        "end": 36
                                    },
                                    "flags": 48,
                                    "start": 24,
                                    "end": 37
                                },
                                "flags": 18,
                                "start": 35,
                                "end": 38
                            },
                            "flags": 16,
                            "start": 18,
                            "end": 38
                        }
                    ],
                    "flags": 33,
                    "start": 18,
                    "end": 38
                },
                "flags": 32,
                "start": 16,
                "end": 40
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "function* wrap() {\n    ({*yield() {}})\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

function * wrap() {
  ({* yield() {}});
}
```

### Diagnostics

```javascript
✔ No errors
```

