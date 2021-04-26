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
                "flags": 768,
                "start": 1,
                "end": 2
            },
            "flags": 128,
            "start": 1,
            "end": 2
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "t",
                "rawText": "t",
                "flags": 768,
                "start": 3,
                "end": 4
            },
            "flags": 128,
            "start": 3,
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "t",
                "rawText": "t",
                "flags": 768,
                "start": 5,
                "end": 6
            },
            "flags": 128,
            "start": 5,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "t",
                "rawText": "t",
                "flags": 768,
                "start": 7,
                "end": 8
            },
            "flags": 128,
            "start": 7,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "t",
                "rawText": "t",
                "flags": 768,
                "start": 9,
                "end": 10
            },
            "flags": 128,
            "start": 9,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "t",
                "rawText": "t",
                "flags": 768,
                "start": 11,
                "end": 12
            },
            "flags": 128,
            "start": 11,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "t",
                "rawText": "t",
                "flags": 768,
                "start": 13,
                "end": 14
            },
            "flags": 128,
            "start": 13,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "t",
                "rawText": "t",
                "flags": 768,
                "start": 15,
                "end": 16
            },
            "flags": 128,
            "start": 15,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "\\t\\t\\t\\t\\t\\t\\t\\t",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Invalid hexadecimal escape sequence - start: 0, end: 0
@{x2716}@ Statement expected - start: 0, end: 1
@{x2716}@ Invalid hexadecimal escape sequence - start: 1, end: 2
@{x2716}@ Invalid hexadecimal escape sequence - start: 2, end: 2
@{x2716}@ Statement expected - start: 2, end: 3
@{x2716}@ Invalid hexadecimal escape sequence - start: 3, end: 4
@{x2716}@ Invalid hexadecimal escape sequence - start: 4, end: 4
@{x2716}@ Statement expected - start: 4, end: 5
@{x2716}@ Invalid hexadecimal escape sequence - start: 5, end: 6
@{x2716}@ Invalid hexadecimal escape sequence - start: 6, end: 6
@{x2716}@ Statement expected - start: 6, end: 7
@{x2716}@ Invalid hexadecimal escape sequence - start: 7, end: 8
@{x2716}@ Invalid hexadecimal escape sequence - start: 8, end: 8
@{x2716}@ Statement expected - start: 8, end: 9
@{x2716}@ Invalid hexadecimal escape sequence - start: 9, end: 10
@{x2716}@ Invalid hexadecimal escape sequence - start: 10, end: 10
@{x2716}@ Statement expected - start: 10, end: 11
@{x2716}@ Invalid hexadecimal escape sequence - start: 11, end: 12
@{x2716}@ Invalid hexadecimal escape sequence - start: 12, end: 12
@{x2716}@ Statement expected - start: 12, end: 13
@{x2716}@ Invalid hexadecimal escape sequence - start: 13, end: 14
@{x2716}@ Invalid hexadecimal escape sequence - start: 14, end: 14
@{x2716}@ Statement expected - start: 14, end: 15

```

