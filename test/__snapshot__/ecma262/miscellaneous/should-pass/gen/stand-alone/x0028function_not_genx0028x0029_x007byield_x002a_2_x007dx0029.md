# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: (function not_gen() {yield * 2;})
## Options

`````js
{}
`````
## Input

`````js
(function not_gen() {yield * 2;})
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 9
                    },
                    "asteriskToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "not_gen",
                        "rawText": "not_gen",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 17
                    },
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 18
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
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 26
                                        },
                                        "operatorToken": {
                                            "kind": 67143222,
                                            "flags": 96,
                                            "transformFlags": 32,
                                            "start": 26,
                                            "end": 28
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 28,
                                            "end": 30
                                        },
                                        "flags": 96,
                                        "transformFlags": 1024,
                                        "start": 21,
                                        "end": 30
                                    },
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 31
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 31
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 32
                    },
                    "returnType": null,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 32
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 33
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "(function not_gen() {yield * 2;})",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
(function not_gen() {
    yield * 2;
  });
```

### Diagnostics

```javascript
✔ No errors
```

