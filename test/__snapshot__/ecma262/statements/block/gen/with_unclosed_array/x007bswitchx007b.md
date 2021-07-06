# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/with_unclosed_array
> :: test: with unclosed array
> :: case: {switch{
## Options

`````js
{}
`````
## Input

`````js
{[ {switch{
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
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "switch",
                                                    "rawText": "switch",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 4,
                                                    "end": 10
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 4,
                                            "end": 10
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
                                        "start": 2,
                                        "end": 10
                                    },
                                    {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 11
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
                                        "start": 10,
                                        "end": 11
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 11
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 1,
                            "end": 11
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 11
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "{[ {switch{",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Property definition expected. Did you mean to use a ':'? - start: 10, end: 11
✖ ',' expected - start: 10, end: 11

```

