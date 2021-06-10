# Kataw parser test case

## Input

`````js
if (x) {}}dsadsa
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 4,
                "end": 5
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 8,
                    "end": 8
                },
                "flags": 16,
                "start": 6,
                "end": 9
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 80,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "dsadsa",
                "rawText": "dsadsa",
                "flags": 96,
                "start": 10,
                "end": 16
            },
            "flags": 16,
            "start": 10,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "if (x) {}}dsadsa",
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
✖ Declaration or statement expected - start: 9, end: 10

```

