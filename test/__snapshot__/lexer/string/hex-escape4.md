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
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "\u00000",
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
                "value": "\u00128",
                "autofix": 0,
                "flags": 768,
                "start": 9,
                "end": 17
            },
            "autofix": 0,
            "flags": 128,
            "start": 9,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "4a",
                "autofix": 0,
                "flags": 768,
                "start": 19,
                "end": 27
            },
            "autofix": 0,
            "flags": 128,
            "start": 19,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "VX",
                "autofix": 0,
                "flags": 768,
                "start": 29,
                "end": 37
            },
            "autofix": 0,
            "flags": 128,
            "start": 29,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "x{",
                "autofix": 0,
                "flags": 768,
                "start": 39,
                "end": 47
            },
            "autofix": 0,
            "flags": 128,
            "start": 39,
            "end": 49
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "@{x9a}@",
                "autofix": 0,
                "flags": 768,
                "start": 49,
                "end": 58
            },
            "autofix": 0,
            "flags": 128,
            "start": 49,
            "end": 60
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "@{xab}@\t",
                "autofix": 0,
                "flags": 768,
                "start": 60,
                "end": 68
            },
            "autofix": 0,
            "flags": 128,
            "start": 60,
            "end": 70
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "@{xbc}@ ",
                "autofix": 0,
                "flags": 768,
                "start": 70,
                "end": 78
            },
            "autofix": 0,
            "flags": 128,
            "start": 70,
            "end": 80
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "@{xcd}@#",
                "autofix": 0,
                "flags": 768,
                "start": 80,
                "end": 88
            },
            "autofix": 0,
            "flags": 128,
            "start": 80,
            "end": 90
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "@{xde}@\u0000",
                "autofix": 0,
                "flags": 768,
                "start": 90,
                "end": 101
            },
            "autofix": 0,
            "flags": 128,
            "start": 90,
            "end": 103
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "@{xef}@ok",
                "autofix": 0,
                "flags": 768,
                "start": 103,
                "end": 112
            },
            "autofix": 0,
            "flags": 128,
            "start": 103,
            "end": 114
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "pre@{xf0}@",
                "autofix": 0,
                "flags": 768,
                "start": 114,
                "end": 124
            },
            "autofix": 0,
            "flags": 128,
            "start": 114,
            "end": 124
        }
    ],
    "isModule": false,
    "text": "\"\\x000\"\n;\n\"\\x128\"\n;\n\"\\x34a\"\n;\n\"\\x56X\"\n;\n\"\\x78{\"\n;\n\"\\x9a\\\n\"\n;\n\"\\xAb\t\"\n;\n\"\\xBc \"\n;\n\"\\xCd#\"\n;\n\"\\xDe\\x00\"\n;\n\"\\xEfok\"\n;\n\"pre\\xF0\"",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
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

```

