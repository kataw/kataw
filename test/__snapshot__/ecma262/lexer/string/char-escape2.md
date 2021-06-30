# Kataw parser test case

## Input

`````js
"prefix \'"
;
"prefix\""
;
"prefix\\"
;
"prefix\b"
;
"prefix\f"
;
"prefix\n"
;
"prefix\r"
;
"prefix\t"
;
"prefix\v"
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
                "text": "prefix '",
                "rawText": "\"prefix \\'\"",
                "flags": 96,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "prefix\"",
                "rawText": "\"prefix\\\"\"",
                "flags": 97,
                "start": 13,
                "end": 24
            },
            "flags": 16,
            "start": 13,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "prefix\\",
                "rawText": "\"prefix\\\\\"",
                "flags": 97,
                "start": 26,
                "end": 37
            },
            "flags": 16,
            "start": 26,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "prefix\b",
                "rawText": "\"prefix\\b\"",
                "flags": 97,
                "start": 39,
                "end": 50
            },
            "flags": 16,
            "start": 39,
            "end": 52
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "prefix\f",
                "rawText": "\"prefix\\f\"",
                "flags": 97,
                "start": 52,
                "end": 63
            },
            "flags": 16,
            "start": 52,
            "end": 65
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "prefix\n",
                "rawText": "\"prefix\\n\"",
                "flags": 97,
                "start": 65,
                "end": 76
            },
            "flags": 16,
            "start": 65,
            "end": 78
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "prefix\r",
                "rawText": "\"prefix\\r\"",
                "flags": 97,
                "start": 78,
                "end": 89
            },
            "flags": 16,
            "start": 78,
            "end": 91
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "prefix\t",
                "rawText": "\"prefix\\t\"",
                "flags": 97,
                "start": 91,
                "end": 102
            },
            "flags": 16,
            "start": 91,
            "end": 104
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "prefix\u000b",
                "rawText": "\"prefix\\v\"",
                "flags": 97,
                "start": 104,
                "end": 115
            },
            "flags": 16,
            "start": 104,
            "end": 115
        }
    ],
    "isModule": false,
    "source": "\"prefix \\'\"\n;\n\"prefix\\\"\"\n;\n\"prefix\\\\\"\n;\n\"prefix\\b\"\n;\n\"prefix\\f\"\n;\n\"prefix\\n\"\n;\n\"prefix\\r\"\n;\n\"prefix\\t\"\n;\n\"prefix\\v\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 115
}
```

### Printed

```javascript

'"prefix \'"';
'"prefix""';
'"prefix\\"';
'"prefix\b"';
'"prefix\f"';
'"prefix\n"';
'"prefix\r"';
'"prefix\t"';
'"prefix\v"';

```

### Diagnostics

```javascript
✔ No errors
```

