# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
"\u0123"
;
"\u4567"
;
"\u89ab"
;
"\ucdef"
;
"\uABCD"
;
"\uDE00"
;
"prefix \u0123"
;
"\u0123 postfix"
;
"\u0123\u4567"
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
                "end": 8
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "@{x4567}@",
                "autofix": 0,
                "flags": 768,
                "start": 10,
                "end": 19
            },
            "autofix": 0,
            "flags": 128,
            "start": 10,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "@{x89ab}@",
                "autofix": 0,
                "flags": 768,
                "start": 21,
                "end": 30
            },
            "autofix": 0,
            "flags": 128,
            "start": 21,
            "end": 32
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "@{xcdef}@",
                "autofix": 0,
                "flags": 768,
                "start": 32,
                "end": 41
            },
            "autofix": 0,
            "flags": 128,
            "start": 32,
            "end": 43
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "@{xabcd}@",
                "autofix": 0,
                "flags": 768,
                "start": 43,
                "end": 52
            },
            "autofix": 0,
            "flags": 128,
            "start": 43,
            "end": 54
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "\ude00",
                "autofix": 0,
                "flags": 768,
                "start": 54,
                "end": 63
            },
            "autofix": 0,
            "flags": 128,
            "start": 54,
            "end": 65
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "prefix @{x123}@",
                "autofix": 0,
                "flags": 768,
                "start": 65,
                "end": 81
            },
            "autofix": 0,
            "flags": 128,
            "start": 65,
            "end": 83
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "@{x123}@ postfix",
                "autofix": 0,
                "flags": 768,
                "start": 83,
                "end": 100
            },
            "autofix": 0,
            "flags": 128,
            "start": 83,
            "end": 102
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "@{x123}@@{x4567}@",
                "autofix": 0,
                "flags": 768,
                "start": 102,
                "end": 117
            },
            "autofix": 0,
            "flags": 128,
            "start": 102,
            "end": 117
        }
    ],
    "isModule": false,
    "text": "\"\\u0123\"\n;\n\"\\u4567\"\n;\n\"\\u89ab\"\n;\n\"\\ucdef\"\n;\n\"\\uABCD\"\n;\n\"\\uDE00\"\n;\n\"prefix \\u0123\"\n;\n\"\\u0123 postfix\"\n;\n\"\\u0123\\u4567\"",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 117
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

