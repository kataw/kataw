# Kataw parser test case

## Input

`````js
if (foo) a; if (bar) b; else c;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "original": "foo",
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 4,
                "end": 7
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "original": "a",
                    "text": "a",
                    "rawText": " a",
                    "flags": 96,
                    "start": 8,
                    "end": 10
                },
                "flags": 16,
                "start": 8,
                "end": 11
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 16,
            "start": 0,
            "end": 11
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 0,
                "start": 11,
                "end": 14
            },
            "expression": {
                "kind": 134299649,
                "original": "bar",
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "start": 16,
                "end": 19
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "original": "b",
                    "text": "b",
                    "rawText": " b",
                    "flags": 96,
                    "start": 20,
                    "end": 22
                },
                "flags": 16,
                "start": 20,
                "end": 23
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 64,
                "start": 23,
                "end": 28
            },
            "alternate": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "original": "c",
                    "text": "c",
                    "rawText": " c",
                    "flags": 96,
                    "start": 28,
                    "end": 30
                },
                "flags": 16,
                "start": 28,
                "end": 31
            },
            "flags": 16,
            "start": 11,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "if (foo) a; if (bar) b; else c;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

