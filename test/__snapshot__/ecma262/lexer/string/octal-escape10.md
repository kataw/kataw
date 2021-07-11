# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
"\008"
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
                "text": "\u000008",
                "rawText": "\"\\008\"",
                "flags": 96,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "source": "\"\\008\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript

"\"\008\"";

```

### Diagnostics

```javascript
✔ No errors
```

