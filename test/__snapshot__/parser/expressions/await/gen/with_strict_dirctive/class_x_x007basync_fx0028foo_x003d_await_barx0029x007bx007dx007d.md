# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: class x {async f(foo = await bar){}}
## Options

`````js
{}
`````
## Input

`````js
'use strict'; class x {async f(foo = await bar){}}
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
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 13,
                "end": 19
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 19,
                "end": 21
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
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 23,
                                "end": 28
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 28,
                                    "end": 30
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
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 31,
                                                "end": 34
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 208,
                                                "awaitKeyword": {
                                                    "kind": 82196,
                                                    "flags": 64,
                                                    "start": 36,
                                                    "end": 42
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "bar",
                                                    "rawText": "bar",
                                                    "flags": 96,
                                                    "start": 42,
                                                    "end": 46
                                                },
                                                "flags": 32,
                                                "start": 36,
                                                "end": 46
                                            },
                                            "flags": 34,
                                            "start": 31,
                                            "end": 46
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 290,
                                    "start": 31,
                                    "end": 47
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 48,
                                        "end": 48
                                    },
                                    "flags": 32,
                                    "start": 47,
                                    "end": 49
                                },
                                "flags": 256,
                                "start": 30,
                                "end": 49
                            },
                            "flags": 256,
                            "start": 23,
                            "end": 49
                        }
                    ],
                    "flags": 32,
                    "start": 23,
                    "end": 49
                },
                "flags": 21,
                "start": 32,
                "end": 50
            },
            "flags": 16,
            "start": 13,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "'use strict'; class x {async f(foo = await bar){}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `await` expression cannot be used in function parameters - start: 36, end: 42

```

