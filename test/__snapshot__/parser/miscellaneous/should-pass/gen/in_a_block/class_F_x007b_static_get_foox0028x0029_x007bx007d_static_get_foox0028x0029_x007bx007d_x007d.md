# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: class F { static get foo() {} static get foo() {} }
## Input

`````js
{ class F { static get foo() {} static get foo() {} } }
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
                            "text": "F",
                            "rawText": "F",
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
                                            "end": 18
                                        },
                                        "asyncKeyword": null,
                                        "setKeyword": {
                                            "kind": 16498,
                                            "flags": 64,
                                            "start": 18,
                                            "end": 22
                                        },
                                        "getKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 22,
                                                "end": 26
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 1024,
                                                "start": 27,
                                                "end": 28
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 30,
                                                    "end": 30
                                                },
                                                "flags": 32,
                                                "start": 28,
                                                "end": 31
                                            },
                                            "flags": 1024,
                                            "start": 26,
                                            "end": 31
                                        },
                                        "flags": 1024,
                                        "start": 18,
                                        "end": 31
                                    },
                                    {
                                        "kind": 278,
                                        "declareToken": null,
                                        "decorators": null,
                                        "generatorToken": null,
                                        "staticKeyword": {
                                            "kind": 8388716,
                                            "flags": 64,
                                            "start": 31,
                                            "end": 38
                                        },
                                        "asyncKeyword": null,
                                        "setKeyword": {
                                            "kind": 16498,
                                            "flags": 64,
                                            "start": 38,
                                            "end": 42
                                        },
                                        "getKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 42,
                                                "end": 46
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 1024,
                                                "start": 47,
                                                "end": 48
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 50,
                                                    "end": 50
                                                },
                                                "flags": 32,
                                                "start": 48,
                                                "end": 51
                                            },
                                            "flags": 1024,
                                            "start": 46,
                                            "end": 51
                                        },
                                        "flags": 1024,
                                        "start": 38,
                                        "end": 51
                                    }
                                ],
                                "flags": 32,
                                "start": 11,
                                "end": 51
                            },
                            "flags": 9,
                            "start": 32,
                            "end": 53
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 53
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 53
            },
            "flags": 16,
            "start": 0,
            "end": 55
        }
    ],
    "isModule": false,
    "source": "{ class F { static get foo() {} static get foo() {} } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 55
}
```

### Printed

```javascript

{
  class F {
    static get static foo() {}
    static get static foo() {}
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

