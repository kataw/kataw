# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/unclosed_parens
> :: test: unclosed parens
> :: case: {{function let}}
## Options

`````js
{}
`````
## Input

`````js
{( {{function let}}
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
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "expressions": [],
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 1,
                                "end": 4
                            },
                            "flags": 1,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 4
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 4
                    },
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
                                        "end": 13
                                    },
                                    "asteriskToken": null,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "let",
                                        "rawText": "let",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 17
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 17
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 17
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 17
                                    },
                                    "returnType": null,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 17
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 17
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 18
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 18
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "{( {{function let}}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 4, end: 5
✖ Missing an opening parentheses - '( - start: 17, end: 18

```

