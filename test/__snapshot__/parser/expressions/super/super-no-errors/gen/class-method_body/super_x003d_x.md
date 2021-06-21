# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/super/super-no-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/super/super-no-errors/gen/class-method_body
> :: test: class-method body
> :: case: super = x
## Options

`````js
{}
`````
## Input

`````js
class C { m() { super = x; }
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
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
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
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 225,
                                                            "superKeyword": {
                                                                "kind": 4259935,
                                                                "flags": 96,
                                                                "start": 15,
                                                                "end": 21
                                                            },
                                                            "flags": 96,
                                                            "start": 15,
                                                            "end": 21
                                                        },
                                                        "expression": {
                                                            "kind": 16637,
                                                            "text": "",
                                                            "rawText": "",
                                                            "flags": 64,
                                                            "start": 21,
                                                            "end": 21
                                                        },
                                                        "flags": 536870944,
                                                        "start": 15,
                                                        "end": 21
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 21,
                                                        "end": 23
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 23,
                                                        "end": 25
                                                    },
                                                    "flags": 32,
                                                    "start": 15,
                                                    "end": 25
                                                },
                                                "flags": 16,
                                                "start": 15,
                                                "end": 26
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 15,
                                        "end": 26
                                    },
                                    "flags": 32,
                                    "start": 13,
                                    "end": 28
                                },
                                "flags": 0,
                                "start": 11,
                                "end": 28
                            },
                            "flags": 0,
                            "start": 9,
                            "end": 28
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 28
                },
                "flags": 7,
                "start": 32,
                "end": 28
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "class C { m() { super = x; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 15, end: 23
✖ Dot property must be an identifier - start: 21, end: 23
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 21, end: 23
✖ The parser expected to find a '}' to match the '{' token here - start: 27, end: 28

```

