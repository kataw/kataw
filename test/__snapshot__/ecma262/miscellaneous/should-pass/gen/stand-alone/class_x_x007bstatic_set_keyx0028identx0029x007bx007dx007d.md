# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: class x {static set key(ident){}}
## Options

`````js
{}
`````
## Input

`````js
class x {static set key(ident){}}
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
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 19
                            },
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "key",
                                    "rawText": "key",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 23
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "ident",
                                            "rawText": "ident",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 24,
                                            "end": 29
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 608,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 30
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
                                        "start": 31,
                                        "end": 31
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 30,
                                    "end": 32
                                },
                                "flags": 512,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 32
                            },
                            "flags": 512,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 32
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 32
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 33
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "class x {static set key(ident){}}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

class x {
  static set key(ident) {}
}
```

### Diagnostics

```javascript
✔ No errors
```

