# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/class-fields/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/class-fields/gen/expression
> :: test: expression
> :: case: set #arguments(test) {}
## Options

`````js
{}
`````
## Input

`````js
class C extends Base { set #arguments(test) {} }
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
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 15
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "Base",
                        "rawText": "Base",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 20
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 20
                },
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
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 26
                            },
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 67191035,
                                    "text": "#arguments",
                                    "rawText": "#arguments",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 26,
                                    "end": 37
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "test",
                                            "rawText": "test",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 38,
                                            "end": 42
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 608,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 43
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
                                        "start": 45,
                                        "end": 45
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 43,
                                    "end": 46
                                },
                                "flags": 512,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 46
                            },
                            "flags": 512,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 46
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 46
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 48
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "class C extends Base { set #arguments(test) {} }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
class C extends Base {
  set #arguments(test) {}
}
```

### Diagnostics

```javascript
✔ No errors
```

