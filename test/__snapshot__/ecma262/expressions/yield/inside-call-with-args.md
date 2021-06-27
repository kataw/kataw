# Kataw parser test case

## Input

`````js
function* f(){ call(yield x); }
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
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 9,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
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
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "call",
                                    "rawText": "call",
                                    "flags": 96,
                                    "start": 14,
                                    "end": 19
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 64,
                                                "start": 20,
                                                "end": 25
                                            },
                                            "delegate": false,
                                            "asteriskToken": null,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 25,
                                                "end": 27
                                            },
                                            "flags": 32,
                                            "start": 20,
                                            "end": 27
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 20,
                                    "end": 27
                                },
                                "flags": 268435488,
                                "start": 14,
                                "end": 28
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 29
                        }
                    ],
                    "flags": 32,
                    "start": 14,
                    "end": 29
                },
                "flags": 32,
                "start": 13,
                "end": 31
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "function* f(){ call(yield x); }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

function * f() {
  call(yield x);
}
```

### Diagnostics

```javascript
✔ No errors
```

