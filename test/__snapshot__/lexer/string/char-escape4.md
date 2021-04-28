# Kataw parser test case

## Input

`````js
"\r\n"
;
"prefix\r\n"
;
"\r\nsuffix"
;
"\rinfix\nsuffix"
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
                "text": "\r\n",
                "rawText": "\r\n",
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
                "text": "prefix\r\n",
                "rawText": "prefix\r\n",
                "flags": 97,
                "start": 8,
                "end": 21
            },
            "flags": 16,
            "start": 8,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "\r\nsuffix",
                "rawText": "\r\nsuffix",
                "flags": 97,
                "start": 23,
                "end": 36
            },
            "flags": 16,
            "start": 23,
            "end": 38
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "\rinfix\nsuffix",
                "rawText": "\rinfix\nsuffix",
                "flags": 97,
                "start": 38,
                "end": 56
            },
            "flags": 16,
            "start": 38,
            "end": 56
        }
    ],
    "isModule": false,
    "text": "\"\\r\\n\"\n;\n\"prefix\\r\\n\"\n;\n\"\\r\\nsuffix\"\n;\n\"\\rinfix\\nsuffix\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 56
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

