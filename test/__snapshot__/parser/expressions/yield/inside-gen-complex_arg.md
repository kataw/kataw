# Kataw parser test case

## Input

`````js
function* f(){ yield x + y; }
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
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
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
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "start": 14,
                                    "end": 20
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 20,
                                        "end": 22
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 64,
                                        "start": 22,
                                        "end": 24
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 24,
                                        "end": 26
                                    },
                                    "flags": 32,
                                    "start": 20,
                                    "end": 26
                                },
                                "flags": 32,
                                "start": 14,
                                "end": 26
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 27
                        }
                    ],
                    "flags": 32,
                    "start": 14,
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
    "source": "function* f(){ yield x + y; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

function * f() {
  yield x + y;
}
```

### Diagnostics

```javascript
✔ No errors
```

