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
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "\r\n",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "prefix\r\n",
                "autofix": 0,
                "flags": 768,
                "start": 8,
                "end": 21
            },
            "autofix": 0,
            "flags": 128,
            "start": 8,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "\r\nsuffix",
                "autofix": 0,
                "flags": 768,
                "start": 23,
                "end": 36
            },
            "autofix": 0,
            "flags": 128,
            "start": 23,
            "end": 38
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "\rinfix\nsuffix",
                "autofix": 0,
                "flags": 768,
                "start": 38,
                "end": 56
            },
            "autofix": 0,
            "flags": 128,
            "start": 38,
            "end": 56
        }
    ],
    "isModule": false,
    "text": "\"\\r\\n\"\n;\n\"prefix\\r\\n\"\n;\n\"\\r\\nsuffix\"\n;\n\"\\rinfix\\nsuffix\"",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 56
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

