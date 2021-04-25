# Kataw parser test case

## Input

`````js
for (x of 3) continue
/
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 5,
                "end": 6
            },
            "expression": {
                "kind": 134299649,
                "text": 3,
                "rawText": "3",
                "flags": 768,
                "start": 9,
                "end": 11
            },
            "statement": {
                "kind": 172,
                "continueKeyword": {
                    "kind": 37757009,
                    "flags": 768,
                    "start": 12,
                    "end": 21
                },
                "label": null,
                "flags": 128,
                "start": 12,
                "end": 21
            },
            "awaitKeyword": null,
            "flags": 128,
            "start": 0,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 21,
                    "end": 21
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 768,
                    "start": 21,
                    "end": 23
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 23,
                    "end": 23
                },
                "flags": 256,
                "start": 21,
                "end": 23
            },
            "flags": 128,
            "start": 21,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "for (x of 3) continue\n/",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Expression expected - start: 21, end: 23
@{x2716}@ Expression expected - start: 23, end: 23

```

