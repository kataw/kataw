# Kataw parser test case

## Input

`````js
"\P"
;
"prefix\Q"
;
"\Rsuffix"
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
                "text": "P",
                "original": "\"\\P\"",
                "rawText": "\"\\P\"",
                "flags": 96,
                "start": 0,
                "end": 4
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "prefixQ",
                "original": "\"prefix\\Q\"",
                "rawText": "\n\"prefix\\Q\"",
                "flags": 97,
                "start": 6,
                "end": 17
            },
            "flags": 16,
            "start": 6,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "Rsuffix",
                "original": "\"\\Rsuffix\"",
                "rawText": "\n\"\\Rsuffix\"",
                "flags": 97,
                "start": 19,
                "end": 30
            },
            "flags": 16,
            "start": 19,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "\"\\P\"\n;\n\"prefix\\Q\"\n;\n\"\\Rsuffix\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

