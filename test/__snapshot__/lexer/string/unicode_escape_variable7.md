# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
"\u{1}"
;
"\u{12}"
;
"\u{123}"
;
"\u{1234}"
;
"\u{12345}"
;
"\u{103456}"
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
                "value": "}",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 7
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "\u0012",
                "autofix": 0,
                "flags": 768,
                "start": 9,
                "end": 18
            },
            "autofix": 0,
            "flags": 128,
            "start": 9,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "@{x123}@",
                "autofix": 0,
                "flags": 768,
                "start": 20,
                "end": 30
            },
            "autofix": 0,
            "flags": 128,
            "start": 20,
            "end": 32
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "@{x1234}@",
                "autofix": 0,
                "flags": 768,
                "start": 32,
                "end": 43
            },
            "autofix": 0,
            "flags": 128,
            "start": 32,
            "end": 45
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "H@{x345}@",
                "autofix": 0,
                "flags": 768,
                "start": 45,
                "end": 57
            },
            "autofix": 0,
            "flags": 128,
            "start": 45,
            "end": 59
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "@{x40d}@V",
                "autofix": 0,
                "flags": 768,
                "start": 59,
                "end": 72
            },
            "autofix": 0,
            "flags": 128,
            "start": 59,
            "end": 72
        }
    ],
    "isModule": false,
    "text": "\"\\u{1}\"\n;\n\"\\u{12}\"\n;\n\"\\u{123}\"\n;\n\"\\u{1234}\"\n;\n\"\\u{12345}\"\n;\n\"\\u{103456}\"",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 72
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

