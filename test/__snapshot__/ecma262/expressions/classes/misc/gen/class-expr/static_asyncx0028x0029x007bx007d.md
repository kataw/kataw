# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/misc/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/misc/gen/class-expr
> :: test: class-expr
> :: case: static async(){}
## Options

`````js
{}
`````
## Input

`````js
(class { static async(){} });
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
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "async",
                                            "rawText": "async",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 21
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 22,
                                            "end": 23
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
                                                "start": 24,
                                                "end": 24
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 25
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 25
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 25
                        },
                        "flags": 6,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 27
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 27
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 28
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "(class { static async(){} });",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
(class {
    static async() {}
  });
```

### Diagnostics

```javascript
✔ No errors
```

