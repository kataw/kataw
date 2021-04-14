# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: yield * 1; return 37; yield * 'dead';
## Input

`````js
yield * 1; return 37; yield * 'dead';
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
                    "kind": 81921,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 768,
                    "start": 0,
                    "end": 5
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 768,
                    "start": 5,
                    "end": 7
                },
                "right": {
                    "kind": 81921,
                    "text": 1,
                    "rawText": "1",
                    "flags": 768,
                    "start": 7,
                    "end": 9
                },
                "flags": 256,
                "start": 0,
                "end": 9
            },
            "flags": 128,
            "start": 0,
            "end": 10
        },
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 768,
                "start": 10,
                "end": 17
            },
            "expression": {
                "kind": 81921,
                "text": 37,
                "rawText": "37",
                "flags": 768,
                "start": 17,
                "end": 20
            },
            "flags": 128,
            "start": 0,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 81921,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 768,
                    "start": 21,
                    "end": 27
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 768,
                    "start": 27,
                    "end": 29
                },
                "right": {
                    "kind": 67174403,
                    "text": "dead",
                    "rawText": "dead",
                    "flags": 67109632,
                    "start": 29,
                    "end": 36
                },
                "flags": 256,
                "start": 21,
                "end": 36
            },
            "flags": 128,
            "start": 21,
            "end": 37
        }
    ],
    "isModule": false,
    "text": "yield * 1; return 37; yield * 'dead';",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 33,
            "error": "A return statement can only be used within a function_body",
            "start": 10,
            "end": 17
        }
    ],
    "start": 0,
    "end": 37
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: yield * 1; return 37; yield * 'dead';
## Input

`````js
yield * 1; return 37; yield * 'dead';
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: yield * 1; return 37; yield * 'dead';
## Input

`````js
yield * 1; return 37; yield * 'dead';
`````
```

