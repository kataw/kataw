# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/special_keys/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/special_keys/gen/as_async_generator_in_class
> :: test: as async generator in class
> :: case: debugger
## Options

`````js
{}
`````
## Input

`````js
class x {async * debugger(){}}
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
                "text": "x",
                "rawText": "x",
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
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 9,
                                "end": 14
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 14,
                                "end": 16
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "debugger",
                                    "rawText": "debugger",
                                    "flags": 96,
                                    "start": 16,
                                    "end": 25
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 384,
                                    "start": 26,
                                    "end": 27
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 28,
                                        "end": 28
                                    },
                                    "flags": 32,
                                    "start": 27,
                                    "end": 29
                                },
                                "flags": 384,
                                "start": 25,
                                "end": 29
                            },
                            "flags": 384,
                            "start": 9,
                            "end": 29
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 29
                },
                "flags": 7,
                "start": 32,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "class x {async * debugger(){}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

class x {
  async * debugger(){}
}
```

### Diagnostics

```javascript
✔ No errors
```

