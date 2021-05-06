# Kataw parser test case

## Input

`````js
for (x of 3) continue/x/
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 6,
                "end": 9
            },
            "initializer": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 6
            },
            "expression": {
                "kind": 201392130,
                "text": 3,
                "rawText": "3",
                "flags": 96,
                "start": 9,
                "end": 11
            },
            "statement": {
                "kind": 172,
                "continueKeyword": {
                    "kind": 37757009,
                    "flags": 0,
                    "start": 12,
                    "end": 21
                },
                "label": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 21,
                    "end": 21
                },
                "flags": 16,
                "start": 12,
                "end": 21
            },
            "awaitKeyword": null,
            "flags": 16,
            "start": 0,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 21,
                        "end": 21
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 64,
                        "start": 21,
                        "end": 22
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 22,
                        "end": 23
                    },
                    "flags": 32,
                    "start": 21,
                    "end": 23
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 64,
                    "start": 23,
                    "end": 24
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 24,
                    "end": 24
                },
                "flags": 32,
                "start": 21,
                "end": 24
            },
            "flags": 16,
            "start": 21,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "for (x of 3) continue/x/",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 21, end: 22
✖ Expression expected - start: 24, end: 24

```

