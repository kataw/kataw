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
                "text": "ģ",
                "rawText": "\"\\u{0123}\"",
                "flags": 8288,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "䕧",
                "rawText": "\"\\u{4567}\"",
                "flags": 8289,
                "start": 12,
                "end": 23
            },
            "flags": 16,
            "start": 12,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "Ȧʼ",
                "rawText": "\"\\u{89abc}\"",
                "flags": 8289,
                "start": 25,
                "end": 37
            },
            "flags": 16,
            "start": 25,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "ͻΫ",
                "rawText": "\"\\u{defAB}\"",
                "flags": 8289,
                "start": 39,
                "end": 51
            },
            "flags": 16,
            "start": 39,
            "end": 53
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "췯",
                "rawText": "\"\\u{CDEF}\"",
                "flags": 8289,
                "start": 53,
                "end": 64
            },
            "flags": 16,
            "start": 53,
            "end": 66
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "prefix Hͅ",
                "rawText": "\"prefix \\u{012345}\"",
                "flags": 8289,
                "start": 66,
                "end": 86
            },
            "flags": 16,
            "start": 66,
            "end": 88
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "Hͅ postfix",
                "rawText": "\"\\u{012345} postfix\"",
                "flags": 8289,
                "start": 88,
                "end": 109
            },
            "flags": 16,
            "start": 88,
            "end": 111
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "Hͅƞ",
                "rawText": "\"\\u{012345}\\u{6789a}\"",
                "flags": 8289,
                "start": 111,
                "end": 133
            },
            "flags": 16,
            "start": 111,
            "end": 133
        }
    ],
    "isModule": false,
    "source": "\"\\u{0123}\"\n;\n\"\\u{4567}\"\n;\n\"\\u{89abc}\"\n;\n\"\\u{defAB}\"\n;\n\"\\u{CDEF}\"\n;\n\"prefix \\u{012345}\"\n;\n\"\\u{012345} postfix\"\n;\n\"\\u{012345}\\u{6789a}\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 133
}
```

### Printed

```javascript

  "\"\u{0123}\"";
  "\"\u{4567}\"";
  "\"\u{89abc}\"";
  "\"\u{defAB}\"";
  "\"\u{CDEF}\"";
  "\"prefix \u{012345}\"";
  "\"\u{012345} postfix\"";
  "\"\u{012345}\u{6789a}\"";

```

### Diagnostics

```javascript
✔ No errors
```

