# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: function f() { class C { yield() { } } }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; function f() { class C { yield() { } } }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 13,
                "end": 22
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 22,
                "end": 24
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 25,
                "end": 25
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
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
                                "start": 28,
                                "end": 34
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 36
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
                                            "asyncKeyword": null,
                                            "setKeyword": null,
                                            "getKeyword": null,
                                            "asteriskToken": null,
                                            "method": {
                                                "kind": 209,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "yield",
                                                    "rawText": "yield",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 38,
                                                    "end": 44
                                                },
                                                "typeParameters": null,
                                                "formalParameterList": {
                                                    "kind": 214,
                                                    "formalParameters": [],
                                                    "trailingComma": false,
                                                    "flags": 0,
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
                                                    "end": 50
                                                },
                                                "flags": 0,
                                                "transformFlags": 0,
                                                "start": 44,
                                                "end": 50
                                            },
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 38,
                                            "end": 50
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 50
                                },
                                "flags": 36,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 52
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 52
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 52
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 26,
                "end": 54
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "'use strict'; function f() { class C { yield() { } } }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

"'use strict'";
function f() {
  class C {
    yield() {}
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

