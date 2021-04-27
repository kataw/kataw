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
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 4,
                "end": 5
            },
            "expression": {
                "kind": 201392130,
                "text": 3,
                "rawText": "3",
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "statement": {
                "kind": 150,
                "breakKeyword": {
                    "kind": 37757005,
                    "flags": 768,
                    "start": 11,
                    "end": 16
                },
                "label": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 16,
                    "end": 16
                },
                "flags": 128,
                "start": 11,
                "end": 16
            },
            "awaitKeyword": null,
            "flags": 128,
            "start": 0,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 221,
                "text": "/",
                "flags": 768,
                "start": 16,
                "end": 18
            },
            "flags": 128,
            "start": 16,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "for(x of 3)break/",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 16, end: 17
@{x2716}@ Expression expected - start: 16, end: 18

```

