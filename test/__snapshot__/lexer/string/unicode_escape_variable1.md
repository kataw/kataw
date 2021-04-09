# Kataw parser test case

## Input

`````js
"\u{0123}"
;
"\u{4567}"
;
"\u{89abc}"
;
"\u{defAB}"
;
"\u{CDEF}"
;
"prefix \u{012345}"
;
"\u{012345} postfix"
;
"\u{012345}\u{6789a}"
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
                "value": "@{x123}@",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 10
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "@{x4567}@",
                "autofix": 0,
                "flags": 768,
                "start": 12,
                "end": 23
            },
            "autofix": 0,
            "flags": 128,
            "start": 12,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "@{x226}@@{x2bc}@",
                "autofix": 0,
                "flags": 768,
                "start": 25,
                "end": 37
            },
            "autofix": 0,
            "flags": 128,
            "start": 25,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "@{x37b}@@{x3ab}@",
                "autofix": 0,
                "flags": 768,
                "start": 39,
                "end": 51
            },
            "autofix": 0,
            "flags": 128,
            "start": 39,
            "end": 53
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "@{xcdef}@",
                "autofix": 0,
                "flags": 768,
                "start": 53,
                "end": 64
            },
            "autofix": 0,
            "flags": 128,
            "start": 53,
            "end": 66
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "prefix H@{x345}@",
                "autofix": 0,
                "flags": 768,
                "start": 66,
                "end": 86
            },
            "autofix": 0,
            "flags": 128,
            "start": 66,
            "end": 88
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "H@{x345}@ postfix",
                "autofix": 0,
                "flags": 768,
                "start": 88,
                "end": 109
            },
            "autofix": 0,
            "flags": 128,
            "start": 88,
            "end": 111
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "H@{x345}@@{x19e}@@{x9a}@",
                "autofix": 0,
                "flags": 768,
                "start": 111,
                "end": 133
            },
            "autofix": 0,
            "flags": 128,
            "start": 111,
            "end": 133
        }
    ],
    "isModule": false,
    "text": "\"\\u{0123}\"\n;\n\"\\u{4567}\"\n;\n\"\\u{89abc}\"\n;\n\"\\u{defAB}\"\n;\n\"\\u{CDEF}\"\n;\n\"prefix \\u{012345}\"\n;\n\"\\u{012345} postfix\"\n;\n\"\\u{012345}\\u{6789a}\"",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 133
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

