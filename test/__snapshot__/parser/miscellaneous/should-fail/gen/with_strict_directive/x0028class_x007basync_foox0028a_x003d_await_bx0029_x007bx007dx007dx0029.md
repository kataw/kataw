# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\with_strict_directive
> :: test: with strict directive
> :: case: (class {async foo(a = await b) {}})
## Input

`````js
"use strict"; (class {async foo(a = await b) {}})
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
            "rawText": "\"use strict\"",
            "flags": 96,
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
                                    "staticKeyword": null,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 22,
                                        "end": 27
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 27,
                                            "end": 31
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [
                                                {
                                                    "kind": 281,
                                                    "ellipsisToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 32,
                                                        "end": 33
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "right": {
                                                        "kind": 208,
                                                        "awaitKeyword": {
                                                            "kind": 82196,
                                                            "flags": 64,
                                                            "start": 35,
                                                            "end": 41
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "start": 41,
                                                            "end": 43
                                                        },
                                                        "flags": 32,
                                                        "start": 35,
                                                        "end": 43
                                                    },
                                                    "flags": 34,
                                                    "start": 32,
                                                    "end": 43
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 290,
                                            "start": 32,
                                            "end": 44
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 46,
                                                "end": 46
                                            },
                                            "flags": 32,
                                            "start": 44,
                                            "end": 47
                                        },
                                        "flags": 256,
                                        "start": 31,
                                        "end": 47
                                    },
                                    "flags": 256,
                                    "start": 22,
                                    "end": 47
                                }
                            ],
                            "flags": 32,
                            "start": 22,
                            "end": 47
                        },
                        "flags": 20,
                        "start": 32,
                        "end": 48
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 48
                },
                "flags": 32,
                "start": 13,
                "end": 49
            },
            "flags": 16,
            "start": 13,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; (class {async foo(a = await b) {}})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `await` expression cannot be used in function parameters - start: 35, end: 41

```

