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
                "flags": 96,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "",
                "rawText": "",
                "flags": 97,
                "start": 8,
                "end": 14
            },
            "flags": 16,
            "start": 8,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "\"\\x9q\"\n;\n\"\\x5\"\n;\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 0, end: 4
✖ Invalid hexadecimal escape sequence - start: 8, end: 13

```

