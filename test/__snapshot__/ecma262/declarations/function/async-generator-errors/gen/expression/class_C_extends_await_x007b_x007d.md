# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/function/async-generator-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/function/async-generator-errors/gen/expression
> :: test: expression
> :: case: class C extends await { }
## Options

`````js
{}
`````
## Input

`````js
({ async * gen () {class C extends await { }} })
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 352,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 8
                                },
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "transformFlags": 32,
                                    "start": 8,
                                    "end": 10
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "gen",
                                        "rawText": "gen",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 14
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 416,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 17
                                    },
                                    "returnType": null,
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
                                                        "flags": 80,
                                                        "transformFlags": 0,
                                                        "start": 19,
                                                        "end": 24
                                                    },
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "C",
                                                        "rawText": "C",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 24,
                                                        "end": 26
                                                    },
                                                    "typeParameters": null,
                                                    "tail": {
                                                        "kind": 277,
                                                        "classHeritage": {
                                                            "kind": 279,
                                                            "extendsKeyword": {
                                                                "kind": 4194391,
                                                                "flags": 80,
                                                                "transformFlags": 0,
                                                                "start": 26,
                                                                "end": 34
                                                            },
                                                            "expression": {
                                                                "kind": 208,
                                                                "awaitKeyword": {
                                                                    "kind": 82196,
                                                                    "flags": 64,
                                                                    "transformFlags": 0,
                                                                    "start": 34,
                                                                    "end": 40
                                                                },
                                                                "expression": {
                                                                    "kind": 220,
                                                                    "propertyList": {
                                                                        "kind": 218,
                                                                        "properties": [],
                                                                        "trailingComma": false,
                                                                        "flags": 16,
                                                                        "transformFlags": 0,
                                                                        "start": 42,
                                                                        "end": 42
                                                                    },
                                                                    "flags": 48,
                                                                    "transformFlags": 8,
                                                                    "start": 40,
                                                                    "end": 44
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 34,
                                                                "end": 44
                                                            },
                                                            "typeParameter": null,
                                                            "flags": 16,
                                                            "transformFlags": 0,
                                                            "start": 34,
                                                            "end": 44
                                                        },
                                                        "body": {
                                                            "kind": 303,
                                                            "elements": [],
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 26,
                                                            "end": 26
                                                        },
                                                        "flags": 26,
                                                        "transformFlags": 0,
                                                        "start": 32,
                                                        "end": 26
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 19,
                                                    "end": 44
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 44
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 45
                                    },
                                    "flags": 416,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 45
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 45
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 45
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 47
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 48
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "({ async * gen () {class C extends await { }} })",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expression expected - start: 34, end: 40
✖ Missing an opening brace - '{ - start: 44, end: 45

```

