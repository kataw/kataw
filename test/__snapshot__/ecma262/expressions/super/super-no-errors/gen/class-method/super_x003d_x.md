# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/super/super-no-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/super/super-no-errors/gen/class-method
> :: test: class-method
> :: case: super = x
## Options

`````js
{}
`````
## Input

`````js
class C { m() { foo(super = x); } }
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
                            "getKeyword": null,
                            "asteriskToken": null,
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
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "start": 15,
                                                        "end": 19
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 125,
                                                                "left": {
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 4259935,
                                                                        "flags": 96,
                                                                        "start": 20,
                                                                        "end": 25
                                                                    },
                                                                    "expression": {
                                                                        "kind": 16637,
                                                                        "text": "",
                                                                        "rawText": "",
                                                                        "flags": 64,
                                                                        "start": 25,
                                                                        "end": 25
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 20,
                                                                    "end": 25
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 4125,
                                                                    "flags": 96,
                                                                    "start": 25,
                                                                    "end": 27
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "start": 27,
                                                                    "end": 29
                                                                },
                                                                "flags": 32,
                                                                "start": 20,
                                                                "end": 29
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 20,
                                                        "end": 29
                                                    },
                                                    "flags": 268435488,
                                                    "start": 15,
                                                    "end": 30
                                                },
                                                "flags": 16,
                                                "start": 15,
                                                "end": 31
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 15,
                                        "end": 31
                                    },
                                    "flags": 32,
                                    "start": 13,
                                    "end": 33
                                },
                                "flags": 0,
                                "start": 11,
                                "end": 33
                            },
                            "flags": 0,
                            "start": 9,
                            "end": 33
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 33
                },
                "flags": 7,
                "start": 32,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "class C { m() { foo(super = x); } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 20, end: 27
✖ Dot property must be an identifier - start: 25, end: 27
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 25, end: 27

```

