# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/super/gen/class-set
> :: test: class-set
> :: case: class C { set x(_) { super(
## Options

`````js
{}
`````
## Input

`````js
class C { set x(_) { class C { set x(_) { super( } }
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
                "text": "C",
                "rawText": "C",
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
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 64,
                                "start": 9,
                                "end": 13
                            },
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 15
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "_",
                                            "rawText": "_",
                                            "flags": 96,
                                            "start": 16,
                                            "end": 17
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 608,
                                    "start": 16,
                                    "end": 18
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 178,
                                                "declareKeyword": null,
                                                "decorators": null,
                                                "classKeyword": {
                                                    "kind": 37822544,
                                                    "flags": 80,
                                                    "start": 20,
                                                    "end": 26
                                                },
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "C",
                                                    "rawText": "C",
                                                    "flags": 96,
                                                    "start": 26,
                                                    "end": 28
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
                                                                "staticKeyword": null,
                                                                "asyncKeyword": null,
                                                                "setKeyword": null,
                                                                "getKeyword": {
                                                                    "kind": 16499,
                                                                    "flags": 64,
                                                                    "start": 30,
                                                                    "end": 34
                                                                },
                                                                "asteriskToken": null,
                                                                "method": {
                                                                    "kind": 209,
                                                                    "name": {
                                                                        "kind": 134299649,
                                                                        "text": "x",
                                                                        "rawText": "x",
                                                                        "flags": 96,
                                                                        "start": 34,
                                                                        "end": 36
                                                                    },
                                                                    "typeParameters": null,
                                                                    "formalParameterList": {
                                                                        "kind": 214,
                                                                        "formalParameters": [
                                                                            {
                                                                                "kind": 134299649,
                                                                                "text": "_",
                                                                                "rawText": "_",
                                                                                "flags": 96,
                                                                                "start": 37,
                                                                                "end": 38
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 608,
                                                                        "start": 37,
                                                                        "end": 39
                                                                    },
                                                                    "returnType": null,
                                                                    "contents": {
                                                                        "kind": 216,
                                                                        "functionStatementList": {
                                                                            "kind": 217,
                                                                            "directives": [],
                                                                            "statements": [
                                                                                {
                                                                                    "kind": 120,
                                                                                    "expression": {
                                                                                        "kind": 131,
                                                                                        "expression": {
                                                                                            "kind": 4259935,
                                                                                            "flags": 96,
                                                                                            "start": 41,
                                                                                            "end": 47
                                                                                        },
                                                                                        "argumentList": {
                                                                                            "kind": 256,
                                                                                            "elements": [],
                                                                                            "trailingComma": false,
                                                                                            "flags": 32,
                                                                                            "start": 48,
                                                                                            "end": 48
                                                                                        },
                                                                                        "flags": 268435488,
                                                                                        "start": 41,
                                                                                        "end": 48
                                                                                    },
                                                                                    "flags": 16,
                                                                                    "start": 41,
                                                                                    "end": 48
                                                                                }
                                                                            ],
                                                                            "flags": 32,
                                                                            "start": 41,
                                                                            "end": 48
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 39,
                                                                        "end": 50
                                                                    },
                                                                    "flags": 512,
                                                                    "start": 36,
                                                                    "end": 50
                                                                },
                                                                "flags": 512,
                                                                "start": 30,
                                                                "end": 50
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "start": 30,
                                                        "end": 50
                                                    },
                                                    "flags": 28,
                                                    "start": 32,
                                                    "end": 52
                                                },
                                                "flags": 16,
                                                "start": 20,
                                                "end": 52
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 20,
                                        "end": 52
                                    },
                                    "flags": 32,
                                    "start": 18,
                                    "end": 52
                                },
                                "flags": 512,
                                "start": 15,
                                "end": 52
                            },
                            "flags": 512,
                            "start": 9,
                            "end": 52
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 52
                },
                "flags": 7,
                "start": 32,
                "end": 52
            },
            "flags": 16,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "class C { set x(_) { class C { set x(_) { super( } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 41, end: 48
✖ Expected a ')' to match the '(' token here - start: 49, end: 50
✖ The parser expected to find a '}' to match the '{' token here - start: 51, end: 52

```

