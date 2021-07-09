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

### CST

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
                "rawText": "\"\\x00\"",
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "\u0012",
                "rawText": "\"\\x12\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 8,
                "end": 15
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 8,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "4",
                "rawText": "\"\\x34\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 17,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 17,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "V",
                "rawText": "\"\\x56\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 26,
                "end": 33
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 26,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "x",
                "rawText": "\"\\x78\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 35,
                "end": 42
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 35,
            "end": 44
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "",
                "rawText": "\"\\x9a\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 44,
                "end": 51
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 44,
            "end": 53
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "«",
                "rawText": "\"\\xAb\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 53,
                "end": 60
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 53,
            "end": 62
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "¼",
                "rawText": "\"\\xBc\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 62,
                "end": 69
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 62,
            "end": 71
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "Í",
                "rawText": "\"\\xCd\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 71,
                "end": 78
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 71,
            "end": 80
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "Þ",
                "rawText": "\"\\xDe\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 80,
                "end": 87
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 80,
            "end": 89
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "ï",
                "rawText": "\"\\xEf\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 89,
                "end": 96
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 89,
            "end": 98
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "ð",
                "rawText": "\"\\xF0\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 98,
                "end": 105
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 98,
            "end": 105
        }
    ],
    "isModule": false,
    "source": "\"\\x00\"\n;\n\"\\x12\"\n;\n\"\\x34\"\n;\n\"\\x56\"\n;\n\"\\x78\"\n;\n\"\\x9a\"\n;\n\"\\xAb\"\n;\n\"\\xBc\"\n;\n\"\\xCd\"\n;\n\"\\xDe\"\n;\n\"\\xEf\"\n;\n\"\\xF0\"",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 105
}
```

### Printed

```javascript
"\"\x00\"";
"\"\x12\"";

"\"\x34\"";

"\"\x56\"";

"\"\x78\"";

"\"\x9a\"";

"\"\xAb\"";

"\"\xBc\"";

"\"\xCd\"";

"\"\xDe\"";

"\"\xEf\"";

"\"\xF0\"";

```

### Diagnostics

```javascript
✔ No errors
```

