# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: class x {static set key(ident){}}
## Input

`````js
{ class x {static set key(ident){}} }
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
                        "kind": 178,
                        "declareKeyword": null,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 80,
                            "start": 1,
                            "end": 7
                        },
                        "name": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 7,
                            "end": 9
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
                                        "staticKeyword": {
                                            "kind": 8388716,
                                            "flags": 64,
                                            "start": 11,
                                            "end": 17
                                        },
                                        "asyncKeyword": null,
                                        "setKeyword": null,
                                        "getKeyword": {
                                            "kind": 16499,
                                            "flags": 64,
                                            "start": 17,
                                            "end": 21
                                        },
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "key",
                                                "rawText": "key",
                                                "flags": 96,
                                                "start": 21,
                                                "end": 25
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "ident",
                                                        "rawText": "ident",
                                                        "flags": 96,
                                                        "start": 26,
                                                        "end": 31
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 608,
                                                "start": 26,
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
                                                    "start": 33,
                                                    "end": 33
                                                },
                                                "flags": 32,
                                                "start": 32,
                                                "end": 34
                                            },
                                            "flags": 512,
                                            "start": 25,
                                            "end": 34
                                        },
                                        "flags": 512,
                                        "start": 17,
                                        "end": 34
                                    }
                                ],
                                "flags": 32,
                                "start": 11,
                                "end": 34
                            },
                            "flags": 9,
                            "start": 32,
                            "end": 35
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 35
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "{ class x {static set key(ident){}} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

{
  class x {
    static set static key(ident) {}
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

