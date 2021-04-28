# Kataw parser test case

## Input

`````js
"\x00"
;
"\x12"
;
"\x34"
;
"\x56"
;
"\x78"
;
"\x9a"
;
"\xAb"
;
"\xBc"
;
"\xCd"
;
"\xDe"
;
"\xEf"
;
"\xF0"
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
                "text": "\u0000",
                "rawText": "\u0000",
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "flags": 128,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "\u0012",
                "rawText": "\u0012",
                "flags": 769,
                "start": 8,
                "end": 15
            },
            "flags": 128,
            "start": 8,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "4",
                "rawText": "4",
                "flags": 769,
                "start": 17,
                "end": 24
            },
            "flags": 128,
            "start": 17,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "V",
                "rawText": "V",
                "flags": 769,
                "start": 26,
                "end": 33
            },
            "flags": 128,
            "start": 26,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "x",
                "rawText": "x",
                "flags": 769,
                "start": 35,
                "end": 42
            },
            "flags": 128,
            "start": 35,
            "end": 44
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "",
                "rawText": "",
                "flags": 769,
                "start": 44,
                "end": 51
            },
            "flags": 128,
            "start": 44,
            "end": 53
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "«",
                "rawText": "«",
                "flags": 769,
                "start": 53,
                "end": 60
            },
            "flags": 128,
            "start": 53,
            "end": 62
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "¼",
                "rawText": "¼",
                "flags": 769,
                "start": 62,
                "end": 69
            },
            "flags": 128,
            "start": 62,
            "end": 71
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "Í",
                "rawText": "Í",
                "flags": 769,
                "start": 71,
                "end": 78
            },
            "flags": 128,
            "start": 71,
            "end": 80
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "Þ",
                "rawText": "Þ",
                "flags": 769,
                "start": 80,
                "end": 87
            },
            "flags": 128,
            "start": 80,
            "end": 89
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "ï",
                "rawText": "ï",
                "flags": 769,
                "start": 89,
                "end": 96
            },
            "flags": 128,
            "start": 89,
            "end": 98
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "ð",
                "rawText": "ð",
                "flags": 769,
                "start": 98,
                "end": 105
            },
            "flags": 128,
            "start": 98,
            "end": 105
        }
    ],
    "isModule": false,
    "text": "\"\\x00\"\n;\n\"\\x12\"\n;\n\"\\x34\"\n;\n\"\\x56\"\n;\n\"\\x78\"\n;\n\"\\x9a\"\n;\n\"\\xAb\"\n;\n\"\\xBc\"\n;\n\"\\xCd\"\n;\n\"\\xDe\"\n;\n\"\\xEf\"\n;\n\"\\xF0\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 105
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

