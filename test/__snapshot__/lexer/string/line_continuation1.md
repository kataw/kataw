# Kataw parser test case

## Input

`````js
"\
"
;
"pre\
"
;
"\
post"
;
"pre\
post"
;
"\@{xd}@"
;
"pre\@{xd}@"
;
"\@{xd}@post"
;
"pre\@{xd}@post"
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
                "value": "",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 4
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "pre",
                "autofix": 0,
                "flags": 768,
                "start": 6,
                "end": 14
            },
            "autofix": 0,
            "flags": 128,
            "start": 6,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "post",
                "autofix": 0,
                "flags": 768,
                "start": 16,
                "end": 25
            },
            "autofix": 0,
            "flags": 128,
            "start": 16,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "prepost",
                "autofix": 0,
                "flags": 768,
                "start": 27,
                "end": 39
            },
            "autofix": 0,
            "flags": 128,
            "start": 27,
            "end": 41
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "",
                "autofix": 0,
                "flags": 768,
                "start": 41,
                "end": 46
            },
            "autofix": 0,
            "flags": 128,
            "start": 41,
            "end": 48
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "pre",
                "autofix": 0,
                "flags": 768,
                "start": 48,
                "end": 56
            },
            "autofix": 0,
            "flags": 128,
            "start": 48,
            "end": 58
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "post",
                "autofix": 0,
                "flags": 768,
                "start": 58,
                "end": 67
            },
            "autofix": 0,
            "flags": 128,
            "start": 58,
            "end": 69
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "prepost",
                "autofix": 0,
                "flags": 768,
                "start": 69,
                "end": 81
            },
            "autofix": 0,
            "flags": 128,
            "start": 69,
            "end": 81
        }
    ],
    "isModule": false,
    "text": "\"\\\n\"\n;\n\"pre\\\n\"\n;\n\"\\\npost\"\n;\n\"pre\\\npost\"\n;\n\"\\\r\"\n;\n\"pre\\\r\"\n;\n\"\\\rpost\"\n;\n\"pre\\\rpost\"",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 81
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

