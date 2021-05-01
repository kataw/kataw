# Kataw parser test case

## Input

`````js
for(x of 3)break/
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
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 5,
                "end": 8
            },
            "initializer": {
                "kind": 134299649,
                "original": "x",
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 4,
                "end": 5
            },
            "expression": {
                "kind": 201392130,
                "text": 3,
                "original": "3",
                "rawText": " 3",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "statement": {
                "kind": 150,
                "breakKeyword": {
                    "kind": 37757005,
                    "flags": 0,
                    "start": 11,
                    "end": 16
                },
                "label": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 16,
                    "end": 16
                },
                "flags": 16,
                "start": 11,
                "end": 16
            },
            "awaitKeyword": null,
            "flags": 16,
            "start": 0,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 221,
                "text": "/",
                "flags": 96,
                "start": 16,
                "end": 18
            },
            "flags": 16,
            "start": 16,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "for(x of 3)break/",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Unterminated regular expression - start: 16, end: 17
✖ Expression expected - start: 16, end: 18
✖ Missing label - start: 16, end: 18
✖ Expected a `;` - start: 16, end: 18

```

