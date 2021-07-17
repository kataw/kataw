# Kataw parser test case

## Input

`````js
async function f(){
  for await (function(){ if (a in b); }.prop of x);
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 17,
                "end": 17
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 25
                            },
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 31
                            },
                            "initializer": {
                                "kind": 129,
                                "member": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 41
                                    },
                                    "asteriskToken": null,
                                    "name": null,
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 42,
                                        "end": 42
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 164,
                                                    "ifKeyword": {
                                                        "kind": 37757019,
                                                        "flags": 80,
                                                        "transformFlags": 0,
                                                        "start": 44,
                                                        "end": 47
                                                    },
                                                    "expression": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 49,
                                                            "end": 50
                                                        },
                                                        "operatorToken": {
                                                            "kind": 21006388,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 50,
                                                            "end": 53
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 53,
                                                            "end": 55
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 5120,
                                                        "start": 49,
                                                        "end": 55
                                                    },
                                                    "consequent": {
                                                        "kind": 168,
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 56,
                                                        "end": 57
                                                    },
                                                    "elseKeyword": null,
                                                    "alternate": null,
                                                    "flags": 80,
                                                    "transformFlags": 0,
                                                    "start": 44,
                                                    "end": 57
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 44,
                                            "end": 57
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 43,
                                        "end": 59
                                    },
                                    "returnType": null,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 59
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "prop",
                                    "rawText": "prop",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 60,
                                    "end": 64
                                },
                                "flags": 32,
                                "transformFlags": 2,
                                "start": 33,
                                "end": 64
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 64,
                                "end": 67
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 67,
                                "end": 69
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 70,
                                "end": 71
                            },
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 71
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 71
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 73
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 73
        }
    ],
    "isModule": false,
    "source": "async function f(){\n  for await (function(){ if (a in b); }.prop of x);\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 73
}
```

### Printed

```javascript
async function f() {
  for await (function () {
    if (a in b);
  }.prop of x);
}
```

### Diagnostics

```javascript
✔ No errors
```

