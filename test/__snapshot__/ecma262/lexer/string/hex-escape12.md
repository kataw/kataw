# Kataw parser test case

## Input

`````js
"\x9q"
;
"\x5"
;

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
                "text": "q",
                "rawText": "\"\\x9q\"",
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "",
                "rawText": "\"\\x5\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 8,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 8,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "\"\\x9q\"\n;\n\"\\x5\"\n;\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 1, end: 4
✖ Invalid hexadecimal escape sequence - start: 10, end: 13

```

