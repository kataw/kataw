# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/simple
> :: test: simple
> :: case: class x {async *f(foo = [{m: t(await bar)}]){}}
## Options

`````js
{}
`````
## Input

`````js
class x {async *f(foo = [{m: t(await bar)}]){}}
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
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
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
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 14,
                                "end": 16
                            },
                            "staticKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 9,
                                "end": 14
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
                                    "start": 16,
                                    "end": 17
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 18,
                                                "end": 21
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [
                                                        {
                                                            "kind": 220,
                                                            "propertyList": {
                                                                "kind": 218,
                                                                "properties": [
                                                                    {
                                                                        "kind": 219,
                                                                        "asteriskToken": null,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "m",
                                                                            "rawText": "m",
                                                                            "flags": 96,
                                                                            "start": 26,
                                                                            "end": 27
                                                                        },
                                                                        "right": {
                                                                            "kind": 131,
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "t",
                                                                                "rawText": "t",
                                                                                "flags": 96,
                                                                                "start": 28,
                                                                                "end": 30
                                                                            },
                                                                            "argumentList": {
                                                                                "kind": 256,
                                                                                "elements": [
                                                                                    {
                                                                                        "kind": 208,
                                                                                        "awaitKeyword": {
                                                                                            "kind": 82196,
                                                                                            "flags": 64,
                                                                                            "start": 31,
                                                                                            "end": 36
                                                                                        },
                                                                                        "expression": {
                                                                                            "kind": 134299649,
                                                                                            "text": "bar",
                                                                                            "rawText": "bar",
                                                                                            "flags": 96,
                                                                                            "start": 36,
                                                                                            "end": 40
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "start": 31,
                                                                                        "end": 40
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "start": 31,
                                                                                "end": 40
                                                                            },
                                                                            "flags": 268435488,
                                                                            "start": 26,
                                                                            "end": 41
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 26,
                                                                        "end": 41
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 16,
                                                                "start": 26,
                                                                "end": 41
                                                            },
                                                            "flags": 48,
                                                            "start": 25,
                                                            "end": 42
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 25,
                                                    "end": 42
                                                },
                                                "flags": 32,
                                                "start": 23,
                                                "end": 43
                                            },
                                            "flags": 34,
                                            "start": 18,
                                            "end": 43
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 418,
                                    "start": 18,
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
                                        "start": 45,
                                        "end": 45
                                    },
                                    "flags": 32,
                                    "start": 44,
                                    "end": 46
                                },
                                "flags": 384,
                                "start": 17,
                                "end": 46
                            },
                            "flags": 384,
                            "start": 9,
                            "end": 46
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 46
                },
                "flags": 7,
                "start": 32,
                "end": 47
            },
            "flags": 16,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "class x {async *f(foo = [{m: t(await bar)}]){}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `await` expression cannot be used in function parameters - start: 31, end: 36

```

