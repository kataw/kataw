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
                "text": "}",
                "rawText": "\"\\u{1}\"",
                "flags": 8288,
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
                "text": "\u0012",
                "rawText": "\"\\u{12}\"",
                "flags": 8289,
                "start": 9,
                "end": 18
            },
            "flags": 16,
            "start": 9,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "ģ",
                "rawText": "\"\\u{123}\"",
                "flags": 8289,
                "start": 20,
                "end": 30
            },
            "flags": 16,
            "start": 20,
            "end": 32
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "ሴ",
                "rawText": "\"\\u{1234}\"",
                "flags": 8289,
                "start": 32,
                "end": 43
            },
            "flags": 16,
            "start": 32,
            "end": 45
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "Hͅ",
                "rawText": "\"\\u{12345}\"",
                "flags": 8289,
                "start": 45,
                "end": 57
            },
            "flags": 16,
            "start": 45,
            "end": 59
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "ЍV",
                "rawText": "\"\\u{103456}\"",
                "flags": 8289,
                "start": 59,
                "end": 72
            },
            "flags": 16,
            "start": 59,
            "end": 72
        }
    ],
    "isModule": false,
    "source": "\"\\u{1}\"\n;\n\"\\u{12}\"\n;\n\"\\u{123}\"\n;\n\"\\u{1234}\"\n;\n\"\\u{12345}\"\n;\n\"\\u{103456}\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 72
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

