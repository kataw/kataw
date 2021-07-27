# Kataw parser test case

## Input

`````js
var C = class { async *gen() {
    void await;
}};
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                                                "kind": 201360950,
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
                                                                "kind": 120,
                                                                "expression": {
                                                                    "kind": 126,
                                                                    "operandToken": {
                                                                        "kind": 138477615,
                                                                        "flags": 97,
                                                                        "transformFlags": 0,
                                                                        "start": 30,
                                                                        "end": 39
                                                                    },
                                                                    "operand": {
                                                                        "kind": 208,
                                                                        "awaitKeyword": {
                                                                            "kind": 82196,
                                                                            "flags": 64,
                                                                            "transformFlags": 0,
                                                                            "start": 39,
                                                                            "end": 45
                                                                        },
                                                                        "expression": {
                                                                            "kind": 16637,
                                                                            "text": "",
                                                                            "rawText": "",
                                                                            "flags": 64,
                                                                            "transformFlags": 0,
                                                                            "start": 45,
                                                                            "end": 45
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 4096,
                                                                        "start": 39,
                                                                        "end": 45
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 16384,
                                                                    "start": 30,
                                                                    "end": 45
                                                                },
                                                                "flags": 16,
                                                                "transformFlags": 4096,
                                                                "start": 30,
                                                                "end": 46
                                                            }
                                                        ],
                                                        "flags": 33,
                                                        "transformFlags": 0,
                                                        "start": 30,
                                                        "end": 46
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 28,
                                                    "end": 48
                                                },
                                                "flags": 384,
                                                "transformFlags": 0,
                                                "start": 26,
                                                "end": 48
                                            },
                                            "flags": 384,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 48
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 48
                                },
                                "flags": 13,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 49
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 49
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 49
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 49
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "var C = class { async *gen() {\n    void await;\n}};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 45, end: 46

```

