# Kataw parser test case

## Input

`````js
x: foo; while (true) continue x;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 0,
                "end": 1
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "start": 1,
                "end": 2
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 2,
                    "end": 6
                },
                "flags": 16,
                "start": 2,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 7
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "start": 7,
                "end": 13
            },
            "expression": {
                "kind": 24752947,
                "flags": 96,
                "start": 15,
                "end": 19
            },
            "statement": {
                "kind": 172,
                "continueKeyword": {
                    "kind": 37757009,
                    "flags": 80,
                    "start": 20,
                    "end": 29
                },
                "label": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 29,
                    "end": 31
                },
                "flags": 16,
                "start": 20,
                "end": 32
            },
            "flags": 16,
            "start": 7,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "x: foo; while (true) continue x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

x: foo;
while (true) continue x;
```

### Diagnostics

```javascript
✔ No errors
```

