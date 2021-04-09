# Kataw parser test case

## Input

`````js
"prefix \'"
;
"prefix\""
;
"prefix\\"
;
"prefix\b"
;
"prefix\f"
;
"prefix\n"
;
"prefix\r"
;
"prefix\t"
;
"prefix\v"
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
                "value": "prefix '",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 11
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "prefix\"",
                "autofix": 0,
                "flags": 768,
                "start": 13,
                "end": 24
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "prefix\\",
                "autofix": 0,
                "flags": 768,
                "start": 26,
                "end": 37
            },
            "autofix": 0,
            "flags": 128,
            "start": 26,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "prefix\b",
                "autofix": 0,
                "flags": 768,
                "start": 39,
                "end": 50
            },
            "autofix": 0,
            "flags": 128,
            "start": 39,
            "end": 52
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "prefix\f",
                "autofix": 0,
                "flags": 768,
                "start": 52,
                "end": 63
            },
            "autofix": 0,
            "flags": 128,
            "start": 52,
            "end": 65
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "prefix\n",
                "autofix": 0,
                "flags": 768,
                "start": 65,
                "end": 76
            },
            "autofix": 0,
            "flags": 128,
            "start": 65,
            "end": 78
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "prefix\r",
                "autofix": 0,
                "flags": 768,
                "start": 78,
                "end": 89
            },
            "autofix": 0,
            "flags": 128,
            "start": 78,
            "end": 91
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "prefix\t",
                "autofix": 0,
                "flags": 768,
                "start": 91,
                "end": 102
            },
            "autofix": 0,
            "flags": 128,
            "start": 91,
            "end": 104
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "prefix\u000b",
                "autofix": 0,
                "flags": 768,
                "start": 104,
                "end": 115
            },
            "autofix": 0,
            "flags": 128,
            "start": 104,
            "end": 115
        }
    ],
    "isModule": false,
    "text": "\"prefix \\'\"\n;\n\"prefix\\\"\"\n;\n\"prefix\\\\\"\n;\n\"prefix\\b\"\n;\n\"prefix\\f\"\n;\n\"prefix\\n\"\n;\n\"prefix\\r\"\n;\n\"prefix\\t\"\n;\n\"prefix\\v\"",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 115
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

