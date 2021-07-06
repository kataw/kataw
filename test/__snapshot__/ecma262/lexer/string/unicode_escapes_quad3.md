# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
"\u0123"
;
"\u4567"
;
"\u89ab"
;
"\ucdef"
;
"\uABCD"
;
"\uDE00"
;
"prefix \u0123"
;
"\u0123 postfix"
;
"\u0123\u4567"
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
                "rawText": "\"\\u0123\"",
                "flags": 16480,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "䕧",
                "rawText": "\"\\u4567\"",
                "flags": 16481,
                "transformFlags": 0,
                "start": 10,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 10,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "覫",
                "rawText": "\"\\u89ab\"",
                "flags": 16481,
                "transformFlags": 0,
                "start": 21,
                "end": 30
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 21,
            "end": 32
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "췯",
                "rawText": "\"\\ucdef\"",
                "flags": 16481,
                "transformFlags": 0,
                "start": 32,
                "end": 41
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 32,
            "end": 43
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "ꯍ",
                "rawText": "\"\\uABCD\"",
                "flags": 16481,
                "transformFlags": 0,
                "start": 43,
                "end": 52
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 43,
            "end": 54
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "\ude00",
                "rawText": "\"\\uDE00\"",
                "flags": 16481,
                "transformFlags": 0,
                "start": 54,
                "end": 63
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 54,
            "end": 65
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "prefix ģ",
                "rawText": "\"prefix \\u0123\"",
                "flags": 16481,
                "transformFlags": 0,
                "start": 65,
                "end": 81
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 65,
            "end": 83
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "ģ postfix",
                "rawText": "\"\\u0123 postfix\"",
                "flags": 16481,
                "transformFlags": 0,
                "start": 83,
                "end": 100
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 83,
            "end": 102
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "ģ䕧",
                "rawText": "\"\\u0123\\u4567\"",
                "flags": 16481,
                "transformFlags": 0,
                "start": 102,
                "end": 117
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 102,
            "end": 117
        }
    ],
    "isModule": false,
    "source": "\"\\u0123\"\n;\n\"\\u4567\"\n;\n\"\\u89ab\"\n;\n\"\\ucdef\"\n;\n\"\\uABCD\"\n;\n\"\\uDE00\"\n;\n\"prefix \\u0123\"\n;\n\"\\u0123 postfix\"\n;\n\"\\u0123\\u4567\"",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 117
}
```

### Printed

```javascript
"\"\u0123\"";
"\"\u4567\"";

"\"\u89ab\"";

"\"\ucdef\"";

"\"\uABCD\"";

"\"\uDE00\"";

"\"prefix \u0123\"";

"\"\u0123 postfix\"";

"\"\u0123\u4567\"";

```

### Diagnostics

```javascript
✔ No errors
```

