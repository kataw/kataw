# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/with_unclosed_block
> :: test: with unclosed block
> :: case: {{function let}}
## Options

`````js
{}
`````
## Input

`````js
{ {} finally(x) { {{function let}}
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
                            "statements": [],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 3
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 4
                    },
                    {
                        "kind": 159,
                        "tryKeyword": null,
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 4,
                                "end": 4
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 4
                        },
                        "catchClause": null,
                        "finallyKeyword": {
                            "kind": 37757016,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 12
                        },
                        "finallyBlock": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 12
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 12
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 14
                            },
                            "flags": 12,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 15
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 12,
                        "end": 15
                    },
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
                                                                "start": 20,
                                                                "end": 28
                                                            },
                                                            "asteriskToken": null,
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "let",
                                                                "rawText": "let",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 28,
                                                                "end": 32
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameterList": {
                                                                "kind": 214,
                                                                "formalParameters": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 32,
                                                                "end": 32
                                                            },
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "directives": [],
                                                                    "statements": [],
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 32,
                                                                    "end": 32
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 32,
                                                                "end": 32
                                                            },
                                                            "returnType": null,
                                                            "flags": 16,
                                                            "transformFlags": 0,
                                                            "start": 20,
                                                            "end": 32
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 20,
                                                    "end": 32
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 19,
                                                "end": 33
                                            }
                                        ],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 33
                                    },
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 34
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 34
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 34
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 34
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "{ {} finally(x) { {{function let}}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '{' is not allowed here. Did you mean ';'? - start: 15, end: 17
✖ Missing an opening parentheses - '( - start: 32, end: 33
✖ The parser expected to find a '}' to match the '{' token here - start: 33, end: 34

```

