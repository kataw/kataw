# Kataw parser test case

## Input

`````js
async function f(){
  for await (function(){ }[x in y] of x);
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
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
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
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
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
                                "flags": 81,
                                "start": 19,
                                "end": 25
                            },
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "start": 25,
                                "end": 31
                            },
                            "initializer": {
                                "kind": 536871042,
                                "member": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "start": 33,
                                        "end": 41
                                    },
                                    "generatorToken": null,
                                    "name": null,
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
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
                                        "flags": 96,
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
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "start": 54,
                                "end": 57
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
                            "flags": 81,
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

async function f() {
  for await ( of x);
}
```

### Diagnostics

```javascript
✔ No errors
```

