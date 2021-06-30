# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/function_declaration
> :: test: function declaration
> :: case: (class { static async method(...await) {} })
## Options

`````js
{}
`````
## Input

`````js
function not_gen() { (class { static async method(...await) {} }) }}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "start": 8,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 17,
                "end": 17
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
                                "kind": 121,
                                "expression": {
                                    "kind": 189,
                                    "decorators": null,
                                    "classKeyword": {
                                        "kind": 37822544,
                                        "flags": 64,
                                        "start": 22,
                                        "end": 27
                                    },
                                    "name": null,
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
                                                    "staticKeyword": {
                                                        "kind": 8388716,
                                                        "flags": 64,
                                                        "start": 29,
                                                        "end": 36
                                                    },
                                                    "asyncKeyword": {
                                                        "kind": 82031,
                                                        "flags": 64,
                                                        "start": 36,
                                                        "end": 42
                                                    },
                                                    "setKeyword": null,
                                                    "getKeyword": null,
                                                    "asteriskToken": null,
                                                    "method": {
                                                        "kind": 209,
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "method",
                                                            "rawText": "method",
                                                            "flags": 96,
                                                            "start": 42,
                                                            "end": 49
                                                        },
                                                        "typeParameters": null,
                                                        "formalParameterList": {
                                                            "kind": 214,
                                                            "formalParameters": [
                                                                {
                                                                    "kind": 281,
                                                                    "ellipsisToken": {
                                                                        "kind": 524302,
                                                                        "flags": 64,
                                                                        "start": 50,
                                                                        "end": 53
                                                                    },
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "await",
                                                                        "rawText": "await",
                                                                        "flags": 96,
                                                                        "start": 53,
                                                                        "end": 58
                                                                    },
                                                                    "optionalToken": null,
                                                                    "type": null,
                                                                    "right": null,
                                                                    "flags": 34,
                                                                    "start": 50,
                                                                    "end": 58
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 290,
                                                            "start": 50,
                                                            "end": 59
                                                        },
                                                        "returnType": null,
                                                        "contents": {
                                                            "kind": 216,
                                                            "functionStatementList": {
                                                                "kind": 217,
                                                                "directives": [],
                                                                "statements": [],
                                                                "flags": 32,
                                                                "start": 61,
                                                                "end": 61
                                                            },
                                                            "flags": 32,
                                                            "start": 59,
                                                            "end": 62
                                                        },
                                                        "flags": 256,
                                                        "start": 49,
                                                        "end": 62
                                                    },
                                                    "flags": 256,
                                                    "start": 36,
                                                    "end": 62
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 29,
                                            "end": 62
                                        },
                                        "flags": 27,
                                        "start": 32,
                                        "end": 64
                                    },
                                    "flags": 32,
                                    "start": 22,
                                    "end": 64
                                },
                                "flags": 32,
                                "start": 20,
                                "end": 65
                            },
                            "flags": 16,
                            "start": 20,
                            "end": 65
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 65
                },
                "flags": 32,
                "start": 18,
                "end": 67
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 67
        }
    ],
    "isModule": false,
    "source": "function not_gen() { (class { static async method(...await) {} }) }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 68
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `await` expression cannot be used in function parameters - start: 53, end: 58
✖ Declaration or statement expected - start: 67, end: 68

```

