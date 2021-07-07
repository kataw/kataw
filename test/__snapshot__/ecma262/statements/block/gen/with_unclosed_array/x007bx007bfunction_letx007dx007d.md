# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/with_unclosed_array
> :: test: with unclosed array
> :: case: {{function let}}
## Options

`````js
{}
`````
## Input

`````js
{[ {{function let}}
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
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 4,
                                            "end": 4
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
                                        "start": 2,
                                        "end": 4
                                    },
                                    {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "function",
                                                    "rawText": "function",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 5,
                                                    "end": 13
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "let",
                                                    "rawText": "let",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 13,
                                                    "end": 17
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 5,
                                            "end": 17
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
                                        "start": 4,
                                        "end": 18
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 18
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 1,
                            "end": 18
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
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
    "source": "{[ {{function let}}",
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
✖ Property definition expected. Did you mean to use a ':'? - start: 13, end: 17
✖ ',' expected - start: 14, end: 17
✖ ',' expected - start: 18, end: 19

```

