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
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "P",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 4
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "prefixQ",
                "autofix": 0,
                "flags": 768,
                "start": 6,
                "end": 17
            },
            "autofix": 0,
            "flags": 128,
            "start": 6,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "Rsuffix",
                "autofix": 0,
                "flags": 768,
                "start": 19,
                "end": 30
            },
            "autofix": 0,
            "flags": 128,
            "start": 19,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "\"\\P\"\n;\n\"prefix\\Q\"\n;\n\"\\Rsuffix\"",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

