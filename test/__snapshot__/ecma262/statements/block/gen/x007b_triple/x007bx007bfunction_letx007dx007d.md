# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/x007b_triple
> :: test: { triple
> :: case: {{function let}}
## Options

`````js
{}
`````
## Input

`````js
{ { { {{function let}}
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
                                                                            "start": 8,
                                                                            "end": 16
                                                                        },
                                                                        "asteriskToken": null,
                                                                        "name": {
                                                                            "kind": 134299649,
                                                                            "text": "let",
                                                                            "rawText": "let",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 16,
                                                                            "end": 20
                                                                        },
                                                                        "typeParameters": null,
                                                                        "formalParameterList": {
                                                                            "kind": 214,
                                                                            "formalParameters": [],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 20,
                                                                            "end": 20
                                                                        },
                                                                        "contents": {
                                                                            "kind": 216,
                                                                            "functionStatementList": {
                                                                                "kind": 217,
                                                                                "directives": [],
                                                                                "statements": [],
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 20,
                                                                                "end": 20
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 20,
                                                                            "end": 20
                                                                        },
                                                                        "returnType": null,
                                                                        "flags": 16,
                                                                        "transformFlags": 0,
                                                                        "start": 8,
                                                                        "end": 20
                                                                    }
                                                                ],
                                                                "flags": 16,
                                                                "transformFlags": 0,
                                                                "start": 8,
                                                                "end": 20
                                                            },
                                                            "flags": 16,
                                                            "transformFlags": 0,
                                                            "start": 7,
                                                            "end": 21
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 7,
                                                    "end": 21
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 5,
                                                "end": 22
                                            }
                                        ],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 22
                                    },
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 22
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 22
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 22
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "{ { { {{function let}}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 20, end: 21
✖ The parser expected to find a '}' to match the '{' token here - start: 21, end: 22

```

