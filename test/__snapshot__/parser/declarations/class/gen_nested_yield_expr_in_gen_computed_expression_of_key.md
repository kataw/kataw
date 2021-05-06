# Kataw parser test case

## Input

`````js
function *f(){  class x{*[yield](a){}}  }
`````

## Options

### Parser Options

`````js
{}
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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
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
                            "kind": 178,
                            "declareKeyword": null,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 0,
                                "start": 14,
                                "end": 21
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 21,
                                "end": 23
                            },
                            "typeParameters": null,
                            "classHeritage": null,
                            "members": {
                                "kind": 277,
                                "elements": [
                                    {
                                        "kind": 278,
                                        "declareToken": null,
                                        "decorators": null,
                                        "generatorToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "start": 24,
                                            "end": 25
                                        },
                                        "staticKeyword": null,
                                        "asyncKeyword": null,
                                        "setKeyword": null,
                                        "getKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 229,
                                                    "yieldKeyword": {
                                                        "kind": 8454253,
                                                        "flags": 0,
                                                        "start": 26,
                                                        "end": 31
                                                    },
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": null,
                                                    "flags": 32,
                                                    "start": 26,
                                                    "end": 31
                                                },
                                                "flags": 32,
                                                "start": 25,
                                                "end": 32
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [
                                                    {
                                                        "kind": 215,
                                                        "ellipsisToken": null,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 33,
                                                            "end": 34
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 32,
                                                        "start": 33,
                                                        "end": 34
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 33,
                                                "end": 35
                                            },
                                            "type": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 36,
                                                    "end": 36
                                                },
                                                "flags": 32,
                                                "start": 35,
                                                "end": 37
                                            },
                                            "flags": 0,
                                            "start": 32,
                                            "end": 37
                                        },
                                        "flags": 0,
                                        "start": 24,
                                        "end": 37
                                    }
                                ],
                                "flags": 32,
                                "start": 24,
                                "end": 38
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 38
                        }
                    ],
                    "flags": 32,
                    "start": 14,
                    "end": 38
                },
                "flags": 32,
                "start": 13,
                "end": 41
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "function *f(){  class x{*[yield](a){}}  }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

function* f() {
  class {
    [ ](a) {}
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

