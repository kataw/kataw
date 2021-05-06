# Kataw parser test case

## Input

`````js
"\9";
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
                "kind": 201392131,
                "text": "9",
                "rawText": "\"\\9\"",
                "flags": 8388704,
                "start": 0,
                "end": 4
            },
            "flags": 16,
            "start": 0,
            "end": 5
        }
    ],
    "isModule": false,
    "source": "\"\\9\";",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 5
}
```

### Printed

```javascript

"\"9\"";
```

### Diagnostics

```javascript
✖ Escapes \8 or \9 are not syntactically valid escapes - start: 0, end: 3

```

