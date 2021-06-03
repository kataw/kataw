# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/binary/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\binary\gen\if_header
> :: test: if header
> :: case: a + b / c
## Input

`````js
if ( a + b / c ) ;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 4,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 64,
                    "start": 6,
                    "end": 8
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 8,
                        "end": 10
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 64,
                        "start": 10,
                        "end": 12
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 12,
                        "end": 14
                    },
                    "flags": 32,
                    "start": 10,
                    "end": 14
                },
                "flags": 32,
                "start": 4,
                "end": 14
            },
            "consequent": {
                "kind": 168,
                "flags": 16,
                "start": 16,
                "end": 18
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "if ( a + b / c ) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

if (a + b / c);
```

### Diagnostics

```javascript
✔ No errors
```

