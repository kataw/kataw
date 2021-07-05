# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/super/super-no-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/super/super-no-errors/gen/class-method
> :: test: class-method
> :: case: new new super()
## Options

`````js
{}
`````
## Input

`````js
class C { m() { foo(new new super()); } }
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
                                                                "kind": 210,
                                                                "newKeyword": {
                                                                    "kind": 138477661,
                                                                    "flags": 96,
                                                                    "start": 20,
                                                                    "end": 23
                                                                },
                                                                "expression": {
                                                                    "kind": 210,
                                                                    "newKeyword": {
                                                                        "kind": 138477661,
                                                                        "flags": 96,
                                                                        "start": 23,
                                                                        "end": 27
                                                                    },
                                                                    "expression": {
                                                                        "kind": 4259935,
                                                                        "flags": 96,
                                                                        "start": 27,
                                                                        "end": 33
                                                                    },
                                                                    "argumentList": {
                                                                        "kind": 256,
                                                                        "elements": [],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 34,
                                                                        "end": 34
                                                                    },
                                                                    "flags": 96,
                                                                    "start": 23,
                                                                    "end": 35
                                                                },
                                                                "argumentList": null,
                                                                "flags": 96,
                                                                "start": 20,
                                                                "end": 35
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 20,
                                                        "end": 35
                                                    },
                                                    "flags": 268435488,
                                                    "start": 15,
                                                    "end": 36
                                                },
                                                "flags": 16,
                                                "start": 15,
                                                "end": 37
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 15,
                                        "end": 37
                                    },
                                    "flags": 32,
                                    "start": 13,
                                    "end": 39
                                },
                                "flags": 0,
                                "start": 11,
                                "end": 39
                            },
                            "flags": 0,
                            "start": 9,
                            "end": 39
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 39
                },
                "flags": 7,
                "start": 32,
                "end": 41
            },
            "flags": 16,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "class C { m() { foo(new new super()); } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 27, end: 34

```

