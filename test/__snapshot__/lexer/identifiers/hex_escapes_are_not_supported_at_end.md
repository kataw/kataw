# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
xxx\x61
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
                "kind": 81921,
                "text": "xxx",
                "rawText": "xxx",
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "flags": 128,
            "start": 0,
            "end": 3
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": "x61",
                "rawText": "x61",
                "flags": 768,
                "start": 4,
                "end": 7
            },
            "flags": 128,
            "start": 4,
            "end": 7
        }
    ],
    "isModule": false,
    "text": "xxx\\x61",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 0,
            "end": 3
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 3,
            "end": 3
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 3,
            "end": 4
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 3,
            "end": 4
        }
    ],
    "start": 0,
    "end": 7
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

