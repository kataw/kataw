# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\in_a_block
> :: test: in a block
> :: case: 0B0in
## Input

`````js
{ 0B0in }
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
                            "text": 0,
                            "rawText": "0B0i",
                            "flags": 524384,
                            "start": 1,
                            "end": 6
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 6
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "n",
                            "rawText": "n",
                            "flags": 96,
                            "start": 6,
                            "end": 7
                        },
                        "flags": 16,
                        "start": 6,
                        "end": 7
                    }
                ],
                "flags": 524304,
                "start": 1,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "{ 0B0in }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ An identifier or keyword cannot immediately follow a numeric literal - start: 1, end: 5
✖ Expected a `;` - start: 6, end: 7

```

