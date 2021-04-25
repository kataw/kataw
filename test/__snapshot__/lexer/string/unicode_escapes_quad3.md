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
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "@{x123}@",
                "rawText": "@{x123}@",
                "flags": 262912,
                "start": 0,
                "end": 8
            },
            "flags": 128,
            "start": 0,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "@{x4567}@",
                "rawText": "@{x4567}@",
                "flags": 262913,
                "start": 10,
                "end": 19
            },
            "flags": 128,
            "start": 10,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "@{x89ab}@",
                "rawText": "@{x89ab}@",
                "flags": 262913,
                "start": 21,
                "end": 30
            },
            "flags": 128,
            "start": 21,
            "end": 32
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "@{xcdef}@",
                "rawText": "@{xcdef}@",
                "flags": 262913,
                "start": 32,
                "end": 41
            },
            "flags": 128,
            "start": 32,
            "end": 43
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "@{xabcd}@",
                "rawText": "@{xabcd}@",
                "flags": 262913,
                "start": 43,
                "end": 52
            },
            "flags": 128,
            "start": 43,
            "end": 54
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "\ude00",
                "rawText": "\ude00",
                "flags": 262913,
                "start": 54,
                "end": 63
            },
            "flags": 128,
            "start": 54,
            "end": 65
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "prefix @{x123}@",
                "rawText": "prefix @{x123}@",
                "flags": 262913,
                "start": 65,
                "end": 81
            },
            "flags": 128,
            "start": 65,
            "end": 83
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "@{x123}@ postfix",
                "rawText": "@{x123}@ postfix",
                "flags": 262913,
                "start": 83,
                "end": 100
            },
            "flags": 128,
            "start": 83,
            "end": 102
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "@{x123}@@{x4567}@",
                "rawText": "@{x123}@@{x4567}@",
                "flags": 262913,
                "start": 102,
                "end": 117
            },
            "flags": 128,
            "start": 102,
            "end": 117
        }
    ],
    "isModule": false,
    "text": "\"\\u0123\"\n;\n\"\\u4567\"\n;\n\"\\u89ab\"\n;\n\"\\ucdef\"\n;\n\"\\uABCD\"\n;\n\"\\uDE00\"\n;\n\"prefix \\u0123\"\n;\n\"\\u0123 postfix\"\n;\n\"\\u0123\\u4567\"",
    "fileName": "__root__",
    "flags": 0,
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
@{x2714}@ No errors
```

