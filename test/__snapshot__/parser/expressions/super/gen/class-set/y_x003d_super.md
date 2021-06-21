# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/super/gen/class-set
> :: test: class-set
> :: case: y = super
## Options

`````js
{}
`````
## Input

`````js
class C { set x(_) { y = super } }
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
                            "asteriskToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 64,
                                "start": 9,
                                "end": 13
                            },
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
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "start": 20,
                                                        "end": 22
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 22,
                                                        "end": 24
                                                    },
                                                    "right": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 225,
                                                            "superKeyword": {
                                                                "kind": 4259935,
                                                                "flags": 96,
                                                                "start": 24,
                                                                "end": 30
                                                            },
                                                            "flags": 96,
                                                            "start": 24,
                                                            "end": 30
                                                        },
                                                        "expression": {
                                                            "kind": 16637,
                                                            "text": "",
                                                            "rawText": "",
                                                            "flags": 64,
                                                            "start": 30,
                                                            "end": 30
                                                        },
                                                        "flags": 536870944,
                                                        "start": 24,
                                                        "end": 30
                                                    },
                                                    "flags": 32,
                                                    "start": 20,
                                                    "end": 30
                                                },
                                                "flags": 16,
                                                "start": 20,
                                                "end": 30
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 20,
                                        "end": 30
                                    },
                                    "flags": 32,
                                    "start": 18,
                                    "end": 32
                                },
                                "flags": 512,
                                "start": 15,
                                "end": 32
                            },
                            "flags": 512,
                            "start": 9,
                            "end": 32
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 32
                },
                "flags": 7,
                "start": 32,
                "end": 34
            },
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "class C { set x(_) { y = super } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 24, end: 32
✖ Dot property must be an identifier - start: 30, end: 32

```

