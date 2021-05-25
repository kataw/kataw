# Kataw parser test case

## Input

`````js
({[foo]-(a) {}})
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "flags": 32,
                    "start": 0,
                    "end": 11
                },
                "flags": 32,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 11
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 13,
                "end": 13
            },
            "flags": 16,
            "start": 11,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "({[foo]-(a) {}})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Property definition expected. Did you mean to use a ':'? - start: 7, end: 8
✖ ',' expected - start: 7, end: 8
✖ Expected a ')' to match the '(' token here - start: 11, end: 13
✖ Declaration or statement expected - start: 14, end: 15
✖ Declaration or statement expected - start: 15, end: 16

```

