# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/unclosed_parens
> :: test: unclosed parens
> :: case: (a b, c = b : string)
## Options

`````js
{}
`````
## Input

`````js
{( (a b, c = b : string)
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
                                "kind": 121,
                                "expression": {
                                    "kind": 132,
                                    "expressions": [],
                                    "flags": 32,
                                    "transformFlags": 1024,
                                    "start": 2,
                                    "end": 5
                                },
                                "flags": 2,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 5
                            },
                            "flags": 1,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 5
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 5
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 132,
                            "expressions": [
                                {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 7
                                },
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 10
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 12
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 12,
                                        "end": 14
                                    },
                                    "flags": 0,
                                    "transformFlags": 128,
                                    "start": 8,
                                    "end": 14
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 1024,
                            "start": 5,
                            "end": 14
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 5,
                        "end": 14
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "transformFlags": 0,
                "start": 16,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 16,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "{( (a b, c = b : string)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 6, end: 7
✖ ':' expected - start: 14, end: 16
✖ ')' expected - start: 23, end: 24

```

