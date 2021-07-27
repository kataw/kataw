# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: function* gf() { class C { *yield() { } } }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; function* gf() { class C { *yield() { } } }
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
            "asteriskToken": {
                "kind": 201360950,
                "flags": 64,
                "transformFlags": 32,
                "start": 22,
                "end": 23
            },
            "name": {
                "kind": 134299649,
                "text": "gf",
                "rawText": "gf",
                "flags": 96,
                "transformFlags": 0,
                "start": 23,
                "end": 26
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 27,
                "end": 27
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
                                "start": 30,
                                "end": 36
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 38
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
                                            "asteriskToken": {
                                                "kind": 201360950,
                                                "flags": 64,
                                                "transformFlags": 32,
                                                "start": 40,
                                                "end": 42
                                            },
                                            "method": {
                                                "kind": 209,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "yield",
                                                    "rawText": "yield",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 42,
                                                    "end": 47
                                                },
                                                "typeParameters": null,
                                                "formalParameterList": {
                                                    "kind": 214,
                                                    "formalParameters": [],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "transformFlags": 0,
                                                    "start": 48,
                                                    "end": 49
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
                                                        "start": 51,
                                                        "end": 51
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 49,
                                                    "end": 53
                                                },
                                                "flags": 0,
                                                "transformFlags": 0,
                                                "start": 47,
                                                "end": 53
                                            },
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 40,
                                            "end": 53
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 40,
                                    "end": 53
                                },
                                "flags": 38,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 55
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 55
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 55
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 28,
                "end": 57
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 13,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "'use strict'; function* gf() { class C { *yield() { } } }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript

"'use strict'";
function *gf() {
  class C {
    *yield() {}
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

