# Kataw parser test case

## Input

`````js
var C = class { async *gen() {
    await: ;
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
                                                "start": 21,
                                                "end": 23
                                            },
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
                                                    "text": "gen",
                                                    "rawText": "gen",
                                                    "flags": 96,
                                                    "start": 23,
                                                    "end": 26
                                                },
                                                "typeParameters": null,
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 384,
                                                    "start": 27,
                                                    "end": 28
                                                },
                                                "returnType": null,
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [
                                                            {
                                                                "kind": 163,
                                                                "label": {
                                                                    "kind": 208,
                                                                    "awaitKeyword": {
                                                                        "kind": 82196,
                                                                        "flags": 1,
                                                                        "start": 30,
                                                                        "end": 40
                                                                    },
                                                                    "expression": {
                                                                        "kind": 16637,
                                                                        "text": "",
                                                                        "flags": 64,
                                                                        "start": 40,
                                                                        "end": 40
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 30,
                                                                    "end": 40
                                                                },
                                                                "labels": [
                                                                    {
                                                                        "kind": 256,
                                                                        "iterationStatement": false,
                                                                        "flags": 17,
                                                                        "start": 30,
                                                                        "end": 40
                                                                    }
                                                                ],
                                                                "colonToken": {
                                                                    "kind": 21,
                                                                    "flags": 0,
                                                                    "start": 40,
                                                                    "end": 41
                                                                },
                                                                "statement": {
                                                                    "kind": 168,
                                                                    "flags": 16,
                                                                    "start": 41,
                                                                    "end": 43
                                                                },
                                                                "flags": 17,
                                                                "start": 30,
                                                                "end": 43
                                                            }
                                                        ],
                                                        "flags": 33,
                                                        "start": 30,
                                                        "end": 43
                                                    },
                                                    "flags": 32,
                                                    "start": 28,
                                                    "end": 45
                                                },
                                                "flags": 384,
                                                "start": 26,
                                                "end": 45
                                            },
                                            "flags": 384,
                                            "start": 15,
                                            "end": 45
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 15,
                                    "end": 45
                                },
                                "flags": 13,
                                "start": 32,
                                "end": 46
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 46
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 46
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 46
            },
            "flags": 16,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "var C = class { async *gen() {\n    await: ;\n}};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 40, end: 41
✖ Identifier expected. 'await' is a reserved word in strict mode and module goal and cannot be used as an label - start: 30, end: 41

```

