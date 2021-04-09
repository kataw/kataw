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
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "q",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "",
                "autofix": 0,
                "flags": 768,
                "start": 8,
                "end": 14
            },
            "autofix": 0,
            "flags": 128,
            "start": 8,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "\"\\x9q\"\n;\n\"\\x5\"\n;\n",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "code": 1,
            "error": "Unexpected token.",
            "start": 0,
            "end": 4
        },
        {
            "kind": 2,
            "source": 0,
            "code": 1,
            "error": "Unexpected token.",
            "start": 8,
            "end": 13
        }
    ],
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

```

