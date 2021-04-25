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
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 768,
                "start": 4,
                "end": 5
            },
            "flags": 128,
            "start": 4,
            "end": 5
        }
    ],
    "isModule": false,
    "text": "xxx\\A",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 5
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Invalid hexadecimal escape sequence - start: 0, end: 3
@{x2716}@ Invalid hexadecimal escape sequence - start: 3, end: 3
@{x2716}@ Unexpected token. - start: 3, end: 4
@{x2716}@ Statement expected - start: 3, end: 4

```

