# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/classes/special_keys/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/classes/special_keys/gen/as_async_generator_in_class
> :: test: as async generator in class
> :: case: catch
## Options

`````js
{}
`````
## Input

`````js
class x {async * catch(){}}
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
                            "staticKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 14
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "transformFlags": 32,
                                "start": 14,
                                "end": 16
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "catch",
                                    "rawText": "catch",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 22
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 384,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 24
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
                                        "start": 25,
                                        "end": 25
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 26
                                },
                                "flags": 384,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 26
                            },
                            "flags": 384,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 26
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 26
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "class x {async * catch(){}}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
class x {
  async *catch() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

