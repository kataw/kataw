# Kataw parser test case

## Input

`````js
function *f() {  return void yield;  }
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
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 80,
                                "start": 15,
                                "end": 23
                            },
                            "expression": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 138477615,
                                    "flags": 96,
                                    "start": 23,
                                    "end": 28
                                },
                                "operand": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 64,
                                        "start": 28,
                                        "end": 34
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": null,
                                    "flags": 32,
                                    "start": 28,
                                    "end": 34
                                },
                                "flags": 32,
                                "start": 23,
                                "end": 34
                            },
                            "flags": 80,
                            "start": 15,
                            "end": 35
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 35
                },
                "flags": 32,
                "start": 13,
                "end": 38
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "function *f() {  return void yield;  }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

function * f() {
  return void  yield ;
}

```

### Diagnostics

```javascript
✔ No errors
```

