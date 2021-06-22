while-statement6# Kataw parser test case

## Input

`````js
a // comment
b
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
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 0,
                "end": 1
            },
            "flags": 16,
            "start": 0,
            "end": 1
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 1,
                "end": 14
            },
            "flags": 16,
            "start": 1,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "a // comment\nb",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

a; // comment

b;
```

### Diagnostics

```javascript
✔ No errors
```

