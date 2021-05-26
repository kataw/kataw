# Kataw parser test case

## Input

`````js
try {} c\u0061tch  (x) {}sss
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 5,
                    "end": 5
                },
                "flags": 16,
                "start": 3,
                "end": 6
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 16384,
                    "start": 6,
                    "end": 17
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 20,
                    "end": 21
                },
                "initializer": null,
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 24,
                        "end": 24
                    },
                    "flags": 16,
                    "start": 22,
                    "end": 25
                },
                "flags": 16,
                "start": 6,
                "end": 25
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 0,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "sss",
                "rawText": "sss",
                "flags": 96,
                "start": 25,
                "end": 28
            },
            "flags": 16,
            "start": 25,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "try {} c\\u0061tch  (x) {}sss",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Keywords cannot contain escape characters - start: 6, end: 17

```

