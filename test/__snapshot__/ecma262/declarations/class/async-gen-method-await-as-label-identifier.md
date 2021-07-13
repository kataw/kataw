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
                "flags": 80,
                "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 189,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 64,
                                "transformFlags": 0,
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
                                            "staticKeyword": null,
                                            "asyncKeyword": {
                                                "kind": 82031,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 15,
                                                "end": 21
                                            },
                                            "setKeyword": null,
                                            "getKeyword": null,
                                            "asteriskToken": {
                                                "kind": 67143222,
                                                "flags": 64,
                                                "transformFlags": 32,
                                                "start": 21,
                                                "end": 23
                                            },
                                            "method": {
                                                "kind": 209,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "gen",
                                                    "rawText": "gen",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 23,
                                                    "end": 26
                                                },
                                                "typeParameters": null,
                                                "formalParameterList": {
                                                    "kind": 214,
                                                    "formalParameters": [],
                                                    "trailingComma": false,
                                                    "flags": 384,
                                                    "transformFlags": 0,
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
                                                                        "flags": 65,
                                                                        "transformFlags": 0,
                                                                        "start": 30,
                                                                        "end": 40
                                                                    },
                                                                    "expression": {
                                                                        "kind": 16637,
                                                                        "text": "",
                                                                        "rawText": "",
                                                                        "flags": 64,
                                                                        "transformFlags": 0,
                                                                        "start": 40,
                                                                        "end": 40
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 4096,
                                                                    "start": 30,
                                                                    "end": 40
                                                                },
                                                                "colonToken": {
                                                                    "kind": 21,
                                                                    "flags": 64,
                                                                    "transformFlags": 0,
                                                                    "start": 40,
                                                                    "end": 41
                                                                },
                                                                "statement": {
                                                                    "kind": 168,
                                                                    "flags": 16,
                                                                    "transformFlags": 0,
                                                                    "start": 41,
                                                                    "end": 43
                                                                },
                                                                "flags": 17,
                                                                "transformFlags": 0,
                                                                "start": 30,
                                                                "end": 43
                                                            }
                                                        ],
                                                        "flags": 33,
                                                        "transformFlags": 0,
                                                        "start": 30,
                                                        "end": 43
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 28,
                                                    "end": 45
                                                },
                                                "flags": 384,
                                                "transformFlags": 0,
                                                "start": 26,
                                                "end": 45
                                            },
                                            "flags": 384,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 45
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 45
                                },
                                "flags": 13,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 46
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 46
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 46
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 46
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "var C = class { async *gen() {\n    await: ;\n}};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
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

