# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: function* gf() { +yield; }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; function* gf() { +yield; }
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
                "kind": 67143222,
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
                            "kind": 120,
                            "expression": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 30,
                                    "end": 32
                                },
                                "operand": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 37
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": null,
                                    "flags": 32,
                                    "transformFlags": 4096,
                                    "start": 32,
                                    "end": 37
                                },
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 30,
                                "end": 37
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 30,
                            "end": 38
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 38
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 28,
                "end": 40
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 13,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "'use strict'; function* gf() { +yield; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

"'use strict'";
function *gf() {
  +yield ;
}
```

### Diagnostics

```javascript
✔ No errors
```

