# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: class F { static get foo() {} static get foo() {} }
## Options

`````js
{}
`````
## Input

`````js
class F { static get foo() {} static get foo() {} }
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
                "text": "F",
                "rawText": "F",
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
                                "end": 16
                            },
                            "asyncKeyword": null,
                            "setKeyword": {
                                "kind": 16498,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 20
                            },
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 24
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 26
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
                                        "start": 28,
                                        "end": 28
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 26,
                                    "end": 29
                                },
                                "flags": 1024,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 29
                            },
                            "flags": 1024,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 29
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 36
                            },
                            "asyncKeyword": null,
                            "setKeyword": {
                                "kind": 16498,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 40
                            },
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 40,
                                    "end": 44
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 45,
                                    "end": 46
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
                                        "start": 48,
                                        "end": 48
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 46,
                                    "end": 49
                                },
                                "flags": 1024,
                                "transformFlags": 0,
                                "start": 44,
                                "end": 49
                            },
                            "flags": 1024,
                            "transformFlags": 0,
                            "start": 36,
                            "end": 49
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 49
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 51
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": false,
    "source": "class F { static get foo() {} static get foo() {} }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript
class F {
  static get foo() {}
  static get foo() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

