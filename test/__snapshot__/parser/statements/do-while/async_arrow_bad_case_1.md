# Kataw parser test case

## Input

`````js
do async
 () => x; while(y)
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 17,
                "end": 17
            },
            "whileKeyword": null,
            "statement": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 12,
                    "end": 15
                },
                "typeParameters": null,
                "parameters": [],
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 2,
                    "end": 8
                },
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 15,
                    "end": 17
                },
                "flags": 288,
                "start": 2,
                "end": 17
            },
            "flags": 80,
            "start": 0,
            "end": 18
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "start": 18,
                "end": 24
            },
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 25,
                "end": 26
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 27,
                    "end": 27
                },
                "flags": 16,
                "start": 27,
                "end": 27
            },
            "flags": 80,
            "start": 18,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "do async\n () => x; while(y)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 2, end: 8
✖ Line terminator not permitted before arrow - start: 12, end: 15
✖ Missing an opening parentheses - '( - start: 17, end: 18
✖ Identifier expected - start: 27, end: 27

```

