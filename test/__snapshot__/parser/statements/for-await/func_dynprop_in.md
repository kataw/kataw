# Kataw parser test case

## Input

`````js
async function f(){
  for await (function(){ }[x in y] of x);
}
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 18
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
                                "flags": 1,
                                "start": 19,
                                "end": 25
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 0,
                                "start": 54,
                                "end": 57
                            },
                            "initializer": {
                                "kind": 130,
                                "member": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 0,
                                        "start": 33,
                                        "end": 41
                                    },
                                    "generatorToken": null,
                                    "name": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 41,
                                        "end": 43
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 44,
                                            "end": 44
                                        },
                                        "flags": 32,
                                        "start": 43,
                                        "end": 46
                                    },
                                    "typeParameters": null,
                                    "returnType": null,
                                    "flags": 32,
                                    "start": 33,
                                    "end": 46
                                },
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 47,
                                        "end": 48
                                    },
                                    "operatorToken": {
                                        "kind": 21006388,
                                        "flags": 64,
                                        "start": 48,
                                        "end": 51
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 51,
                                        "end": 53
                                    },
                                    "flags": 32,
                                    "start": 47,
                                    "end": 53
                                },
                                "flags": 32,
                                "start": 33,
                                "end": 54
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 57,
                                "end": 59
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "start": 60,
                                "end": 61
                            },
                            "awaitKeyword": {
                                "kind": 82032,
                                "flags": 64,
                                "start": 25,
                                "end": 31
                            },
                            "flags": 16,
                            "start": 19,
                            "end": 61
                        }
                    ],
                    "flags": 33,
                    "start": 19,
                    "end": 61
                },
                "flags": 32,
                "start": 18,
                "end": 63
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 63
        }
    ],
    "isModule": false,
    "source": "async function f(){\n  for await (function(){ }[x in y] of x);\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 63
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

