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
            "end": 41
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "@{xd}@",
                "rawText": "\"\\@{xd}@\"",
                "flags": 97,
                "start": 41,
                "end": 51
            },
            "flags": 16,
            "start": 41,
            "end": 53
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "pre@{xd}@",
                "rawText": "\"pre\\@{xd}@\"",
                "flags": 97,
                "start": 53,
                "end": 66
            },
            "flags": 16,
            "start": 53,
            "end": 68
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "@{xd}@post",
                "rawText": "\"\\@{xd}@post\"",
                "flags": 97,
                "start": 68,
                "end": 82
            },
            "flags": 16,
            "start": 68,
            "end": 84
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "pre@{xd}@post",
                "rawText": "\"pre\\@{xd}@post\"",
                "flags": 97,
                "start": 84,
                "end": 101
            },
            "flags": 16,
            "start": 84,
            "end": 101
        }
    ],
    "isModule": false,
    "source": "\"\\\n\"\n;\n\"pre\\\n\"\n;\n\"\\\npost\"\n;\n\"pre\\\npost\"\n;\n\"\\@{xd}@\"\n;\n\"pre\\@{xd}@\"\n;\n\"\\@{xd}@post\"\n;\n\"pre\\@{xd}@post\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 101
}
```

### Printed

```javascript

 "\
";, "pre\
";, "\
post";, "pre\
post";, "\@{xd}@";, "pre\@{xd}@";, "\@{xd}@post";, "pre\@{xd}@post"; 
```

### Diagnostics

```javascript
✔ No errors
```

