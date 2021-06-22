# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/block/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/block/gen/x007b_triple
> :: test: { triple
> :: case: type {
## Options

`````js
{}
`````
## Input

`````js
{ { { type {
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
                                                    "kind": 134299649,
                                                    "text": "type",
                                                    "rawText": "type",
                                                    "flags": 96,
                                                    "start": 5,
                                                    "end": 10
                                                },
                                                "flags": 16,
                                                "start": 5,
                                                "end": 10
                                            },
                                            {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [],
                                                    "flags": 16,
                                                    "start": 12,
                                                    "end": 12
                                                },
                                                "flags": 16,
                                                "start": 10,
                                                "end": 12
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 5,
                                        "end": 12
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 12
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 12
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 12
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "{ { { type {",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 10, end: 12

```

