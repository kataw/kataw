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
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "}",
                "rawText": "}",
                "flags": 131840,
                "start": 0,
                "end": 7
            },
            "flags": 128,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "\u0012",
                "rawText": "\u0012",
                "flags": 131841,
                "start": 9,
                "end": 18
            },
            "flags": 128,
            "start": 9,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "@{x123}@",
                "rawText": "@{x123}@",
                "flags": 131841,
                "start": 20,
                "end": 30
            },
            "flags": 128,
            "start": 20,
            "end": 32
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "@{x1234}@",
                "rawText": "@{x1234}@",
                "flags": 131841,
                "start": 32,
                "end": 43
            },
            "flags": 128,
            "start": 32,
            "end": 45
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "H@{x345}@",
                "rawText": "H@{x345}@",
                "flags": 131841,
                "start": 45,
                "end": 57
            },
            "flags": 128,
            "start": 45,
            "end": 59
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "@{x40d}@V",
                "rawText": "@{x40d}@V",
                "flags": 131841,
                "start": 59,
                "end": 72
            },
            "flags": 128,
            "start": 59,
            "end": 72
        }
    ],
    "isModule": false,
    "text": "\"\\u{1}\"\n;\n\"\\u{12}\"\n;\n\"\\u{123}\"\n;\n\"\\u{1234}\"\n;\n\"\\u{12345}\"\n;\n\"\\u{103456}\"",
    "fileName": "__root__",
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

