# Kataw parser test case

## Input

`````js
if (foo) bar;
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
                    "original": "bar",
                    "text": "bar",
                    "rawText": " bar",
                    "flags": 96,
                    "start": 8,
                    "end": 12
                },
                "flags": 16,
                "start": 8,
                "end": 13
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "if (foo) bar;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
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

