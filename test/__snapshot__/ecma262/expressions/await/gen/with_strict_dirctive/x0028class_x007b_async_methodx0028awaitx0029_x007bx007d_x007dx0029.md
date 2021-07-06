# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: (class { async method(await) {} })
## Options

`````js
{}
`````
## Input

`````js
'use strict'; (class { async method(await) {} })
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 20
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
                                        "start": 22,
                                        "end": 28
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "method",
                                            "rawText": "method",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 28,
                                            "end": 35
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "await",
                                                    "rawText": "await",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 36,
                                                    "end": 41
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 352,
                                            "transformFlags": 0,
                                            "start": 36,
                                            "end": 42
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 44,
                                                "end": 44
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 42,
                                            "end": 45
                                        },
                                        "flags": 256,
                                        "transformFlags": 0,
                                        "start": 35,
                                        "end": 45
                                    },
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 45
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 45
                        },
                        "flags": 20,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 47
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 47
                },
                "flags": 13,
                "transformFlags": 0,
                "start": 32,
                "end": 48
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "'use strict'; (class { async method(await) {} })",
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
✖ `await` expression cannot be used in function parameters - start: 36, end: 41

```

