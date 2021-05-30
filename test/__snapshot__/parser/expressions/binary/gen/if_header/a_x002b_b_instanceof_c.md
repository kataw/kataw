# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/binary/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\binary\gen\if_header
> :: test: if header
> :: case: a + b instanceof c
## Input

`````js
if ( a + b instanceof c ) ;
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
                    "kind": 34098,
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
                        "kind": 4229173,
                        "flags": 64,
                        "start": 10,
                        "end": 21
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 21,
                        "end": 23
                    },
                    "flags": 32,
                    "start": 10,
                    "end": 23
                },
                "flags": 32,
                "start": 4,
                "end": 23
            },
            "consequent": {
                "kind": 168,
                "flags": 16,
                "start": 25,
                "end": 27
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "if ( a + b instanceof c ) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

if (a + b inctanceof c);
```

### Diagnostics

```javascript
✔ No errors
```

