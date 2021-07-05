# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/super/gen/class-set
> :: test: class-set
> :: case: var f = function*() { super(); }
## Options

`````js
{}
`````
## Input

`````js
class C { set x(_) { var f = function*() { super(); } } }
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
                                                "kind": 155,
                                                "declareKeyword": null,
                                                "varKeyword": {
                                                    "kind": 37757002,
                                                    "flags": 80,
                                                    "start": 20,
                                                    "end": 24
                                                },
                                                "declarationList": {
                                                    "kind": 156,
                                                    "declarations": [
                                                        {
                                                            "kind": 157,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "f",
                                                                "rawText": "f",
                                                                "flags": 96,
                                                                "start": 24,
                                                                "end": 26
                                                            },
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 177,
                                                                "asyncKeyword": null,
                                                                "functionKeyword": {
                                                                    "kind": 37822554,
                                                                    "flags": 64,
                                                                    "start": 28,
                                                                    "end": 37
                                                                },
                                                                "asteriskToken": {
                                                                    "kind": 67143222,
                                                                    "flags": 64,
                                                                    "start": 37,
                                                                    "end": 38
                                                                },
                                                                "name": null,
                                                                "typeParameters": null,
                                                                "formalParameterList": {
                                                                    "kind": 214,
                                                                    "formalParameters": [],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 39,
                                                                    "end": 39
                                                                },
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
                                                                                        "start": 42,
                                                                                        "end": 48
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 32,
                                                                                        "start": 49,
                                                                                        "end": 49
                                                                                    },
                                                                                    "flags": 268435488,
                                                                                    "start": 42,
                                                                                    "end": 50
                                                                                },
                                                                                "flags": 16,
                                                                                "start": 42,
                                                                                "end": 51
                                                                            }
                                                                        ],
                                                                        "flags": 32,
                                                                        "start": 42,
                                                                        "end": 51
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 40,
                                                                    "end": 53
                                                                },
                                                                "returnType": null,
                                                                "flags": 288,
                                                                "start": 28,
                                                                "end": 53
                                                            },
                                                            "flags": 16,
                                                            "start": 24,
                                                            "end": 53
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 24,
                                                    "end": 53
                                                },
                                                "flags": 16,
                                                "start": 20,
                                                "end": 53
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 20,
                                        "end": 53
                                    },
                                    "flags": 32,
                                    "start": 18,
                                    "end": 55
                                },
                                "flags": 512,
                                "start": 15,
                                "end": 55
                            },
                            "flags": 512,
                            "start": 9,
                            "end": 55
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 55
                },
                "flags": 7,
                "start": 32,
                "end": 57
            },
            "flags": 16,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "class C { set x(_) { var f = function*() { super(); } } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 42, end: 49

```

