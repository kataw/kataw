# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/expressions/binary/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\binary\gen\toplevel
> :: test: toplevel
> :: case: a / b + c
## Input

`````js
a / b + c
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
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 0,
                        "end": 1
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 64,
                        "start": 1,
                        "end": 3
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 3,
                        "end": 5
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 5
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 64,
                    "start": 5,
                    "end": 7
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 7,
                    "end": 9
                },
                "flags": 32,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "a / b + c",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

a / b + c;
```

### Diagnostics

```javascript
✔ No errors
```

