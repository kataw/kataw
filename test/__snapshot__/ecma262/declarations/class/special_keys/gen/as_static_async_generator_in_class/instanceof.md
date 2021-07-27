# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/class/special_keys/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/class/special_keys/gen/as_static_async_generator_in_class
> :: test: as static async generator in class
> :: case: instanceof
## Options

`````js
{}
`````
## Input

`````js
class x {static async * instanceof(){}}
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
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
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
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 9,
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
                            "asteriskToken": {
                                "kind": 201360950,
                                "flags": 64,
                                "transformFlags": 32,
                                "start": 21,
                                "end": 23
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "instanceof",
                                    "rawText": "instanceof",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 34
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 384,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 36
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
                                        "start": 37,
                                        "end": 37
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 38
                                },
                                "flags": 384,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 38
                            },
                            "flags": 384,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 38
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 38
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 39
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "class x {static async * instanceof(){}}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
class x {
  static async *instanceof() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

