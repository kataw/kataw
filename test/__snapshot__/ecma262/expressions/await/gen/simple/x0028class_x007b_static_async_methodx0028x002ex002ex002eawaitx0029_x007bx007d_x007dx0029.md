# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/gen/simple
> :: test: simple
> :: case: (class { static async method(...await) {} })
## Options

`````js
{}
`````
## Input

`````js
(class { static async method(...await) {} })
`````
## Output

### CST

```javascript
{
    "kind": 122,
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
                        "start": 1,
                        "end": 6
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
                                        "start": 8,
                                        "end": 15
                                    },
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 21
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
                                            "start": 21,
                                            "end": 28
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
                                                        "start": 29,
                                                        "end": 32
                                                    },
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "await",
                                                        "rawText": "await",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 32,
                                                        "end": 37
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "right": null,
                                                    "flags": 34,
                                                    "transformFlags": 4096,
                                                    "start": 29,
                                                    "end": 37
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 290,
                                            "transformFlags": 0,
                                            "start": 29,
                                            "end": 38
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
                                                "start": 40,
                                                "end": 40
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 38,
                                            "end": 41
                                        },
                                        "flags": 256,
                                        "transformFlags": 0,
                                        "start": 28,
                                        "end": 41
                                    },
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 41
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 41
                        },
                        "flags": 6,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 43
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 43
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 44
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "(class { static async method(...await) {} })",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `await` expression cannot be used in function parameters - start: 32, end: 37

```

