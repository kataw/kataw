# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/stand-alone
> :: test: stand-alone
> :: case: for (a+b of c) d;
## Options

`````js
{}
`````
## Input

`````js
for (a+b of c) d;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 5,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "start": 6,
                    "end": 7
                },
                "right": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 7,
                    "end": 8
                },
                "flags": 32,
                "start": 0,
                "end": 8
            },
            "condition": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "start": 11,
                "end": 13
            },
            "incrementor": {
                "kind": 134299649,
                "text": "of",
                "rawText": "of",
                "flags": 96,
                "start": 8,
                "end": 11
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 14,
                    "end": 16
                },
                "flags": 16,
                "start": 14,
                "end": 17
            },
            "flags": 80,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "for (a+b of c) d;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

for (a + b; c; of)
  d;
```

### Diagnostics

```javascript
✔ No errors
```

