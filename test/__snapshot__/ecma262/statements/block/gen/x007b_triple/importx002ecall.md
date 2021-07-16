# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/x007b_triple
> :: test: { triple
> :: case: import.call
## Options

`````js
{}
`````
## Input

`````js
{ { { import.call
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
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 299,
                                                    "importKeyword": {
                                                        "kind": 37814364,
                                                        "flags": 80,
                                                        "transformFlags": 0,
                                                        "start": 5,
                                                        "end": 12
                                                    },
                                                    "metaIdentifier": null,
                                                    "flags": 12,
                                                    "transformFlags": 0,
                                                    "start": 96,
                                                    "end": 13
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 5,
                                                "end": 13
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "call",
                                                    "rawText": "call",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 13,
                                                    "end": 17
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 13,
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
                                    "start": 3,
                                    "end": 17
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 17
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 17
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "{ { { import.call",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'import.meta' outside a module - start: 12, end: 17
✖ 'import.meta' is the only valid meta property for import - start: 12, end: 17
✖ '; ' expected - start: 13, end: 17

```

