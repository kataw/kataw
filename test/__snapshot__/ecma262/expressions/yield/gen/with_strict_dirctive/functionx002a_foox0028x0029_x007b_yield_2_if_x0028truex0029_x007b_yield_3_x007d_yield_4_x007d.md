# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
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
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 23,
                "end": 27
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 28,
                "end": 28
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
                                    "start": 31,
                                    "end": 37
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 39
                                },
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 31,
                                "end": 39
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 31,
                            "end": 40
                        },
                        {
                            "kind": 164,
                            "ifKeyword": {
                                "kind": 37757019,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 43
                            },
                            "expression": {
                                "kind": 24752947,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 45,
                                "end": 49
                            },
                            "consequent": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 52,
                                                    "end": 58
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 201392130,
                                                    "text": 3,
                                                    "rawText": "3",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 58,
                                                    "end": 60
                                                },
                                                "flags": 32,
                                                "transformFlags": 4096,
                                                "start": 52,
                                                "end": 60
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 52,
                                            "end": 60
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 52,
                                    "end": 60
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 50,
                                "end": 62
                            },
                            "elseKeyword": null,
                            "alternate": null,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 40,
                            "end": 62
                        },
                        {
                            "kind": 168,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 62,
                            "end": 63
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 63,
                                    "end": 69
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 4,
                                    "rawText": "4",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 69,
                                    "end": 71
                                },
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 63,
                                "end": 71
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 63,
                            "end": 71
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 71
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 29,
                "end": 73
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 13,
            "end": 73
        }
    ],
    "isModule": false,
    "source": "'use strict'; function* foo() { yield 2; if (true) { yield 3 }; yield 4 }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 73
}
```

### Printed

```javascript

"'use strict'";
function *foo() {
  yield 2;
  if (true) {
      yield 3;
    }
  yield 4;
}
```

### Diagnostics

```javascript
✔ No errors
```

