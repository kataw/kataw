# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: e
> :: test: { triple
> :: case: import.call
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
                                                    "kind": 207,
                                                    "importKeyword": {
                                                        "kind": 37814364,
                                                        "flags": 0,
                                                        "start": 5,
                                                        "end": 12
                                                    },
                                                    "metaIdentifier": null,
                                                    "flags": 12,
                                                    "start": 96,
                                                    "end": 13
                                                },
                                                "flags": 16,
                                                "start": 12,
                                                "end": 13
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "call",
                                                    "rawText": "call",
                                                    "flags": 96,
                                                    "start": 13,
                                                    "end": 17
                                                },
                                                "flags": 16,
                                                "start": 13,
                                                "end": 17
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 5,
                                        "end": 17
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 17
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 17
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 17
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "{ { { import.call",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'import.meta' is the only valid meta property for import - start: 13, end: 17

```

