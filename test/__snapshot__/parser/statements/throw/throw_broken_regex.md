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
                "text": "/(",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "",
                "rawText": "\"",
                "flags": 2097248,
                "start": 7,
                "end": 9
            },
            "flags": 16,
            "start": 7,
            "end": 9
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

```

### Diagnostics

```javascript
✖ Unterminated regular expression - start: 5, end: 8
✖ Unterminated string literal - start: 7, end: 9
✖ Expected a `;` - start: 7, end: 9

```

