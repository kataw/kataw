# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: function* gf() { switch (1) { case yield* 'foo': break; } }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; function* gf() { switch (1) { case yield* 'foo': break; } }
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
                "start": 13,
                "end": 22
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 22,
                "end": 23
            },
            "name": {
                "kind": 134299649,
                "text": "gf",
                "rawText": "gf",
                "flags": 96,
                "start": 23,
                "end": 26
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
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
                            "kind": 160,
                            "switchKeyword": {
                                "kind": 37757024,
                                "flags": 80,
                                "start": 30,
                                "end": 37
                            },
                            "expression": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 39,
                                "end": 40
                            },
                            "caseBlock": {
                                "kind": 152,
                                "clauses": [
                                    {
                                        "kind": 175,
                                        "caseKeyword": {
                                            "kind": 4194382,
                                            "flags": 80,
                                            "start": 43,
                                            "end": 48
                                        },
                                        "expression": {
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 64,
                                                "start": 48,
                                                "end": 54
                                            },
                                            "delegate": true,
                                            "asteriskToken": {
                                                "kind": 67143222,
                                                "flags": 64,
                                                "start": 54,
                                                "end": 55
                                            },
                                            "expression": {
                                                "kind": 201392131,
                                                "text": "foo",
                                                "rawText": "'foo'",
                                                "flags": 4194400,
                                                "start": 55,
                                                "end": 61
                                            },
                                            "flags": 32,
                                            "start": 48,
                                            "end": 61
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 64,
                                            "start": 61,
                                            "end": 62
                                        },
                                        "statements": [
                                            {
                                                "kind": 150,
                                                "breakKeyword": {
                                                    "kind": 37757005,
                                                    "flags": 80,
                                                    "start": 62,
                                                    "end": 68
                                                },
                                                "label": null,
                                                "flags": 16,
                                                "start": 62,
                                                "end": 69
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 43,
                                        "end": 69
                                    }
                                ],
                                "flags": 16,
                                "start": 41,
                                "end": 71
                            },
                            "flags": 80,
                            "start": 30,
                            "end": 71
                        }
                    ],
                    "flags": 32,
                    "start": 30,
                    "end": 71
                },
                "flags": 32,
                "start": 28,
                "end": 73
            },
            "returnType": null,
            "flags": 272,
            "start": 13,
            "end": 73
        }
    ],
    "isModule": false,
    "source": "'use strict'; function* gf() { switch (1) { case yield* 'foo': break; } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 73
}
```

### Printed

```javascript

'\'use strict\'';
function* gf() { switch (1) {
  case yield* '\'foo\'': 
    break;
} }

```

### Diagnostics

```javascript
✔ No errors
```

