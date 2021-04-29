# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false, next: true, module: true }
`````

## Input

`````js
"\'"
;
"\""
;
"\\"
;
"\b"
;
"\f"
;
"\n"
;
"\r"
;
"\t"
;
"\v"
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
                "text": "'",
                "rawText": "'",
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
                "text": "\"",
                "rawText": "\"",
                "flags": 97,
                "start": 6,
                "end": 11
            },
            "flags": 16,
            "start": 6,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "\\",
                "rawText": "\\",
                "flags": 97,
                "start": 13,
                "end": 18
            },
            "flags": 16,
            "start": 13,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "\b",
                "rawText": "\b",
                "flags": 97,
                "start": 20,
                "end": 25
            },
            "flags": 16,
            "start": 20,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "\f",
                "rawText": "\f",
                "flags": 97,
                "start": 27,
                "end": 32
            },
            "flags": 16,
            "start": 27,
            "end": 34
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "\n",
                "rawText": "\n",
                "flags": 97,
                "start": 34,
                "end": 39
            },
            "flags": 16,
            "start": 34,
            "end": 41
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "\r",
                "rawText": "\r",
                "flags": 97,
                "start": 41,
                "end": 46
            },
            "flags": 16,
            "start": 41,
            "end": 48
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "\t",
                "rawText": "\t",
                "flags": 97,
                "start": 48,
                "end": 53
            },
            "flags": 16,
            "start": 48,
            "end": 55
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "\u000b",
                "rawText": "\u000b",
                "flags": 97,
                "start": 55,
                "end": 60
            },
            "flags": 16,
            "start": 55,
            "end": 60
        }
    ],
    "isModule": true,
    "source": "\"\\'\"\n;\n\"\\\"\"\n;\n\"\\\\\"\n;\n\"\\b\"\n;\n\"\\f\"\n;\n\"\\n\"\n;\n\"\\r\"\n;\n\"\\t\"\n;\n\"\\v\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 60
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

