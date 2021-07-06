# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/escaped-keywords/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/escaped-keywords/gen/stand-alone
> :: test: stand-alone
> :: case: class X { \u0061sync x() { await x } }
## Options

`````js
{}
`````
## Input

`````js
class X { \u0061sync x() { await x } }
`````
## Output

### CST

```javascript
{
    "kind": 122,
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
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "X",
                "rawText": "X",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
            },
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
                                "flags": 16448,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 20
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 22
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 24
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
                                                    "kind": 208,
                                                    "awaitKeyword": {
                                                        "kind": 82196,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 26,
                                                        "end": 32
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 32,
                                                        "end": 34
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 26,
                                                    "end": 34
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 26,
                                                "end": 34
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 26,
                                        "end": 34
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 36
                                },
                                "flags": 256,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 36
                            },
                            "flags": 256,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 36
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 36
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 38
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "class X { \\u0061sync x() { await x } }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Keywords cannot contain escape characters - start: 9, end: 22

```

