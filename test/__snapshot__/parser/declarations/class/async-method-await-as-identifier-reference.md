# Kataw parser test case

## Input

`````js
var C = class { async method() {
    void await;
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
                "flags": 80,
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
                                "flags": 64,
                                "start": 7,
                                "end": 13
                            },
                            "name": null,
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": null,
                                "body": {
                                    "kind": 303,
                                    "elements": [
                                        {
                                            "kind": 278,
                                            "declareToken": null,
                                            "decorators": null,
                                            "generatorToken": null,
                                            "staticKeyword": null,
                                            "asyncKeyword": {
                                                "kind": 82031,
                                                "flags": 64,
                                                "start": 15,
                                                "end": 21
                                            },
                                            "setKeyword": null,
                                            "getKeyword": null,
                                            "method": {
                                                "kind": 209,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "method",
                                                    "rawText": "method",
                                                    "flags": 96,
                                                    "start": 21,
                                                    "end": 28
                                                },
                                                "typeParameters": null,
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameters": [],
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 29,
                                                    "end": 30
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
                                                                        "flags": 97,
                                                                        "start": 32,
                                                                        "end": 41
                                                                    },
                                                                    "operand": {
                                                                        "kind": 208,
                                                                        "awaitKeyword": {
                                                                            "kind": 82196,
                                                                            "flags": 64,
                                                                            "start": 41,
                                                                            "end": 47
                                                                        },
                                                                        "expression": {
                                                                            "kind": 16637,
                                                                            "text": "",
                                                                            "rawText": "",
                                                                            "flags": 64,
                                                                            "start": 47,
                                                                            "end": 47
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 41,
                                                                        "end": 47
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 32,
                                                                    "end": 47
                                                                },
                                                                "flags": 16,
                                                                "start": 32,
                                                                "end": 48
                                                            }
                                                        ],
                                                        "flags": 33,
                                                        "start": 32,
                                                        "end": 48
                                                    },
                                                    "flags": 32,
                                                    "start": 30,
                                                    "end": 50
                                                },
                                                "flags": 256,
                                                "start": 28,
                                                "end": 50
                                            },
                                            "flags": 256,
                                            "start": 15,
                                            "end": 50
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 15,
                                    "end": 50
                                },
                                "flags": 13,
                                "start": 32,
                                "end": 51
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 51
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 51
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 51
            },
            "flags": 16,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "var C = class { async method() {\n    void await;\n}};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 47, end: 48

```

