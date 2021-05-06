# Kataw parser test case

## Input

`````js
throw/("
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 158,
            "throwKeyword": {
                "kind": 37757026,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "expression": {
                "kind": 221,
                "text": "/(\"",
                "flags": 96,
                "start": 5,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "throw/(\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript

throw /(";
```

### Diagnostics

```javascript
✖ Unterminated regular expression - start: 5, end: 6

```

