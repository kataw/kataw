# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

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
            "end": 39
        }
    ],
    "isModule": false,
    "text": "\"\\\n\"\n;\n\"pre\\\n\"\n;\n\"\\\npost\"\n;\n\"pre\\\npost\"",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

