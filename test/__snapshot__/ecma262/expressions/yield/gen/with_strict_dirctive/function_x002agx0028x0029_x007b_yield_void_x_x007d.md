# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: function *g() { yield void x }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; function *g() { yield void x }
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
                "end": 24
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "transformFlags": 0,
                "start": 24,
                "end": 25
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 26,
                "end": 26
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 35
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 138477615,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 35,
                                        "end": 40
                                    },
                                    "operand": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 40,
                                        "end": 42
                                    },
                                    "flags": 32,
                                    "transformFlags": 16384,
                                    "start": 35,
                                    "end": 42
                                },
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 29,
                                "end": 42
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 29,
                            "end": 42
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 42
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 27,
                "end": 44
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 13,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "'use strict'; function *g() { yield void x }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

"'use strict'";
function *g() {
  yield void x;
}
```

### Diagnostics

```javascript
✔ No errors
```

