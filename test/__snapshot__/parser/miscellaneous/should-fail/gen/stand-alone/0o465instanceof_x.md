# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\stand-alone
> :: test: stand-alone
> :: case: 0o465instanceof x
## Input

`````js
0o465instanceof x
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 309,
                "rawText": "0o465i",
                "flags": 262240,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "nstanceof",
                "rawText": "nstanceof",
                "flags": 96,
                "start": 6,
                "end": 15
            },
            "flags": 16,
            "start": 6,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 15,
                "end": 17
            },
            "flags": 16,
            "start": 15,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "0o465instanceof x",
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
✖ An identifier or keyword cannot immediately follow a numeric literal - start: 0, end: 5
✖ Expected a `;` - start: 6, end: 15
✖ Expected a `;` - start: 15, end: 17

```

