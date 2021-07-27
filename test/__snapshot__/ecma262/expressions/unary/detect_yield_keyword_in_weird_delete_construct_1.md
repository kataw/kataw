# Kataw parser test case

## Input

`````js
function *f(){ delete ("x"[(yield)]) }
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
                "text": "f",
                "rawText": "f",
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
                                "kind": 126,
                                "operandToken": {
                                    "kind": 4259886,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 21
                                },
                                "operand": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 201392131,
                                            "text": "x",
                                            "rawText": "\"x\"",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 26
                                        },
                                        "expression": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 28,
                                                    "end": 33
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": null,
                                                "flags": 32,
                                                "transformFlags": 4096,
                                                "start": 28,
                                                "end": 33
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 34
                                        },
                                        "flags": 32,
                                        "transformFlags": 4,
                                        "start": 23,
                                        "end": 35
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 36
                                },
                                "flags": 32,
                                "transformFlags": 16384,
                                "start": 14,
                                "end": 36
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 14,
                            "end": 36
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 36
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 38
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "function *f(){ delete (\"x\"[(yield)]) }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
function *f() {
  delete ("\"x\""[(yield )]);
}
```

### Diagnostics

```javascript
✔ No errors
```

