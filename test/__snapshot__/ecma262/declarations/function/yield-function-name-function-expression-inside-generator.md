# Kataw parser test case

## Input

`````js
function* fn() {
  (function yield() {});
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
                "text": "fn",
                "rawText": "fn",
                "flags": 96,
                "start": 9,
                "end": 12
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 13,
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
                                "kind": 121,
                                "expression": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "start": 20,
                                        "end": 28
                                    },
                                    "asteriskToken": null,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "start": 28,
                                        "end": 34
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 35,
                                        "end": 35
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 38,
                                            "end": 38
                                        },
                                        "flags": 32,
                                        "start": 36,
                                        "end": 39
                                    },
                                    "returnType": null,
                                    "flags": 32,
                                    "start": 20,
                                    "end": 39
                                },
                                "flags": 32,
                                "start": 16,
                                "end": 40
                            },
                            "flags": 16,
                            "start": 16,
                            "end": 41
                        }
                    ],
                    "flags": 33,
                    "start": 16,
                    "end": 41
                },
                "flags": 32,
                "start": 14,
                "end": 43
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "function* fn() {\n  (function yield() {});\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

function * fn() {
  (function yield() {});
}
```

### Diagnostics

```javascript
✔ No errors
```

