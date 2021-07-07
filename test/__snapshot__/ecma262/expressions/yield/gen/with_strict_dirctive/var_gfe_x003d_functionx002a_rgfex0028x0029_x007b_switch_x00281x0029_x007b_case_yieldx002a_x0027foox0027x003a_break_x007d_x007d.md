# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 13,
                "end": 17
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "gfe",
                            "rawText": "gfe",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 21
                        },
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 32
                            },
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "transformFlags": 32,
                                "start": 32,
                                "end": 33
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "rgfe",
                                "rawText": "rgfe",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 38
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 39
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
                                                "transformFlags": 0,
                                                "start": 42,
                                                "end": 49
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 51,
                                                "end": 52
                                            },
                                            "caseBlock": {
                                                "kind": 152,
                                                "clauses": [
                                                    {
                                                        "kind": 175,
                                                        "caseKeyword": {
                                                            "kind": 4194382,
                                                            "flags": 80,
                                                            "transformFlags": 0,
                                                            "start": 55,
                                                            "end": 60
                                                        },
                                                        "expression": {
                                                            "kind": 229,
                                                            "yieldKeyword": {
                                                                "kind": 8454253,
                                                                "flags": 64,
                                                                "transformFlags": 0,
                                                                "start": 60,
                                                                "end": 66
                                                            },
                                                            "delegate": true,
                                                            "asteriskToken": {
                                                                "kind": 67143222,
                                                                "flags": 64,
                                                                "transformFlags": 32,
                                                                "start": 66,
                                                                "end": 67
                                                            },
                                                            "expression": {
                                                                "kind": 201392131,
                                                                "text": "foo",
                                                                "rawText": "'foo'",
                                                                "flags": 4194400,
                                                                "transformFlags": 0,
                                                                "start": 67,
                                                                "end": 73
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 60,
                                                            "end": 73
                                                        },
                                                        "colonToken": {
                                                            "kind": 21,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 73,
                                                            "end": 74
                                                        },
                                                        "statements": [
                                                            {
                                                                "kind": 150,
                                                                "breakKeyword": {
                                                                    "kind": 37757005,
                                                                    "flags": 80,
                                                                    "transformFlags": 0,
                                                                    "start": 74,
                                                                    "end": 80
                                                                },
                                                                "label": null,
                                                                "flags": 16,
                                                                "transformFlags": 0,
                                                                "start": 74,
                                                                "end": 81
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 55,
                                                        "end": 81
                                                    }
                                                ],
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 55,
                                                "end": 81
                                            },
                                            "flags": 80,
                                            "transformFlags": 0,
                                            "start": 42,
                                            "end": 83
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 42,
                                    "end": 83
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 85
                            },
                            "returnType": null,
                            "flags": 288,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 85
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 17,
                        "end": 85
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 17,
                "end": 85
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 85
        }
    ],
    "isModule": false,
    "source": "'use strict'; var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 85
}
```

### Printed

```javascript

"'use strict'";
var gfe = function *rgfe() {
    switch (1) {
      case yield* "'foo'":
        break ;
    }
  };
```

### Diagnostics

```javascript
✔ No errors
```

