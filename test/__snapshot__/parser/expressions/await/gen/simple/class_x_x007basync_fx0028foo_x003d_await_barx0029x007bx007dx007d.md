# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/expressions/await/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\await\gen\simple
> :: test: simple
> :: case: class x {async f(foo = await bar){}}
## Input

`````js
class x {async f(foo = await bar){}}
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
                                    "start": 14,
                                    "end": 16
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
                                                "start": 17,
                                                "end": 20
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 208,
                                                "awaitKeyword": {
                                                    "kind": 82196,
                                                    "flags": 64,
                                                    "start": 22,
                                                    "end": 28
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "bar",
                                                    "rawText": "bar",
                                                    "flags": 96,
                                                    "start": 28,
                                                    "end": 32
                                                },
                                                "flags": 32,
                                                "start": 22,
                                                "end": 32
                                            },
                                            "flags": 34,
                                            "start": 17,
                                            "end": 32
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 290,
                                    "start": 17,
                                    "end": 33
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
                                    "start": 33,
                                    "end": 35
                                },
                                "flags": 256,
                                "start": 16,
                                "end": 35
                            },
                            "flags": 256,
                            "start": 9,
                            "end": 35
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 35
                },
                "flags": 7,
                "start": 32,
                "end": 36
            },
            "flags": 16,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "class x {async f(foo = await bar){}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `await` expression cannot be used in function parameters - start: 22, end: 28

```

