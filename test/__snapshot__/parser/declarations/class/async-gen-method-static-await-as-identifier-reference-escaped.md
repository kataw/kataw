# Kataw parser test case

## Input

`````js
var C = class { static async *gen() {
    void \u0061wait;
}};
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "C",
                            "rawText": "C",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 189,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 0,
                                "start": 7,
                                "end": 13
                            },
                            "name": null,
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": null,
                                "body": {
                                    "kind": 262,
                                    "elements": [
                                        {
                                            "kind": 278,
                                            "declareToken": null,
                                            "decorators": null,
                                            "generatorToken": {
                                                "kind": 67143222,
                                                "flags": 64,
                                                "start": 28,
                                                "end": 30
                                            },
                                            "staticKeyword": {
                                                "kind": 8388716,
                                                "flags": 64,
                                                "start": 15,
                                                "end": 22
                                            },
                                            "asyncKeyword": {
                                                "kind": 82031,
                                                "flags": 64,
                                                "start": 22,
                                                "end": 28
                                            },
                                            "setKeyword": null,
                                            "getKeyword": null,
                                            "method": {
                                                "kind": 209,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "gen",
                                                    "rawText": "gen",
                                                    "flags": 96,
                                                    "start": 30,
                                                    "end": 33
                                                },
                                                "typeParameters": null,
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 384,
                                                    "start": 34,
                                                    "end": 35
                                                },
                                                "returnType": null,
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
                                                                        "kind": 138477615,
                                                                        "flags": 65,
                                                                        "start": 37,
                                                                        "end": 46
                                                                    },
                                                                    "operand": {
                                                                        "kind": 208,
                                                                        "awaitKeyword": {
                                                                            "kind": 82032,
                                                                            "flags": 16384,
                                                                            "start": 46,
                                                                            "end": 57
                                                                        },
                                                                        "expression": {
                                                                            "kind": 16637,
                                                                            "text": "",
                                                                            "flags": 64,
                                                                            "start": 57,
                                                                            "end": 57
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 46,
                                                                        "end": 57
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 37,
                                                                    "end": 57
                                                                },
                                                                "flags": 16,
                                                                "start": 37,
                                                                "end": 58
                                                            }
                                                        ],
                                                        "flags": 33,
                                                        "start": 37,
                                                        "end": 58
                                                    },
                                                    "flags": 32,
                                                    "start": 35,
                                                    "end": 60
                                                },
                                                "flags": 384,
                                                "start": 33,
                                                "end": 60
                                            },
                                            "flags": 384,
                                            "start": 22,
                                            "end": 60
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 15,
                                    "end": 60
                                },
                                "flags": 13,
                                "start": 32,
                                "end": 61
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 61
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 61
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 61
            },
            "flags": 16,
            "start": 0,
            "end": 62
        }
    ],
    "isModule": false,
    "source": "var C = class { static async *gen() {\n    void \\u0061wait;\n}};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 62
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'await' keyword must not contain escaped characters - start: 46, end: 46
✖ Expression expected - start: 57, end: 58

```

