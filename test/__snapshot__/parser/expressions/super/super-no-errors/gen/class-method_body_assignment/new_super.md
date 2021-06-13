# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/super/super-no-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/super/super-no-errors/gen/class-method_body_assignment
> :: test: class-method body assignment
> :: case: new super
## Options

`````js
{}
`````
## Input

`````js
class C { m() { k = new super; } }
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
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "m",
                                    "rawText": "m",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 11
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 12,
                                    "end": 13
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
                                                        "text": "k",
                                                        "rawText": "k",
                                                        "flags": 96,
                                                        "start": 15,
                                                        "end": 17
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 17,
                                                        "end": 19
                                                    },
                                                    "right": {
                                                        "kind": 210,
                                                        "newKeyword": {
                                                            "kind": 138477661,
                                                            "flags": 96,
                                                            "start": 19,
                                                            "end": 23
                                                        },
                                                        "expression": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 225,
                                                                "superKeyword": {
                                                                    "kind": 4259935,
                                                                    "flags": 96,
                                                                    "start": 23,
                                                                    "end": 29
                                                                },
                                                                "flags": 96,
                                                                "start": 23,
                                                                "end": 29
                                                            },
                                                            "expression": {
                                                                "kind": 16637,
                                                                "text": "",
                                                                "flags": 64,
                                                                "start": 29,
                                                                "end": 29
                                                            },
                                                            "flags": 536870944,
                                                            "start": 23,
                                                            "end": 29
                                                        },
                                                        "argumentList": null,
                                                        "flags": 96,
                                                        "start": 19,
                                                        "end": 29
                                                    },
                                                    "flags": 32,
                                                    "start": 15,
                                                    "end": 29
                                                },
                                                "flags": 16,
                                                "start": 15,
                                                "end": 30
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 15,
                                        "end": 30
                                    },
                                    "flags": 32,
                                    "start": 13,
                                    "end": 32
                                },
                                "flags": 0,
                                "start": 11,
                                "end": 32
                            },
                            "flags": 0,
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
    "source": "class C { m() { k = new super; } }",
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
✖ 'super' must be followed by an argument list or member access. - start: 23, end: 30
✖ Dot property must be an identifier - start: 29, end: 30

```

