# Kataw parser test case

## Input

`````js
function *f() {
  yield *= x;
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
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "transformFlags": 0,
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
                                "kind": 125,
                                "left": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 65,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 23
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": null,
                                    "flags": 32,
                                    "transformFlags": 4096,
                                    "start": 15,
                                    "end": 23
                                },
                                "operatorToken": {
                                    "kind": 4132,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 26
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 26,
                                    "end": 28
                                },
                                "flags": 0,
                                "transformFlags": 128,
                                "start": 15,
                                "end": 28
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 15,
                            "end": 29
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 29
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 31
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "function *f() {\n  yield *= x;\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 23, end: 26

```

