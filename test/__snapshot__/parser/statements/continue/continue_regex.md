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
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 6
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 6,
                "end": 9
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
                    "flags": 80,
                    "start": 12,
                    "end": 21
                },
                "label": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 21,
                    "end": 21
                },
                "flags": 16,
                "start": 12,
                "end": 21
            },
            "flags": 80,
            "start": 0,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 221,
                "text": "/x/",
                "flags": 96,
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

```

### Diagnostics

```javascript
✖ Identifier expected - start: 21, end: 24
✖ A 'continue' statement can only jump to a label of an enclosing iteration statement. - start: 12, end: 24

```

