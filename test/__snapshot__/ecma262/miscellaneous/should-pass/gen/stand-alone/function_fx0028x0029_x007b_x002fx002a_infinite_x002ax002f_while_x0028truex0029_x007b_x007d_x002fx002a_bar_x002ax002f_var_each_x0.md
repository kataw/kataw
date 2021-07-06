# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: function f() { /* infinite */ while (true) { } /* bar */ var each; }
## Options

`````js
{}
`````
## Input

`````js
function f() { /* infinite */ while (true) { } /* bar */ var each; }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 11,
                "end": 11
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 154,
                            "whileKeyword": {
                                "kind": 37757028,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 35
                            },
                            "expression": {
                                "kind": 24752947,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 41
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 44,
                                    "end": 44
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 46
                            },
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 46
                        },
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 46,
                                "end": 60
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "each",
                                            "rawText": "each",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 60,
                                            "end": 65
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "transformFlags": 128,
                                        "start": 60,
                                        "end": 65
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 60,
                                "end": 65
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 46,
                            "end": 66
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 66
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 68
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 68
        }
    ],
    "isModule": false,
    "source": "function f() { /* infinite */ while (true) { } /* bar */ var each; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 68
}
```

### Printed

```javascript

function f() {
  while (true) {}
  var each;
}
```

### Diagnostics

```javascript
✔ No errors
```

