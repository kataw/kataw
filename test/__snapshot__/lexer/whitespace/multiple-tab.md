# Kataw parser test case

## Input

`````js
\t\t\t\t\t\t\t\t
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
                "text": "t",
                "rawText": "t",
                "flags": 96,
                "start": 1,
                "end": 2
            },
            "flags": 16,
            "start": 1,
            "end": 2
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "t",
                "rawText": "t",
                "flags": 96,
                "start": 3,
                "end": 4
            },
            "flags": 16,
            "start": 3,
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "t",
                "rawText": "t",
                "flags": 96,
                "start": 5,
                "end": 6
            },
            "flags": 16,
            "start": 5,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "t",
                "rawText": "t",
                "flags": 96,
                "start": 7,
                "end": 8
            },
            "flags": 16,
            "start": 7,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "t",
                "rawText": "t",
                "flags": 96,
                "start": 9,
                "end": 10
            },
            "flags": 16,
            "start": 9,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "t",
                "rawText": "t",
                "flags": 96,
                "start": 11,
                "end": 12
            },
            "flags": 16,
            "start": 11,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "t",
                "rawText": "t",
                "flags": 96,
                "start": 13,
                "end": 14
            },
            "flags": 16,
            "start": 13,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "t",
                "rawText": "t",
                "flags": 96,
                "start": 15,
                "end": 16
            },
            "flags": 16,
            "start": 15,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "\\t\\t\\t\\t\\t\\t\\t\\t",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 0, end: 0
✖ Declaration or statement expected - start: 0, end: 1
✖ Invalid hexadecimal escape sequence - start: 1, end: 2
✖ Invalid hexadecimal escape sequence - start: 2, end: 2
✖ Expected a `;` - start: 2, end: 3
✖ Invalid hexadecimal escape sequence - start: 3, end: 4
✖ Invalid hexadecimal escape sequence - start: 4, end: 4
✖ Expected a `;` - start: 4, end: 5
✖ Invalid hexadecimal escape sequence - start: 5, end: 6
✖ Invalid hexadecimal escape sequence - start: 6, end: 6
✖ Expected a `;` - start: 6, end: 7
✖ Invalid hexadecimal escape sequence - start: 7, end: 8
✖ Invalid hexadecimal escape sequence - start: 8, end: 8
✖ Expected a `;` - start: 8, end: 9
✖ Invalid hexadecimal escape sequence - start: 9, end: 10
✖ Invalid hexadecimal escape sequence - start: 10, end: 10
✖ Expected a `;` - start: 10, end: 11
✖ Invalid hexadecimal escape sequence - start: 11, end: 12
✖ Invalid hexadecimal escape sequence - start: 12, end: 12
✖ Expected a `;` - start: 12, end: 13
✖ Invalid hexadecimal escape sequence - start: 13, end: 14
✖ Invalid hexadecimal escape sequence - start: 14, end: 14
✖ Expected a `;` - start: 14, end: 15

```

