# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/yield/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: function* gf() { var fe = function yield() { } }
## Input

`````js
'use strict'; function* gf() { var fe = function yield() { } }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "'use strict'; function* gf() { var fe = function yield() { } }",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 33554432,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        },
        {
            "kind": 788576,
            "name": {
                "kind": 131102,
                "text": "gf",
                "rawText": "gf",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 23,
                "end": 26
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 27,
                "end": 28
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "fe",
                                            "rawText": "fe",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 34,
                                            "end": 37
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 8456285,
                                            "name": {
                                                "kind": 131102,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 1025,
                                                "start": 48,
                                                "end": 54
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 55,
                                                "end": 56
                                            },
                                            "contents": {
                                                "kind": 91,
                                                "functionStatementList": {
                                                    "kind": 94,
                                                    "statements": [],
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 58,
                                                    "end": 58
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 56,
                                                "end": 60
                                            },
                                            "typeParameters": null,
                                            "type": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 39,
                                            "end": 60
                                        },
                                        "flags": 34,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 60
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 60
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 60
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 60
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 28,
                "end": 62
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 384,
            "start": 13,
            "end": 62
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 62
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

