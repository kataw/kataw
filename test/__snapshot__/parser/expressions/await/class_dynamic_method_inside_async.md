# Kataw parser test case

## Input

`````js
async function f() {
  class x{[x](await){}}
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
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                            "kind": 178,
                            "declareKeyword": null,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 768,
                                "start": 20,
                                "end": 28
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 28,
                                "end": 30
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
                                        "staticKeyword": null,
                                        "asyncKeyword": null,
                                        "setKeyword": null,
                                        "getKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 768,
                                                    "start": 32,
                                                    "end": 33
                                                },
                                                "flags": 256,
                                                "start": 31,
                                                "end": 34
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
                                                            "text": "await",
                                                            "rawText": "await",
                                                            "flags": 768,
                                                            "start": 35,
                                                            "end": 40
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 256,
                                                        "start": 35,
                                                        "end": 40
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 35,
                                                "end": 41
                                            },
                                            "type": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 42,
                                                    "end": 42
                                                },
                                                "flags": 256,
                                                "start": 41,
                                                "end": 43
                                            },
                                            "flags": 0,
                                            "start": 34,
                                            "end": 43
                                        },
                                        "flags": 0,
                                        "start": 31,
                                        "end": 43
                                    }
                                ],
                                "flags": 256,
                                "start": 31,
                                "end": 44
                            },
                            "flags": 128,
                            "start": 20,
                            "end": 44
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 20,
                    "end": 44
                },
                "flags": 256,
                "start": 18,
                "end": 46
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1152,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "text": "async function f() {\n  class x{[x](await){}}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

