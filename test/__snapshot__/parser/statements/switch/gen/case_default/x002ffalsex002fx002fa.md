# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: case default
> :: case: /false//a
## Input

`````js
case /false//a default
`````

## Output

### Hybrid CST

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
                    "kind": 221,
                    "text": "/false/",
                    "flags": 768,
                    "start": 4,
                    "end": 12
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 768,
                    "start": 12,
                    "end": 13
                },
                "right": {
                    "kind": 81921,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 13,
                    "end": 14
                },
                "flags": 256,
                "start": 4,
                "end": 14
            },
            "flags": 128,
            "start": 4,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "case /false//a default",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 0,
            "end": 4
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 14,
            "end": 22
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 14,
            "end": 22
        }
    ],
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: case default
> :: case: /false//a
## Input

`````js
case /false//a default
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: case default
> :: case: /false//a
## Input

`````js
case /false//a default
`````
```

