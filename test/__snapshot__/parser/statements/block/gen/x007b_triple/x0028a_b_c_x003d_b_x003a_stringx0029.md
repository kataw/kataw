# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-01
- From: kataw8/test\__snapshot__/parser/statements/block/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\block\gen\x007b_triple
> :: test: { triple
> :: case: (a b, c = b : string)
## Input

`````js
{ { { (a b, c = b : string)
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
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 132,
                                                        "expressions": [],
                                                        "flags": 32,
                                                        "start": 5,
                                                        "end": 8
                                                    },
                                                    "flags": 32,
                                                    "start": 5,
                                                    "end": 8
                                                },
                                                "flags": 16,
                                                "start": 5,
                                                "end": 8
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
                                                            "start": 8,
                                                            "end": 10
                                                        },
                                                        {
                                                            "kind": 125,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "c",
                                                                "rawText": "c",
                                                                "flags": 96,
                                                                "start": 11,
                                                                "end": 13
                                                            },
                                                            "operatorToken": {
                                                                "kind": 4125,
                                                                "flags": 64,
                                                                "start": 13,
                                                                "end": 15
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "b",
                                                                "rawText": "b",
                                                                "flags": 96,
                                                                "start": 15,
                                                                "end": 17
                                                            },
                                                            "flags": 32,
                                                            "start": 11,
                                                            "end": 17
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 8,
                                                    "end": 17
                                                },
                                                "flags": 16,
                                                "start": 8,
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
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "start": 19,
                "end": 26
            },
            "flags": 16,
            "start": 19,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "{ { { (a b, c = b : string)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 8, end: 10
✖ Expected a `;` - start: 17, end: 19
✖ Expected a `;` - start: 26, end: 27

```

