# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/async-await-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/async-await-errors/gen/with_strict_directive
> :: test: with strict directive
> :: case: class C {}; class C2 extends C { async constructor() {} }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; class C {}; class C2 extends C { async constructor() {} }
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
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "transformFlags": 0,
                "start": 13,
                "end": 19
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "transformFlags": 0,
                "start": 19,
                "end": 21
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 23
                },
                "flags": 21,
                "transformFlags": 0,
                "start": 32,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 24
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 24,
            "end": 25
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "transformFlags": 0,
                "start": 25,
                "end": 31
            },
            "name": {
                "kind": 134299649,
                "text": "C2",
                "rawText": "C2",
                "flags": 96,
                "transformFlags": 0,
                "start": 31,
                "end": 34
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
                        "start": 34,
                        "end": 42
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 42,
                        "end": 44
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 42,
                    "end": 44
                },
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
                                "start": 46,
                                "end": 52
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 52,
                                    "end": 64
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2304,
                                    "transformFlags": 0,
                                    "start": 65,
                                    "end": 66
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
                                        "start": 68,
                                        "end": 68
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 66,
                                    "end": 69
                                },
                                "flags": 2304,
                                "transformFlags": 0,
                                "start": 64,
                                "end": 69
                            },
                            "flags": 2304,
                            "transformFlags": 0,
                            "start": 46,
                            "end": 69
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 46,
                    "end": 69
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 32,
                "end": 71
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 25,
            "end": 71
        }
    ],
    "isModule": false,
    "source": "'use strict'; class C {}; class C2 extends C { async constructor() {} }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 71
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Class constructor may not be a accessor - start: 64, end: 65

```

