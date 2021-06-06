# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: (class { static async method(...await) {} })
## Input

`````js
'use strict'; (class { static async method(...await) {} })
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
                        "start": 15,
                        "end": 20
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
                                    "generatorToken": null,
                                    "staticKeyword": {
                                        "kind": 8388716,
                                        "flags": 64,
                                        "start": 22,
                                        "end": 29
                                    },
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 29,
                                        "end": 35
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
                                            "start": 35,
                                            "end": 42
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [
                                                {
                                                    "kind": 281,
                                                    "ellipsisToken": {
                                                        "kind": 524302,
                                                        "flags": 64,
                                                        "start": 43,
                                                        "end": 46
                                                    },
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "await",
                                                        "rawText": "await",
                                                        "flags": 96,
                                                        "start": 46,
                                                        "end": 51
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "right": null,
                                                    "flags": 34,
                                                    "start": 43,
                                                    "end": 51
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 290,
                                            "start": 43,
                                            "end": 52
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 54,
                                                "end": 54
                                            },
                                            "flags": 32,
                                            "start": 52,
                                            "end": 55
                                        },
                                        "flags": 256,
                                        "start": 42,
                                        "end": 55
                                    },
                                    "flags": 256,
                                    "start": 29,
                                    "end": 55
                                }
                            ],
                            "flags": 32,
                            "start": 22,
                            "end": 55
                        },
                        "flags": 20,
                        "start": 32,
                        "end": 57
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 57
                },
                "flags": 32,
                "start": 13,
                "end": 58
            },
            "flags": 16,
            "start": 13,
            "end": 58
        }
    ],
    "isModule": false,
    "source": "'use strict'; (class { static async method(...await) {} })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `await` expression cannot be used in function parameters - start: 46, end: 51

```

