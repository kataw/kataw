# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/x007b_triple
> :: test: { triple
> :: case: function * await(yield x) ; {
## Options

`````js
{}
`````
## Input

`````js
{ { { function * await(yield x) ; {
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [
                                {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [
                                            {
                                                "kind": 176,
                                                "declareKeyword": null,
                                                "asyncKeyword": null,
                                                "functionKeyword": {
                                                    "kind": 37822554,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 5,
                                                    "end": 14
                                                },
                                                "asteriskToken": {
                                                    "kind": 67143222,
                                                    "flags": 64,
                                                    "transformFlags": 32,
                                                    "start": 14,
                                                    "end": 16
                                                },
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "await",
                                                    "rawText": "await",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 16,
                                                    "end": 22
                                                },
                                                "typeParameters": null,
                                                "formalParameterList": {
                                                    "kind": 214,
                                                    "formalParameters": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "yield",
                                                            "rawText": "yield",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 23,
                                                            "end": 28
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 28,
                                                            "end": 30
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 23,
                                                    "end": 30
                                                },
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [],
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 31,
                                                        "end": 31
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 31,
                                                    "end": 31
                                                },
                                                "returnType": null,
                                                "flags": 272,
                                                "transformFlags": 0,
                                                "start": 5,
                                                "end": 31
                                            },
                                            {
                                                "kind": 168,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 31,
                                                "end": 33
                                            },
                                            {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [],
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 35,
                                                    "end": 35
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 33,
                                                "end": 35
                                            }
                                        ],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 35
                                    },
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 35
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 35
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 35
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 35
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "{ { { function * await(yield x) ; {",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `yield` expression cannot be used in function parameters - start: 23, end: 28
✖ ',' expected - start: 29, end: 30
✖ Missing an opening brace - '{ - start: 32, end: 33
✖ The parser expected to find a '}' to match the '{' token here - start: 34, end: 35

```

