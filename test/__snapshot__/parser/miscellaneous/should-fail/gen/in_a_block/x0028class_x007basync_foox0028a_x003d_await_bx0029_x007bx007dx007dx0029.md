# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\in_a_block
> :: test: in a block
> :: case: (class {async foo(a = await b) {}})
## Input

`````js
{ (class {async foo(a = await b) {}}) }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
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
                                    "start": 3,
                                    "end": 8
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
                                                    "start": 10,
                                                    "end": 15
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
                                                        "start": 15,
                                                        "end": 19
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
                                                                    "start": 20,
                                                                    "end": 21
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "right": {
                                                                    "kind": 208,
                                                                    "awaitKeyword": {
                                                                        "kind": 82196,
                                                                        "flags": 64,
                                                                        "start": 23,
                                                                        "end": 29
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "b",
                                                                        "rawText": "b",
                                                                        "flags": 96,
                                                                        "start": 29,
                                                                        "end": 31
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 23,
                                                                    "end": 31
                                                                },
                                                                "flags": 34,
                                                                "start": 20,
                                                                "end": 31
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 290,
                                                        "start": 20,
                                                        "end": 32
                                                    },
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "start": 34,
                                                            "end": 34
                                                        },
                                                        "flags": 32,
                                                        "start": 32,
                                                        "end": 35
                                                    },
                                                    "flags": 256,
                                                    "start": 19,
                                                    "end": 35
                                                },
                                                "flags": 256,
                                                "start": 10,
                                                "end": 35
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 10,
                                        "end": 35
                                    },
                                    "flags": 8,
                                    "start": 32,
                                    "end": 36
                                },
                                "flags": 32,
                                "start": 3,
                                "end": 36
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 37
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 37
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 37
            },
            "flags": 16,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "{ (class {async foo(a = await b) {}}) }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `await` expression cannot be used in function parameters - start: 23, end: 29

```

