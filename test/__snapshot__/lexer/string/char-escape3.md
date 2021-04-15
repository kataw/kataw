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
                "rawText": "P",
                "flags": 768,
                "start": 0,
                "end": 4
            },
            "flags": 128,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "prefixQ",
                "rawText": "prefixQ",
                "flags": 769,
                "start": 6,
                "end": 17
            },
            "flags": 128,
            "start": 6,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "Rsuffix",
                "rawText": "Rsuffix",
                "flags": 769,
                "start": 19,
                "end": 30
            },
            "flags": 128,
            "start": 19,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "\"\\P\"\n;\n\"prefix\\Q\"\n;\n\"\\Rsuffix\"",
    "fileName": "__root__",
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

