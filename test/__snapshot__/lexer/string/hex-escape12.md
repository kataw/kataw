# Kataw parser test case

## Input

`````js
"\x9q"
;
"\x5"
;

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
                "kind": 201392131,
                "text": "q",
                "rawText": "q",
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "flags": 128,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "",
                "rawText": "",
                "flags": 769,
                "start": 8,
                "end": 14
            },
            "flags": 128,
            "start": 8,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "\"\\x9q\"\n;\n\"\\x5\"\n;\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Invalid hexadecimal escape sequence - start: 0, end: 4
@{x2716}@ Invalid hexadecimal escape sequence - start: 8, end: 13

```

