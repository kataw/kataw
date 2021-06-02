# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-02
- From: kataw8/test\__snapshot__/parser/statements/block/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\block\gen\x007b_triple
> :: test: { triple
> :: case: crazy input 1
## Input

`````js
{ { { crazy input 1
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
                                                    "text": "crazy",
                                                    "rawText": "crazy",
                                                    "flags": 96,
                                                    "start": 5,
                                                    "end": 11
                                                },
                                                "flags": 16,
                                                "start": 5,
                                                "end": 11
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "input",
                                                    "rawText": "input",
                                                    "flags": 96,
                                                    "start": 11,
                                                    "end": 17
                                                },
                                                "flags": 16,
                                                "start": 11,
                                                "end": 17
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 96,
                                                    "start": 17,
                                                    "end": 19
                                                },
                                                "flags": 16,
                                                "start": 17,
                                                "end": 19
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 5,
                                        "end": 19
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 19
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 19
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 19
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "{ { { crazy input 1",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 11, end: 17
✖ Expected a `;` - start: 17, end: 19

```

