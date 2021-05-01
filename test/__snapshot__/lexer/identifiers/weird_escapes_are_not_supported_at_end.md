# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
xxx\A
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "original": "xxx",
                "text": "xxx",
                "rawText": "xxx",
                "flags": 96,
                "start": 0,
                "end": 3
            },
            "flags": 16,
            "start": 0,
            "end": 3
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "original": "A",
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 4,
                "end": 5
            },
            "flags": 16,
            "start": 4,
            "end": 5
        }
    ],
    "isModule": false,
    "source": "xxx\\A",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 5
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 0, end: 3
✖ Invalid hexadecimal escape sequence - start: 3, end: 3
✖ Expected a `;` - start: 3, end: 4
✖ Statement expected - start: 3, end: 4

```

