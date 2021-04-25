# Kataw parser test case

## Input

`````js
"\x000"
;
"\x128"
;
"\x34a"
;
"\x56X"
;
"\x78{"
;
"\x9a\
"
;
"\xAb@{x9}@"
;
"\xBc "
;
"\xCd#"
;
"\xDe\x00"
;
"\xEfok"
;
"pre\xF0"
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
                "text": "\u00000",
                "rawText": "\u00000",
                "flags": 768,
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
                "text": "\u00128",
                "rawText": "\u00128",
                "flags": 769,
                "start": 9,
                "end": 17
            },
            "flags": 128,
            "start": 9,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "4a",
                "rawText": "4a",
                "flags": 769,
                "start": 19,
                "end": 27
            },
            "flags": 128,
            "start": 19,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "VX",
                "rawText": "VX",
                "flags": 769,
                "start": 29,
                "end": 37
            },
            "flags": 128,
            "start": 29,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "x{",
                "rawText": "x{",
                "flags": 769,
                "start": 39,
                "end": 47
            },
            "flags": 128,
            "start": 39,
            "end": 49
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "@{x9a}@",
                "rawText": "@{x9a}@",
                "flags": 769,
                "start": 49,
                "end": 58
            },
            "flags": 128,
            "start": 49,
            "end": 60
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "@{xab}@\t",
                "rawText": "@{xab}@\t",
                "flags": 769,
                "start": 60,
                "end": 68
            },
            "flags": 128,
            "start": 60,
            "end": 70
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "@{xbc}@ ",
                "rawText": "@{xbc}@ ",
                "flags": 769,
                "start": 70,
                "end": 78
            },
            "flags": 128,
            "start": 70,
            "end": 80
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "@{xcd}@#",
                "rawText": "@{xcd}@#",
                "flags": 769,
                "start": 80,
                "end": 88
            },
            "flags": 128,
            "start": 80,
            "end": 90
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "@{xde}@\u0000",
                "rawText": "@{xde}@\u0000",
                "flags": 769,
                "start": 90,
                "end": 101
            },
            "flags": 128,
            "start": 90,
            "end": 103
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "@{xef}@ok",
                "rawText": "@{xef}@ok",
                "flags": 769,
                "start": 103,
                "end": 112
            },
            "flags": 128,
            "start": 103,
            "end": 114
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "pre@{xf0}@",
                "rawText": "pre@{xf0}@",
                "flags": 769,
                "start": 114,
                "end": 124
            },
            "flags": 128,
            "start": 114,
            "end": 124
        }
    ],
    "isModule": false,
    "text": "\"\\x000\"\n;\n\"\\x128\"\n;\n\"\\x34a\"\n;\n\"\\x56X\"\n;\n\"\\x78{\"\n;\n\"\\x9a\\\n\"\n;\n\"\\xAb\t\"\n;\n\"\\xBc \"\n;\n\"\\xCd#\"\n;\n\"\\xDe\\x00\"\n;\n\"\\xEfok\"\n;\n\"pre\\xF0\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 124
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

