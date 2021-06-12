# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\in_a_block
> :: test: in a block
> :: case: 0o465instanceof x
## Input

`````js
{ 0o465instanceof x }
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
                            "kind": 201392130,
                            "text": 309,
                            "rawText": "0o465i",
                            "flags": 262240,
                            "start": 1,
                            "end": 8
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 8
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "nstanceof",
                            "rawText": "nstanceof",
                            "flags": 96,
                            "start": 8,
                            "end": 17
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 17
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 17,
                            "end": 19
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 19
                    }
                ],
                "flags": 262160,
                "start": 1,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "{ 0o465instanceof x }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ An identifier or keyword cannot immediately follow a numeric literal - start: 1, end: 7
✖ Expected a `;` - start: 8, end: 17
✖ Expected a `;` - start: 17, end: 19

```

