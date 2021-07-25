# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/function_generator
> :: test: function generator
> :: case: (class { static async method(...await) {} })
## Options

`````js
{}
`````
## Input

`````js
function * gen() { function not_gen() { (class { static async method(...await) {} }) }}
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
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "transformFlags": 32,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "transformFlags": 0,
                "start": 10,
                "end": 14
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 15,
                "end": 15
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 27
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 35
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 36
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
                                                        "transformFlags": 0,
                                                        "start": 41,
                                                        "end": 46
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
                                                                        "transformFlags": 0,
                                                                        "start": 48,
                                                                        "end": 55
                                                                    },
                                                                    "asyncKeyword": {
                                                                        "kind": 82031,
                                                                        "flags": 64,
                                                                        "transformFlags": 0,
                                                                        "start": 55,
                                                                        "end": 61
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
                                                                            "transformFlags": 0,
                                                                            "start": 61,
                                                                            "end": 68
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
                                                                                        "transformFlags": 0,
                                                                                        "start": 69,
                                                                                        "end": 72
                                                                                    },
                                                                                    "left": {
                                                                                        "kind": 134299649,
                                                                                        "text": "await",
                                                                                        "rawText": "await",
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 72,
                                                                                        "end": 77
                                                                                    },
                                                                                    "optionalToken": null,
                                                                                    "type": null,
                                                                                    "right": null,
                                                                                    "flags": 34,
                                                                                    "transformFlags": 4096,
                                                                                    "start": 69,
                                                                                    "end": 77
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 290,
                                                                            "transformFlags": 0,
                                                                            "start": 69,
                                                                            "end": 78
                                                                        },
                                                                        "returnType": null,
                                                                        "contents": {
                                                                            "kind": 216,
                                                                            "functionStatementList": {
                                                                                "kind": 217,
                                                                                "directives": [],
                                                                                "statements": [],
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 80,
                                                                                "end": 80
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 78,
                                                                            "end": 81
                                                                        },
                                                                        "flags": 256,
                                                                        "transformFlags": 0,
                                                                        "start": 68,
                                                                        "end": 81
                                                                    },
                                                                    "flags": 256,
                                                                    "transformFlags": 0,
                                                                    "start": 55,
                                                                    "end": 81
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 48,
                                                            "end": 81
                                                        },
                                                        "flags": 46,
                                                        "transformFlags": 0,
                                                        "start": 32,
                                                        "end": 83
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 41,
                                                    "end": 83
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 39,
                                                "end": 84
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 39,
                                            "end": 84
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 84
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 86
                            },
                            "returnType": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 86
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 86
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 16,
                "end": 87
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 87
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { (class { static async method(...await) {} }) }}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 87
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `await` expression cannot be used in function parameters - start: 72, end: 77

```

