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
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "text": "",
                "rawText": "",
                "flags": 768,
                "start": 0,
                "end": 4
            },
            "flags": 128,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "text": "pre",
                "rawText": "pre",
                "flags": 769,
                "start": 6,
                "end": 14
            },
            "flags": 128,
            "start": 6,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "text": "post",
                "rawText": "post",
                "flags": 769,
                "start": 16,
                "end": 25
            },
            "flags": 128,
            "start": 16,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "text": "prepost",
                "rawText": "prepost",
                "flags": 769,
                "start": 27,
                "end": 39
            },
            "flags": 128,
            "start": 27,
            "end": 41
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "text": "",
                "rawText": "",
                "flags": 769,
                "start": 41,
                "end": 46
            },
            "flags": 128,
            "start": 41,
            "end": 48
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "text": "pre",
                "rawText": "pre",
                "flags": 769,
                "start": 48,
                "end": 56
            },
            "flags": 128,
            "start": 48,
            "end": 58
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "text": "post",
                "rawText": "post",
                "flags": 769,
                "start": 58,
                "end": 67
            },
            "flags": 128,
            "start": 58,
            "end": 69
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "text": "prepost",
                "rawText": "prepost",
                "flags": 769,
                "start": 69,
                "end": 81
            },
            "flags": 128,
            "start": 69,
            "end": 81
        }
    ],
    "isModule": false,
    "text": "\"\\\n\"\n;\n\"pre\\\n\"\n;\n\"\\\npost\"\n;\n\"pre\\\npost\"\n;\n\"\\\r\"\n;\n\"pre\\\r\"\n;\n\"\\\rpost\"\n;\n\"pre\\\rpost\"",
    "fileName": "__root__",
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

