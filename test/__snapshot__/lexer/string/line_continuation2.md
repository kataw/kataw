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
                "kind": 201392131,
                "text": "",
                "rawText": "\"\\\n\"",
                "flags": 96,
                "start": 0,
                "end": 4
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "pre",
                "rawText": "\"pre\\\n\"",
                "flags": 97,
                "start": 6,
                "end": 14
            },
            "flags": 16,
            "start": 6,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "post",
                "rawText": "\"\\\npost\"",
                "flags": 97,
                "start": 16,
                "end": 25
            },
            "flags": 16,
            "start": 16,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "prepost",
                "rawText": "\"pre\\\npost\"",
                "flags": 97,
                "start": 27,
                "end": 39
            },
            "flags": 16,
            "start": 27,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "\"\\\n\"\n;\n\"pre\\\n\"\n;\n\"\\\npost\"\n;\n\"pre\\\npost\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
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

