# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: r
> :: test: if header
> :: case: a instanceof b > c
## Input

`````js
if ( a instanceof b > c ) ;
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
                        "kind": 4229173,
                        "flags": 64,
                        "start": 6,
                        "end": 17
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 17,
                        "end": 19
                    },
                    "flags": 32,
                    "start": 4,
                    "end": 19
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 64,
                    "start": 19,
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
    "source": "if ( a instanceof b > c ) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

if (a inctanceof b > c);
```

### Diagnostics

```javascript
✔ No errors
```

