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
                "text": "\u00000",
                "rawText": "\"\\x000\"",
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "\u00128",
                "rawText": "\"\\x128\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 9,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 9,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "4a",
                "rawText": "\"\\x34a\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 19,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 19,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "VX",
                "rawText": "\"\\x56X\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 29,
                "end": 37
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 29,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "x{",
                "rawText": "\"\\x78{\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 39,
                "end": 47
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 39,
            "end": 49
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "",
                "rawText": "\"\\x9a\\\n\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 49,
                "end": 58
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 49,
            "end": 60
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "«@{x9}@",
                "rawText": "\"\\xAb@{x9}@\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 60,
                "end": 73
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 60,
            "end": 75
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "¼ ",
                "rawText": "\"\\xBc \"",
                "flags": 97,
                "transformFlags": 0,
                "start": 75,
                "end": 83
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 75,
            "end": 85
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "Í#",
                "rawText": "\"\\xCd#\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 85,
                "end": 93
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 85,
            "end": 95
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "Þ\u0000",
                "rawText": "\"\\xDe\\x00\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 95,
                "end": 106
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 95,
            "end": 108
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "ïok",
                "rawText": "\"\\xEfok\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 108,
                "end": 117
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 108,
            "end": 119
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "preð",
                "rawText": "\"pre\\xF0\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 119,
                "end": 129
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 119,
            "end": 129
        }
    ],
    "isModule": false,
    "source": "\"\\x000\"\n;\n\"\\x128\"\n;\n\"\\x34a\"\n;\n\"\\x56X\"\n;\n\"\\x78{\"\n;\n\"\\x9a\\\n\"\n;\n\"\\xAb@{x9}@\"\n;\n\"\\xBc \"\n;\n\"\\xCd#\"\n;\n\"\\xDe\\x00\"\n;\n\"\\xEfok\"\n;\n\"pre\\xF0\"",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 129
}
```

### Printed

```javascript

"\"\x000\"";
"\"\x128\"";

"\"\x34a\"";

"\"\x56X\"";

"\"\x78{\"";

"\"\x9a\
\"";

"\"\xAb@{x9}@\"";

"\"\xBc \"";

"\"\xCd#\"";

"\"\xDe\x00\"";

"\"\xEfok\"";

"\"pre\xF0\"";

```

### Diagnostics

```javascript
✔ No errors
```

