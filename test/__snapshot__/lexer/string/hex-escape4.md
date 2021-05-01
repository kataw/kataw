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
                "original": "\"\\x000\"",
                "rawText": "\"\\x000\"",
                "flags": 96,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "\u00128",
                "original": "\"\\x128\"",
                "rawText": "\n\"\\x128\"",
                "flags": 97,
                "start": 9,
                "end": 17
            },
            "flags": 16,
            "start": 9,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "4a",
                "original": "\"\\x34a\"",
                "rawText": "\n\"\\x34a\"",
                "flags": 97,
                "start": 19,
                "end": 27
            },
            "flags": 16,
            "start": 19,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "VX",
                "original": "\"\\x56X\"",
                "rawText": "\n\"\\x56X\"",
                "flags": 97,
                "start": 29,
                "end": 37
            },
            "flags": 16,
            "start": 29,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "x{",
                "original": "\"\\x78{\"",
                "rawText": "\n\"\\x78{\"",
                "flags": 97,
                "start": 39,
                "end": 47
            },
            "flags": 16,
            "start": 39,
            "end": 49
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "",
                "original": "\"\\x9a\\\n\"",
                "rawText": "\n\"\\x9a\\\n\"",
                "flags": 97,
                "start": 49,
                "end": 58
            },
            "flags": 16,
            "start": 49,
            "end": 60
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "«@{x9}@",
                "original": "\"\\xAb@{x9}@\"",
                "rawText": "\n\"\\xAb@{x9}@\"",
                "flags": 97,
                "start": 60,
                "end": 73
            },
            "flags": 16,
            "start": 60,
            "end": 75
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "¼ ",
                "original": "\"\\xBc \"",
                "rawText": "\n\"\\xBc \"",
                "flags": 97,
                "start": 75,
                "end": 83
            },
            "flags": 16,
            "start": 75,
            "end": 85
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "Í#",
                "original": "\"\\xCd#\"",
                "rawText": "\n\"\\xCd#\"",
                "flags": 97,
                "start": 85,
                "end": 93
            },
            "flags": 16,
            "start": 85,
            "end": 95
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "Þ\u0000",
                "original": "\"\\xDe\\x00\"",
                "rawText": "\n\"\\xDe\\x00\"",
                "flags": 97,
                "start": 95,
                "end": 106
            },
            "flags": 16,
            "start": 95,
            "end": 108
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "ïok",
                "original": "\"\\xEfok\"",
                "rawText": "\n\"\\xEfok\"",
                "flags": 97,
                "start": 108,
                "end": 117
            },
            "flags": 16,
            "start": 108,
            "end": 119
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "preð",
                "original": "\"pre\\xF0\"",
                "rawText": "\n\"pre\\xF0\"",
                "flags": 97,
                "start": 119,
                "end": 129
            },
            "flags": 16,
            "start": 119,
            "end": 129
        }
    ],
    "isModule": false,
    "source": "\"\\x000\"\n;\n\"\\x128\"\n;\n\"\\x34a\"\n;\n\"\\x56X\"\n;\n\"\\x78{\"\n;\n\"\\x9a\\\n\"\n;\n\"\\xAb@{x9}@\"\n;\n\"\\xBc \"\n;\n\"\\xCd#\"\n;\n\"\\xDe\\x00\"\n;\n\"\\xEfok\"\n;\n\"pre\\xF0\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 129
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

