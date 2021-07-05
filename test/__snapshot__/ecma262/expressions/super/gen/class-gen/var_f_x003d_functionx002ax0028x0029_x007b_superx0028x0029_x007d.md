# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/super/gen/class-gen
> :: test: class-gen
> :: case: var f = function*() { super(); }
## Options

`````js
{}
`````
## Input

`````js
class C { *method() { var f = function*() { super(); } } }
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
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 9,
                                "end": 11
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 96,
                                    "start": 11,
                                    "end": 17
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 18,
                                    "end": 19
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
                                                    "start": 21,
                                                    "end": 25
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
                                                                "start": 25,
                                                                "end": 27
                                                            },
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 177,
                                                                "asyncKeyword": null,
                                                                "functionKeyword": {
                                                                    "kind": 37822554,
                                                                    "flags": 64,
                                                                    "start": 29,
                                                                    "end": 38
                                                                },
                                                                "asteriskToken": {
                                                                    "kind": 67143222,
                                                                    "flags": 64,
                                                                    "start": 38,
                                                                    "end": 39
                                                                },
                                                                "name": null,
                                                                "typeParameters": null,
                                                                "formalParameterList": {
                                                                    "kind": 214,
                                                                    "formalParameters": [],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 40,
                                                                    "end": 40
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
                                                                                        "start": 43,
                                                                                        "end": 49
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 32,
                                                                                        "start": 50,
                                                                                        "end": 50
                                                                                    },
                                                                                    "flags": 268435488,
                                                                                    "start": 43,
                                                                                    "end": 51
                                                                                },
                                                                                "flags": 16,
                                                                                "start": 43,
                                                                                "end": 52
                                                                            }
                                                                        ],
                                                                        "flags": 32,
                                                                        "start": 43,
                                                                        "end": 52
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 41,
                                                                    "end": 54
                                                                },
                                                                "returnType": null,
                                                                "flags": 288,
                                                                "start": 29,
                                                                "end": 54
                                                            },
                                                            "flags": 16,
                                                            "start": 25,
                                                            "end": 54
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 25,
                                                    "end": 54
                                                },
                                                "flags": 16,
                                                "start": 21,
                                                "end": 54
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 21,
                                        "end": 54
                                    },
                                    "flags": 32,
                                    "start": 19,
                                    "end": 56
                                },
                                "flags": 0,
                                "start": 17,
                                "end": 56
                            },
                            "flags": 0,
                            "start": 9,
                            "end": 56
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 56
                },
                "flags": 7,
                "start": 32,
                "end": 58
            },
            "flags": 16,
            "start": 0,
            "end": 58
        }
    ],
    "isModule": false,
    "source": "class C { *method() { var f = function*() { super(); } } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 43, end: 50

```

