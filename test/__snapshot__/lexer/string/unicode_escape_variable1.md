# Kataw parser test case

## Input

`````js
"\u{0123}"
;
"\u{4567}"
;
"\u{89abc}"
;
"\u{defAB}"
;
"\u{CDEF}"
;
"prefix \u{012345}"
;
"\u{012345} postfix"
;
"\u{012345}\u{6789a}"
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
                "text": "ģ",
                "rawText": "ģ",
                "flags": 131840,
                "start": 0,
                "end": 10
            },
            "flags": 128,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "䕧",
                "rawText": "䕧",
                "flags": 131841,
                "start": 12,
                "end": 23
            },
            "flags": 128,
            "start": 12,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "Ȧʼ",
                "rawText": "Ȧʼ",
                "flags": 131841,
                "start": 25,
                "end": 37
            },
            "flags": 128,
            "start": 25,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "ͻΫ",
                "rawText": "ͻΫ",
                "flags": 131841,
                "start": 39,
                "end": 51
            },
            "flags": 128,
            "start": 39,
            "end": 53
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "췯",
                "rawText": "췯",
                "flags": 131841,
                "start": 53,
                "end": 64
            },
            "flags": 128,
            "start": 53,
            "end": 66
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "prefix Hͅ",
                "rawText": "prefix Hͅ",
                "flags": 131841,
                "start": 66,
                "end": 86
            },
            "flags": 128,
            "start": 66,
            "end": 88
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "Hͅ postfix",
                "rawText": "Hͅ postfix",
                "flags": 131841,
                "start": 88,
                "end": 109
            },
            "flags": 128,
            "start": 88,
            "end": 111
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "Hͅƞ",
                "rawText": "Hͅƞ",
                "flags": 131841,
                "start": 111,
                "end": 133
            },
            "flags": 128,
            "start": 111,
            "end": 133
        }
    ],
    "isModule": false,
    "text": "\"\\u{0123}\"\n;\n\"\\u{4567}\"\n;\n\"\\u{89abc}\"\n;\n\"\\u{defAB}\"\n;\n\"\\u{CDEF}\"\n;\n\"prefix \\u{012345}\"\n;\n\"\\u{012345} postfix\"\n;\n\"\\u{012345}\\u{6789a}\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 133
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

