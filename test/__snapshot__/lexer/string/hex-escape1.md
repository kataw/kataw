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
                "original": "\"\\x00\"",
                "rawText": "\"\\x00\"",
                "flags": 96,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "\u0012",
                "original": "\"\\x12\"",
                "rawText": "\n\"\\x12\"",
                "flags": 97,
                "start": 8,
                "end": 15
            },
            "flags": 16,
            "start": 8,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "4",
                "original": "\"\\x34\"",
                "rawText": "\n\"\\x34\"",
                "flags": 97,
                "start": 17,
                "end": 24
            },
            "flags": 16,
            "start": 17,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "V",
                "original": "\"\\x56\"",
                "rawText": "\n\"\\x56\"",
                "flags": 97,
                "start": 26,
                "end": 33
            },
            "flags": 16,
            "start": 26,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "x",
                "original": "\"\\x78\"",
                "rawText": "\n\"\\x78\"",
                "flags": 97,
                "start": 35,
                "end": 42
            },
            "flags": 16,
            "start": 35,
            "end": 44
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "",
                "original": "\"\\x9a\"",
                "rawText": "\n\"\\x9a\"",
                "flags": 97,
                "start": 44,
                "end": 51
            },
            "flags": 16,
            "start": 44,
            "end": 53
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "«",
                "original": "\"\\xAb\"",
                "rawText": "\n\"\\xAb\"",
                "flags": 97,
                "start": 53,
                "end": 60
            },
            "flags": 16,
            "start": 53,
            "end": 62
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "¼",
                "original": "\"\\xBc\"",
                "rawText": "\n\"\\xBc\"",
                "flags": 97,
                "start": 62,
                "end": 69
            },
            "flags": 16,
            "start": 62,
            "end": 71
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "Í",
                "original": "\"\\xCd\"",
                "rawText": "\n\"\\xCd\"",
                "flags": 97,
                "start": 71,
                "end": 78
            },
            "flags": 16,
            "start": 71,
            "end": 80
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "Þ",
                "original": "\"\\xDe\"",
                "rawText": "\n\"\\xDe\"",
                "flags": 97,
                "start": 80,
                "end": 87
            },
            "flags": 16,
            "start": 80,
            "end": 89
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "ï",
                "original": "\"\\xEf\"",
                "rawText": "\n\"\\xEf\"",
                "flags": 97,
                "start": 89,
                "end": 96
            },
            "flags": 16,
            "start": 89,
            "end": 98
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "ð",
                "original": "\"\\xF0\"",
                "rawText": "\n\"\\xF0\"",
                "flags": 97,
                "start": 98,
                "end": 105
            },
            "flags": 16,
            "start": 98,
            "end": 105
        }
    ],
    "isModule": false,
    "source": "\"\\x00\"\n;\n\"\\x12\"\n;\n\"\\x34\"\n;\n\"\\x56\"\n;\n\"\\x78\"\n;\n\"\\x9a\"\n;\n\"\\xAb\"\n;\n\"\\xBc\"\n;\n\"\\xCd\"\n;\n\"\\xDe\"\n;\n\"\\xEf\"\n;\n\"\\xF0\"",
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

